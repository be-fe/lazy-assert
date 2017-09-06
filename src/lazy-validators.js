var utils = require('./utils');

// @start-def: lazy.validators;
module.exports = {
    load: function (lazyAssert) {
        /**
         * The key to mark "ref" in objects/arrays
         *
         * @def: ~VALIDATE_KEY: string
         */
        var VALIDATE_KEY = '--[[validate_key]]--';
        var DEBUG_PATH_KEY = '--[[path]]--';

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
             * @def: .validate: peekKey, actualTargetValue, validator => result
             *  peekKey: string         // The key to help marking the output easier
             *  actualTargetValue: any  // The value to validate
             *  validator: #@~Validator     // The validator to be used to validate the target value
             *
             *  result: {}
             *      // if true, no other info will be given, the other info will only be given when result = false
             *      result: boolean
             *
             *      // a type to show the type of a validation
             *      type: 'ref-check' | 'object' | 'regexp' | 'array' >>
             *          | 'array-array' | 'function' | 'or-array' >>
             *          | 'value-array' | 'not-array' | 'and-array' >>
             *          | 'type' | 'exact-equal' | 'function'
             *
             *
             *      // type == 'array-array'
             *      reason: 'target-not-array'
             *
             *      // type == 'or-array'
             *      reason: 'all-type-failed'
             *
             *      // type = 'object'
             *      reason: 'is-array' | 'is-not-object' | 'failed-on-key'
             *
             *      // type == 'object' | 'or-array'
             *      reason: 'validator-error'
             *
             *      // type == 'value-array'
             *      reason: 'all-values-failed'
             *
             *      // type == 'type'
             *      reason: 'nan' | 'function' | 'regexp' | 'array' >>
             *          | 'object-target-is-null' | 'number' | 'null' | 'undefined' >>
             *          | 'infinity' | '-infinity' | 'object' | 'boolean' | 'string'
             *
             *      // type == 'exact-equal'
             *      reason: 'not-equal'
             *
             *      // type == 'function'
             *      reason: 'returned-false'
             *
             *      // type == 'not-array' | 'and-array'
             *      reason: 'some-failed'
             *
             *      // type == 'regexp'
             *      reason: 'match-failed' | 'target-type-error'
             *
             *      // type == 'array'
             *      reason: 'validator-empty'
             *
             *      // explanation
             *      message: string
             *
             *      // set if it is a prop of an object
             *      key: string
             *
             *      // set if it is an item from an array
             *      index: number
             *
             *      // set if the validator is an item from an array
             *      vIndex: number
             *
             *      // valid for exact validator
             *      expected: any
             *
             *      // valid for regexp validator
             *      regexp: RegExp
             *
             *      // Comparison : OP value, valid for op array validators
             *      funcInfo: string
             *
             *      // for some complex validation, sub results should be recorded in order to show the detailed reason
             *      subResult: [result]
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
                                type: 'ref-check',
                                sourcePath: keyParts[0],
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
                if (utils.isArray(target)) {
                    return {
                        result: false,
                        type: 'object',
                        reason: 'is-array',
                        message: 'Target is an array (Array is not recognised as valid object here), but is to be validated against object validator'
                    }
                }
                if (typeof target !== 'object' || !target) {
                    return {
                        result: false,
                        type: 'object',
                        reason: 'is-not-object',
                        message: 'Target is not an object.'
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
                            type: 'object',
                            reason: 'validator-error',
                            key: key,
                            message: 'Problem with validating against validator'
                        }
                    }
                    else if (!result.result) {
                        return {
                            result: false,
                            type: 'object',
                            reason: 'failed-on-key',
                            key: key,
                            message: 'Failed on object property validation',
                            subResult: [result]
                        };
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
                            type: 'regexp',
                            reason: 'match-failed',
                            regexp: validator,
                            message: 'Target does not match regexp'
                        }
                    }
                }
                else {
                    return {
                        result: false,
                        type: 'regexp',
                        reason: 'target-type-error',
                        regexp: validator,
                        message: 'Target can not be tested by regexp'
                    }
                }
            },

            /**
             *
             * @def: .validatorArray: target, validator, extra => result
             *  result: {}
             *      result: boolean
             *
             *      type: 'array.validator-empty' // and others types from XXXArray
             */
            validatorArray: function (target, validator, extra) {
                if (validator.length === 0) {
                    return {
                        result: false,
                        type: 'array',
                        reason: 'validator-empty',
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
                    extra.orStartIndex = 1;
                    return validatorsUtils.validatorOrArray(target, validator, extra);
                }
                else if (validator[0] === 'array') {
                    return validatorsUtils.validatorArrayArray(target, validator, extra);
                }
                else {
                    extra.orStartIndex = 0;
                    return validatorsUtils.validatorOrArray(target, validator, extra);
                }
            },

            /**
             *
             * @def: .validatorArrayArray: ... => result
             *  result: {}
             *      type: 'array-array.all-type-failed' | 'array-array.target-not-array'
             *
             */
            validatorArrayArray: function (target, validator, extra) {
                if (utils.isArray(target)) {
                    if (validator.length <= 1) {
                        return {
                            result: true
                        }
                    }

                    var itemResult, result;

                    for (var i = 0; i < target.length; i++) {
                        itemResult = false;
                        extra.path.push(i);
                        var refPath = extra.path.join('.');
                        extra.refs[refPath] = target[i];

                        var fails = [];
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
                            else {
                                result.vIndex = j;
                                fails.push(result);
                            }
                        }

                        extra.path.pop();
                        if (!itemResult) {
                            return {
                                result: false,
                                type: 'array-array',
                                reason: 'all-type-failed',
                                index: i,
                                subResult: fails,
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
                        type: 'array-array',
                        reason: 'target-not-array',
                        message: 'Target is not an array.'
                    }
                }
            },

            validatorFunction: function (target, validatorFunction, extra) {
                var result = validatorFunction(target, extra.key, extra.parent);
                if (result) {
                    if (typeof result === 'string') {
                        return {
                            result: false,
                            type: 'function',
                            reason: 'returned-false',
                            message: 'Target did not pass the function check',
                            funcInfo: result
                        }
                    }
                    return {
                        result: true
                    }
                }
                else {
                    return {
                        result: false,
                        type: 'function',
                        reason: 'returned-false',
                        message: 'Target did not pass the function check',
                        funcInfo: extra.funcInfo
                    }
                }
            },

            validatorOrArray: function (target, validator, extra) {
                var result, fails = [];
                for (var i = extra.orStartIndex || 0; i < validator.length; i++) {
                    result = validatorsUtils.validate(target, validator[i], extra);

                    if (!result) {
                        return {
                            result: false,
                            type: 'or-array',
                            reason: 'validator-error',
                            vIndex: i,
                            path: extra.path.join('.'),
                            message: 'Problem with validating against validator, validator problem'
                        }
                    }

                    if (result.result) {
                        return {
                            result: true
                        }
                    }
                    else {
                        result.vIndex = i;
                        fails.push(result);
                    }
                }

                return {
                    result: false,
                    type: 'or-array',
                    reason: 'all-types-failed',
                    subResult: fails,
                    message: 'Did not match or-array'
                }
            },

            validatorValueArray: function (target, validator) {
                var result, fails = [];
                for (var i = 1; i < validator.length; i++) {
                    result = validatorsUtils.exactValidator(target, validator[i]);

                    if (result.result) {
                        return {
                            result: true
                        }
                    }
                    else {
                        result.vIndex = i;
                        fails.push(result);
                    }
                }

                return {
                    result: false,
                    type: 'value-array',
                    reason: 'all-values-failed',
                    subResult: fails,
                    message: 'Did not exact equal any value in the value-array'
                }
            },

            validatorNotArray: function (target, validator, extra) {
                var result;
                for (var i = 1; i < validator.length; i++) {
                    result = validatorsUtils.validate(target, validator[i], extra);
                    if (result.result) {
                        result.vIndex = i;
                        result.message = 'The sub-validator returns true in not-array check.';
                        return {
                            result: false,
                            type: 'not-array',
                            reason: 'some-failed',
                            subResult: [result],
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
                        result.vIndex = i;
                        return {
                            result: false,
                            type: 'and-array',
                            reason: 'some-failed',
                            subResult: [result],
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
                    if (target === null) {
                        return {
                            result: false,
                            type: 'type',
                            reason: 'not-null-object',
                            message: 'Target should be an non-null object'
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
                        type: 'type',
                        reason: 'regexp',
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
                        type: 'type',
                        reason: 'array',
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
                        type: 'type',
                        reason: 'nan',
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
                        type: 'type',
                        reason: type,
                        message: 'Target value is not of the expected type'
                    }
                }
            },
            exactValidator: function (target, expected) {
                if (expected && typeof expected === 'object' || typeof expected === 'function') {
                    return {
                        result: false,
                        type: 'exact-equal',
                        reason: 'validator-is-complex',
                        message: 'Validator should not be an object/function in exact match'
                    }
                }
                else if (target === expected) {
                    return {
                        result: true
                    }
                }
                else {
                    return {
                        result: false,
                        type: 'exact-equal',
                        reason: 'not-equal',
                        expected: expected,
                        message: 'Target is not equal to the expected value.'
                    }
                }
            },

            summarizeTypeValidator: function (target) {
                var rawValidator = validatorsUtils.preSummarizeTypeValidator(target);
                validatorsUtils.clearValidateKey(target);

                var validator = validatorsUtils.extractValidatorFromRaw(rawValidator);
                validator = validatorsUtils.removeOrphanUndefined(validator);
                return validator;
            },

            removeOrphanUndefined: function (validator) {
                if (validator && typeof validator === 'object') {
                    var isInArray = utils.isArray(validator);

                    for (var key in validator) {
                        if ((typeof validator[key] === 'undefined'
                                || validator[key] === 'undefined') && !isInArray) {
                            delete validator[key];
                        }
                        else {
                            validatorsUtils.removeOrphanUndefined(validator[key]);
                        }
                    }
                }
                return validator;
            },

            extractValidatorFromRaw: function (validator) {
                var result = [];
                validator[2].forEach(function (type) {
                    if (type === 'object') {
                        var object = {};
                        if (validator[0]) {
                            for (var key in validator[0]) {
                                var defaultValidator = validatorsUtils.extractValidatorFromRaw(validator[0][key]);
                                if (defaultValidator) {
                                    object[key] = defaultValidator;
                                }
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
                else if (!result.length) {
                    return undefined;
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
                        return [null, null, []];
                    }
                    else {
                        target[VALIDATE_KEY] = path;
                    }

                    validator = [null, [], ['array']];

                    target.forEach(function (item, index) {
                        var subValidator = validatorsUtils.preSummarizeTypeValidator(item, (path ? path + '.' : '') + index);
                        validatorsUtils.mergeChildSummary(validator, subValidator);
                    });

                    delete target[VALIDATE_KEY];
                    return validator;
                }
                else if (typeof target === 'object') {
                    if (target) {
                        if (target[VALIDATE_KEY]) {
                            return [null, null, []];
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

                        delete target[VALIDATE_KEY];

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
                else if (typeof target === 'function') {
                    // do not extract function as the default validator
                    return [null, null, []];
                }
                else {
                    // boolean, undefined, string
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

            /**
             * @deprecated this would not be needed as the key will always removed on the fly
             *
             * Clean all #@~VALIDATE_KEY flag from (sub) objects & (sub) arrays
             *
             * @def: .clearValidateKey: target => undefined
             *  target: any
             */
            clearValidateKey: function (target) {
                if (typeof target === 'object' && target) {
                    if (VALIDATE_KEY in target) {
                        delete target[VALIDATE_KEY];
                        for (var key in target) {
                            validatorsUtils.clearValidateKey(target[key]);
                        }
                    }
                }
            },

            /**
             * Print out all warnings based on the failed result
             *
             * @def: .printWarnings: result => undefined
             *  #@.validate.result
             */
            printWarnings: function (result) {
                console.warn(validatorsUtils.getWarnings(result));
            },

            getWarnings: function (result) {
                validatorsUtils.formalizeFailResultItem(result);
                var warning = validatorsUtils.mergeFailResults(result);
                return validatorsUtils.getWarningText(warning);
            },

            getWarningText: function (warning, indent) {
                indent = indent || '';
                var result = indent + warning.message;
                if (warning.subResult) {
                    result += '\n' + warning.subResult.map(function (warning) {
                        return validatorsUtils.getWarningText(warning, indent + '   ');
                    }).join('\n');
                }
                return result;
            },

            /**
             * build up valPath & condPath
             * generate finalMessage
             *
             * @def: .formalizeFailResultItem: result => undefined
             *  result: extends #@.validators.validator.result
             *      valPath: string
             *      condPath: string
             *      finalMessage: string
             */
            formalizeFailResultItem: function (result, parentValPath, parentCondPath, extra) {
                extra = extra || {};

                parentValPath = parentValPath || '$VAL';
                parentCondPath = parentCondPath || '$COND';

                var currentValPath = parentValPath;
                var currentCondPath = parentCondPath;

                if ('vIndex' in result) {
                    var condType = extra.parentType === 'or-array' ?
                        'or' : extra.parentType === 'and-array' ?
                            'and' : extra.parentType === 'array-array' ?
                                'array' : extra.parentType === 'not-array' ?
                                    'not' : extra.parentType === 'value-array' ?
                                        'value' : '';
                    currentCondPath = currentCondPath + '.[' + (condType ? condType + ':' : '') + result.vIndex + ']';
                }

                if ('index' in result) {
                    currentValPath = currentValPath + '.[' + result.index + ']';
                }

                if (result.key) {
                    currentValPath = currentValPath + '.' + result.key;
                    currentCondPath = currentCondPath + '.' + result.key;
                }

                result.valPath = currentValPath;
                result.condPath = currentCondPath;

                if (result.subResult) {
                    // console.log('@@d', result.subResult);

                    result.subResult.forEach(function (subResult) {
                        validatorsUtils.formalizeFailResultItem(
                            subResult, currentValPath, currentCondPath, {
                                parentType: result.type
                            }
                        )
                    });
                }

                if (result.type === 'regexp') {
                    result.finalMessage = result.message + ' <REGEXP: ' + result.regexp.toString() + ' >';
                }
                else if (result.type === 'type') {
                    result.finalMessage = result.message + ' <Expected type: ' + result.reason + ' >';
                }
                else if (result.type === 'function' && result.funcInfo) {
                    result.finalMessage = result.message + ' <Expected func test: ' + result.funcInfo + ' >';
                }
                else if (result.type == 'exact-equal' && ('expected' in result)) {
                    result.finalMessage = result.message + ' <Expected value: ' + result.expected + ' >';
                }
                else if (result.type === 'ref-check') {
                    result.finalMessage = result.message + ' source: ' + result.sourcePath + ' target: ' + result.targetPath;
                }
                else {
                    result.finalMessage = result.message;
                }

                return result;
            },

            /**
             *
             * @def: .mergeFailResults: result => warningResult
             *  result: #@.formalizeFailResultItem.result
             *
             *  warningResult: {}
             *      message: string
             *      subResult: [warningResult]
             */
            mergeFailResults: function (result) {
                if (result.subResult && result.subResult.length === 1) {
                    return validatorsUtils.mergeFailResults(result.subResult[0]);
                }
                else {
                    var warningResult = {};
                    if (result.subResult) {
                        warningResult.subResult = result.subResult.map(function (subResult) {
                            return validatorsUtils.mergeFailResults(subResult);
                        });
                    }
                    warningResult.message = result.valPath + ' : ' + result.condPath + ' => ' + result.finalMessage;
                    return warningResult;
                }
            },

            printDebug: function (value, validator, result) {
                var problemPaths = validatorsUtils.getProblemPaths(result);

                // console.log('@@d', problemPaths);

                console.warn('[WARN] $VAL =');
                console.warn(JSON.stringify(validatorsUtils.debugOutputValue(value, problemPaths), null, 2));
                console.warn('[WARN] $COND =');
                console.warn(JSON.stringify(validatorsUtils.debugOutputValidator(validator, problemPaths), null, 2));
            },

            getProblemPaths: function (result, problemPaths) {
                problemPaths = problemPaths || {};

                if (result.subResult) {
                    result.subResult.forEach(function (subResult) {
                        validatorsUtils.getProblemPaths(subResult, problemPaths);
                    });
                }
                problemPaths[result.valPath] = 1;
                problemPaths[result.condPath] = 1;

                return problemPaths;
            },

            debugOutputValidator: function (validator, problemPaths, parentPath) {
                parentPath = parentPath || '$COND';

                if (utils.isArray(validator)) {
                    var result = [];
                    var type = validator[0];

                    if (type !== 'and' && type !== 'or' && type !== 'value'
                        && type !== 'array' && type !== '!') {
                        type = 'or';
                    }
                    else if (type === '!') {
                        type = 'not';
                    }

                    for (var i = 0; i < validator.length; i++) {
                        var current = validator[i];

                        if ((type === 'or' && current !== type) || i) {
                            var currentPath = parentPath + '.[' + type + ':' + i + ']';
                            result.push('path: ' + currentPath + (currentPath in problemPaths ? ' <<----- NOTICE' : ''));
                        }
                        result.push(validatorsUtils.debugOutputValidator(current, problemPaths, currentPath));
                    }

                    return result;
                }
                else if (typeof validator === 'object' && validator) {
                    var result = {};
                    result[DEBUG_PATH_KEY] = parentPath + (currentPath in problemPaths ? ' <<----- NOTICE' : '');

                    for (var key in validator) {
                        var currentPath = parentPath + '.' + key;
                        result[key] = validatorsUtils.debugOutputValidator(validator[key], problemPaths, currentPath);
                    }

                    return result;
                }
                else {
                    return validator;
                }
            },

            debugOutputValue: function (value, problemPaths, parentPath) {
                parentPath = parentPath || '$VAL';
                if (utils.isArray(value)) {
                    var result = [];

                    for (var i = 0; i < value.length; i++) {
                        var current = value[i];

                        var currentPath = parentPath + '.[' + i + ']';
                        result.push('path: ' + currentPath + (currentPath in problemPaths ? ' <<----- NOTICE' : ''));
                        result.push(validatorsUtils.debugOutputValue(current, problemPaths, currentPath));
                    }

                    return result;
                }
                else if (typeof value === 'object' && value) {
                    var result = {};
                    result[DEBUG_PATH_KEY] = parentPath + (currentPath in problemPaths ? ' <<----- NOTICE' : '');

                    for (var key in value) {
                        var currentPath = parentPath + '.' + key;
                        result[key] = validatorsUtils.debugOutputValue(value[key], problemPaths, currentPath);
                    }

                    return result;
                }
                else {
                    return value;
                }
            }

        };

        lazyAssert.validators = {};
        utils.extend(lazyAssert.validators, validatorsUtils);
    }
};