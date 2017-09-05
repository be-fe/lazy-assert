var utils = require('./utils');

module.exports = {
    load: function (lazyAssert) {
        var VALIDATE_KEY = '--[[validate_key]]--';

        var validatorsUtils = {

            /**
             *
             * @def: ~Validator: arrayConfig | objectConfig | stringConfig | notStringConfig | regexpConfig | functionConfig >>
             *  | refConfig | null | undefined | number | boolean
             *
             *  // The function being used to validate the target value
             *  functionConfig: (val, key, parent) => boolean
             *      val: any
             *      key: string | number
             *      parent: {} | []
             *
             *  // Use to validate the type (or special class instance/value) of the target value
             *  // 'string' | 'number' | 'function' | 'array' | 'regexp' | 'boolean' | 'nan' | 'infinity' | '-infinity' |
             *  // 'object' | 'null'
             *  stringConfig: string    as ~StringConfig
             *
             *  // '!' + #@~StringConfig, refers to "not ..."
             *  notStringConfig: string
             *
             *  // '=' + path, e.g. =.ref.from.root.0
             *  refConfig: string
             *
             *  // Use to validate string/number against the regexp
             *  regexpConfig: RegExp
             *
             *  ///
             *  Unless the first item is 'array', arrayConfig is used to validate the target value as a whole.
             *
             *  If the first item is 'array', this config is used to validate any item of the target value, as the target value
             *  is an array itself.
             *  ///
             *  arrayConfig: ['array', arrayValidator, ...] | [orValidator, ...] | ['value', rawValue...] >>
             *      | [op, value] | ['!', notValidator...] | ['and', andValidator, ...] | ['or', orValidator, ...]
             *      ///
             *      When first item = 'array', the following Validator is to validate any item of the target value,
             *      which should be an array.
             *      ///
             *      arrayValidator: #@~Validator
             *
             *      ///
             *      When the first item of the array is set as 'value', this is the "exact value" to be checked against the
             *      target value.
             *
             *      If more than one rawValues are given , they are checked in an 'OR' condition.
             *      ///
             *      rawValue: any
             *
             *      // For quickily building up condition for checking the target value
             *      op: '>' | '<' | '>=' | '<='
             *
             *      // When no special first item is set, the result is true when any of the validators succeeds
             *      orValidator: #@~Validator
             *
             *      // When the first item is '!', the result of validation is true only if all the validators returns false
             *      notValidator: #@~Validator
             *
             *      // When the first item is 'and', the result of validation is true only when all the validators succeed
             *      andValidator: #@~Validator
             *
             *  // key is related to the target's object's key
             *  objectConfig: {key: #@~Validator}
             *
             * @def: .innerValidate: peekKey, actualTargetValue, validator => result
             *  peekKey: string         // The key to help marking the output easier
             *  actualTargetValue: any  // The value to validate
             *  validator: #@~Validator     // The validator to be used to validate the target value
             *
             *  result: {}
             *      // if true, no other info will be given, the other info will only be given when result = false
             *      result: boolean
             *
             *      message: string
             *
             *      // path to the target
             *      path: string
             *
             *      target: any
             *      type: string
             *      expected: any
             */
            validate: function (target, validator, extra) {
                // @todo: remove this
                if (!extra) {
                    var isFirstLevel = true;
                }
                extra = extra || {path: [], refs: {}, pendingRefs: {}};

                var result;
                if (typeof validator === 'string') {
                    result = validatorsUtils.stringValidator(target, validator, extra);
                }
                else if (utils.isArray(validator)) {
                    result = validatorsUtils.validatorArray(target, validator, extra);
                }
                else if (utils.isRegExp(validator)) {
                    result = validatorsUtils.validatorRegExp(target, validator);
                }
                else if (typeof validator === 'object') {
                    if (validator) {
                        // it's a non-null object
                        result = validatorsUtils.validatorObject(target, validator, extra);
                    }
                    else {
                        // it's a null
                        result = validatorsUtils.exactValidator(target, null);
                    }
                }
                else if (typeof validator === 'function') {
                    result = validatorsUtils.validatorFunction(target, validator, extra);
                }
                else {
                    // boolean, undefined, number
                    result = validatorsUtils.exactValidator(target, validator);
                }

                if (isFirstLevel) {
                    // console.log('@@d', extra.refs, 'pending', extra.pendingRefs);

                    for (var key in extra.pendingRefs) {
                        var keyParts = key.split(':');
                        var refKey = keyParts[1];
                        if (extra.refs[refKey] !== extra.pendingRefs[key]) {
                            result = {
                                result: false,
                                path: keyParts[0],
                                targetPath: refKey,
                                message: 'Ref is not equal'
                            }
                        }
                    }
                }
                return result;
            },

            validatorObject: function (target, validator, extra) {
                var result, keys = [];
                if (utils.isArray(target) || typeof target !== 'object') {
                    return {
                        result: false,
                        target: target,
                        validator: validator,
                        message: 'Target is not an object (Array is not recognised as valid object here), but is to be validated against object validator'
                    }
                }
                for (var key in validator) {
                    extra.path.push(key);
                    var refPath = extra.path.join('.');
                    extra.refs[refPath] = target[key];
                    result = validatorsUtils.validate(target[key], validator[key], {
                        key: key,
                        parent: target,
                        path: extra.path,
                        refs: extra.refs,
                        pendingRefs: extra.pendingRefs
                    });
                    extra.path.pop();

                    if (!result) {
                        return {
                            result: false,
                            key: key,
                            path: refPath,
                            validator: validator[key],
                            message: 'Problem with validating against validator'
                        }
                    }
                    else if (!result.result) {
                        result.path = result.path || refPath;
                        return result;
                    }
                }

                return {
                    result: true
                }
            },

            validatorRegExp: function (target, validator) {
                if ((typeof target === 'number' && !isNaN(target) && isFinite(target)) || typeof target === 'string') {
                    var match = validator.exec(String(target));
                    if (match) {
                        return {
                            result: true
                        }
                    }
                    else {
                        return {
                            result: false,
                            target: target,
                            regexp: validator,
                            message: 'Target does not match regexp'
                        }
                    }
                }
                else {
                    return {
                        result: false,
                        target: target,
                        regexp: validator,
                        message: 'Target can not be tested by regexp'
                    }
                }
            },

            validatorArray: function (target, validator, extra) {
                if (validator.length === 0) {
                    return {
                        result: false,
                        validator: validator,
                        message: 'Validator should not be an empty array.'
                    }
                }
                else if (validator[0] === 'and') {
                    return validatorsUtils.validatorAndArray(target, validator, extra);
                }
                else if (validator[0] === '>') {
                    return validatorsUtils.validatorFunction(target, function (target) {
                        return target > validator[1]
                    }, {funcInfo: 'Comparison : > ' + validator[1]});
                }
                else if (validator[0] === '<') {
                    return validatorsUtils.validatorFunction(target, function (target) {
                        return target < validator[1]
                    }, {funcInfo: 'Comparison : < ' + validator[1]});
                }
                else if (validator[0] === '>=') {
                    return validatorsUtils.validatorFunction(target, function (target) {
                        return target >= validator[1]
                    }, {funcInfo: 'Comparison : >= ' + validator[1]});
                }
                else if (validator[0] === '<=') {
                    return validatorsUtils.validatorFunction(target, function (target) {
                        return target <= validator[1]
                    }, {funcInfo: 'Comparison : <= ' + validator[1]});
                }
                else if (validator[0] === '!') {
                    return validatorsUtils.validatorNotArray(target, validator, extra);
                }
                else if (validator[0] === 'value') {
                    return validatorsUtils.validatorValueArray(target, validator);
                }
                else if (validator[0] === 'or') {
                    validator.shift();
                    return validatorsUtils.validatorOrArray(target, validator);
                }
                else if (validator[0] === 'array') {
                    return validatorsUtils.validatorArrayArray(target, validator, extra);
                }
                else {
                    return validatorsUtils.validatorOrArray(target, validator, extra);
                }
            },

            validatorArrayArray: function (target, validator, extra) {
                if (utils.isArray(target)) {
                    var itemResult, result;

                    for (var i = 0; i < target.length; i++) {
                        itemResult = false;
                        extra.path.push(i);
                        var refPath = extra.path.join('.');
                        extra.refs[refPath] = target[i];

                        for (var j = 1; j < validator.length; j++) {
                            result = validatorsUtils.validate(target[i], validator[j], {
                                key: i,
                                parent: target,
                                path: extra.path,
                                refs: extra.refs,
                                pendingRefs: extra.pendingRefs
                            });

                            if (result.result) {
                                itemResult = true;
                                break;
                            }
                        }

                        extra.path.pop();
                        if (!itemResult) {
                            return {
                                result: false,
                                target: target[i],
                                path: refPath,
                                index: i,
                                validator: validator,
                                message: 'Target does not meet the array validators'
                            }
                        }
                    }

                    return {
                        result: true
                    }
                }
                else {
                    return {
                        result: false,
                        target: target,
                        validator: validator,
                        message: 'Target is not an array.'
                    }
                }
            },

            validatorFunction: function (target, validatorFunction, extra) {
                if (validatorFunction(target, extra.key, extra.parent)) {
                    return {
                        result: true
                    }
                }
                else {
                    return {
                        result: false,
                        funcInfo: extra.funcInfo,
                        target: target
                    }
                }
            },

            validatorOrArray: function (target, validator, extra) {
                var result;
                for (var i = 0; i < validator.length; i++) {
                    result = validatorsUtils.validate(target, validator[i], extra);
                    if (!result) {
                        return {
                            result: false,
                            i: i,
                            target: target[i],
                            path: extra.path.join('.'),
                            validator: validator[i],
                            message: 'Problem with validating against validator'
                        }
                    }

                    if (result.result) {
                        return {
                            result: true
                        }
                    }
                }

                return {
                    result: false,
                    target: target,
                    validator: validator,
                    message: 'Did not match or-array'
                }
            },

            validatorValueArray: function (target, validator) {
                var result;
                for (var i = 1; i < validator.length; i++) {
                    result = validatorsUtils.exactValidator(target, validator[i]);
                    if (result.result) {
                        return {
                            result: true
                        }
                    }
                }

                return {
                    result: false,
                    target: target,
                    validator: validator,
                    message: 'Did not exact equal any value in the value-array'
                }
            },

            validatorNotArray: function (target, validator, extra) {
                var result;
                for (var i = 1; i < validator.length; i++) {
                    result = validatorsUtils.validate(target, validator[i], extra);
                    if (result.result) {
                        return {
                            result: false,
                            type: 'not array',
                            target: target,
                            index: i,
                            subValidator: validator[i],
                            message: 'Did not meet the not-array validator'
                        }
                    }
                }

                return {
                    result: true
                }
            },

            validatorAndArray: function (target, validator, extra) {
                var result;
                for (var i = 1; i < validator.length; i++) {
                    result = validatorsUtils.validate(target, validator[i], extra);
                    if (!result.result) {
                        return {
                            result: false,
                            subResult: result,
                            index: i,
                            subValidator: validator[i],
                            message: 'Did not meet all validators in and array'
                        }
                    }
                }

                return {
                    result: true
                }
            },

            stringValidator: function (target, validator, extra) {
                if (validator.substr(0, 1) === '=') {
                    var refPath = extra.path.join('.');
                    extra.pendingRefs[refPath + ':' + validator.substr(1)] = target;
                    return {result: true}
                }
                else if (validator === 'nan') {
                    return validatorsUtils.nanValidator(target);
                }
                else if (validator === 'infinity') {
                    return validatorsUtils.exactValidator(target, Infinity);
                }
                else if (validator === '-infinity') {
                    return validatorsUtils.exactValidator(target, -Infinity);
                }
                else if (validator === 'null' || validator === null) {
                    return validatorsUtils.exactValidator(target, null);
                }
                else if (validator === 'undefined' || validator === undefined) {
                    return validatorsUtils.exactValidator(target, undefined);
                }
                else if (validator === 'number' || validator === 'boolean'
                    || validator === 'function' || validator === 'string') {
                    return validatorsUtils.typeValidator(target, validator);
                }
                else if (validator === 'object') {
                    if (!target) {
                        return {
                            result: false,
                            target: target,
                            message: 'Target is not an non-null object'
                        }
                    }
                    return validatorsUtils.typeValidator(target, 'object');
                }
                else if (validator === 'array') {
                    return validatorsUtils.arrayValidator(target);
                }
                else if (validator === 'regexp') {
                    return validatorsUtils.regexpValidator(target);
                }
            },
            regexpValidator: function (target) {
                if (utils.isRegExp(target)) {
                    return {result: true};
                }
                else {
                    return {
                        result: false,
                        target: target,
                        message: 'Target is not a RegExp'
                    }
                }
            },
            arrayValidator: function (target) {
                if (utils.isArray(target)) {
                    return {result: true}
                }
                else {
                    return {
                        result: false,
                        target: target,
                        message: 'Target is not an array'
                    }
                }
            },
            nanValidator: function (target) {
                if (typeof target === 'number' && isNaN(target)) {
                    return {
                        result: true
                    };
                }
                else {
                    return {
                        result: false,
                        target: target,
                        message: 'Target is not NaN'
                    }
                }
            },
            typeValidator: function (target, type) {
                if (typeof target === type) {
                    return {
                        result: true
                    }
                }
                else {
                    return {
                        result: false,
                        target: target,
                        type: type,
                        message: 'Target value is not of the expected type'
                    }
                }
            },
            exactValidator: function (target, expected) {
                if (target === expected) {
                    return {
                        result: true
                    }
                }
                else {
                    return {
                        result: false,
                        target: target,
                        expected: expected,
                        message: 'Target is not equal to the expected value.'
                    }
                }
            },

            summarizeTypeValidator: function (target) {
                var rawValidator = validatorsUtils.preSummarizeTypeValidator(target);
                validatorsUtils.clearValidateKey(target);

                var validator = validatorsUtils.extractValidatorFromRaw(rawValidator);
                return validator;
            },

            extractValidatorFromRaw: function (validator) {
                var result = [];
                validator[2].forEach(function (type) {
                    if (type === 'object') {
                        var object = {};
                        if (validator[0]) {
                            for (var key in validator[0]) {
                                object[key] = validatorsUtils.extractValidatorFromRaw(validator[0][key]);
                            }
                        }
                        result.push(object);
                    }
                    else if (type === 'array') {
                        var array;

                        if (validator[1] && validator[1].length) {
                            array = validatorsUtils.extractValidatorFromRaw(validator[1]);
                            if (typeof array === 'string' || typeof array === 'object') {
                                array = ['array', array];
                            }
                            else {
                                array.unshift('array');
                            }
                        }
                        else {
                            array = ['array'];
                        }

                        result.push(array);
                    }
                    else {
                        result.push(type);
                    }
                });

                if (result.length === 1) {
                    return result[0];
                }
                return result;
            },

            /**
             *
             * @.def: .summarizeTypeValidator: target => validator
             *  validator: [object, array, simple]
             *      object: {key: validator}
             *      array: validator
             *      simple: [string]
             */
            preSummarizeTypeValidator: function (target, path) {
                var validator;
                path = path || '';

                if (utils.isRegExp(target)) {
                    return [null, null, ['regexp']];
                }
                else if (utils.isArray(target)) {
                    if (target[VALIDATE_KEY]) {
                        return [null, null, ['=' + target[VALIDATE_KEY]]];
                    }
                    else {
                        target[VALIDATE_KEY] = path;
                    }

                    validator = [null, [], ['array']];

                    target.forEach(function (item, index) {
                        var subValidator = validatorsUtils.preSummarizeTypeValidator(item, (path ? path + '.' : '') + index);
                        validatorsUtils.mergeChildSummary(validator, subValidator);
                    });

                    return validator;
                }
                else if (typeof target === 'object') {
                    if (target) {
                        if (target[VALIDATE_KEY]) {
                            return [null, null, ['=' + target[VALIDATE_KEY]]];
                        }
                        else {
                            target[VALIDATE_KEY] = path || '';
                        }
                        validator = {};

                        var keys = [];
                        for (var key in target) {
                            if (key !== VALIDATE_KEY) {
                                keys.push(key);
                            }
                        }
                        keys.sort();
                        keys.forEach(function (key) {
                            validator[key] = [null, null, []];

                            validatorsUtils.mergeSiblingSummary(validator[key], validatorsUtils.preSummarizeTypeValidator(target[key], (path ? path + '.' : '') + key));
                        });
                        return [validator, null, ['object']];
                    }
                    else {
                        return [null, null, ['null']];
                    }
                }
                else if (typeof target === 'number') {
                    if (isNaN(target)) {
                        return [null, null, ['nan']];
                    }
                    else if (target === Infinity) {
                        return [null, null, ['infinity']];
                    }
                    else if (target === -Infinity) {
                        return [null, null, ['-infinity']];
                    }
                    else {
                        return [null, null, ['number']];
                    }
                }
                else {
                    // boolean, undefined, function, string
                    return [null, null, [typeof target]];
                }
            },

            mergeSiblingSummary: function (previous, current) {
                current[2].forEach(function (type) {
                    validatorsUtils.mergeChildSummary(previous, type);
                });
                if (current[1] && current[1].length) {
                    validatorsUtils.mergeChildSummary(previous, current[1]);
                }
                if (current[0]) {
                    validatorsUtils.mergeChildSummary(previous, current[0]);
                }
            },

            mergeChildSummary: function (parent, child) {
                if (typeof child === 'string') {
                    if (parent[2].indexOf(child) === -1) {
                        parent[2].push(child);
                    }
                }
                else if (utils.isArray(child)) {
                    if (!parent[1] || !parent[1].length) {
                        parent[1] = [null, null, []];
                    }
                    child[2].forEach(function (type) {
                        validatorsUtils.mergeChildSummary(parent[1], type);
                    });
                    if (child[1] && child[1].length) {
                        validatorsUtils.mergeChildSummary(parent[1], child[1]);
                    }
                    if (child[0]) {
                        validatorsUtils.mergeChildSummary(parent[1], child[0]);
                    }
                }
                else if (typeof child === 'object') {
                    var isFirst = parent[0] === null, currentKeys = {};
                    if (isFirst) {
                        parent[0] = {};
                    }
                    else {
                        for (var key in parent[0]) {
                            currentKeys[key] = 1;
                        }
                    }

                    for (var key in child) {
                        if (isFirst) {
                            parent[0][key] = [null, [], []];
                        }
                        else {
                            if (!parent[0][key]) {
                                parent[0][key] = [null, [], ['undefined']];
                            }
                        }
                        delete currentKeys[key];
                        validatorsUtils.mergeSiblingSummary(parent[0][key], child[key]);
                    }

                    for (var key in currentKeys) {
                        validatorsUtils.mergeChildSummary(parent[0][key], 'undefined');
                    }
                }
            },

            clearValidateKey: function (target) {
                if (typeof target === 'object' && target) {
                    if (VALIDATE_KEY in target) {
                        delete target[VALIDATE_KEY];
                        for (var key in target) {
                            validatorsUtils.clearValidateKey(target[key]);
                        }
                    }
                }
            }
        };

        lazyAssert.validators = {};
        utils.extend(lazyAssert.validators, validatorsUtils);
    }
};