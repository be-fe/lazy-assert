var utils = require('./utils');

module.exports = {
    load: function (lazyAssert) {
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
             *  // '=' + path, e.g. =.ref.from.root.0
             *  refConfig: string
             *
             *
             * @def: .innerValidate: peekKey, actualTargetValue, validator => result
             *  peekKey: string         // The key to help marking the output easier
             *  actualTargetValue: any  // The value to validate
             *  validator: #@~Validator     // The validator to be used to validate the target value
             *
             *  result: {}
             *      result: boolean
             *      message: string
             *
             *      target: any
             *      type: string
             *      expected: any
             */
            validate: function (target, validator, extra) {
                extra = extra || {path: [], refs: {}};

                if (typeof validator === 'string') {
                    return validatorsUtils.stringValidator(target, validator);
                }
                else if (utils.isArray(validator)) {
                    return validatorsUtils.validatorArray(target, validator, extra);
                }
                else if (utils.isRegExp(validator)) {
                    return validatorsUtils.validatorRegExp(target, validator);
                }
                else if (typeof validator === 'object') {
                    if (validator) {
                        // it's a non-null object
                        return validatorsUtils.validatorObject(target, validator, extra);
                    }
                    else {
                        // it's a null
                        return validatorsUtils.exactValidator(target, null);
                    }
                }
                else if (typeof validator === 'function') {
                    return validatorsUtils.validatorFunction(target, validator, extra);
                }
                else {
                    // boolean, undefined, number
                    return validatorsUtils.exactValidator(target, validator);
                }
            },

            validatorObject: function (target, validator, extra) {
                var result;
                for (var key in validator) {
                    extra.path.push(key);
                    var refPath = extra.path.join('.');
                    extra.refs[refPath] = target[key];
                    result = validatorsUtils.validate(target[key], validator[key], {key: key, parent: target, path: extra.path, refs: extra.refs});
                    extra.path.pop();
                    if (!result.result) {
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
                    return validatorsUtils.validatorFunction(target, function(target) {
                        return target > validator[1]
                    }, {funcInfo: 'Comparison : > ' + validator[1]});
                }
                else if (validator[0] === '<') {
                    return validatorsUtils.validatorFunction(target, function(target) {
                        return target < validator[1]
                    }, {funcInfo: 'Comparison : < ' + validator[1]});
                }
                else if (validator[0] === '>=') {
                    return validatorsUtils.validatorFunction(target, function(target) {
                        return target >= validator[1]
                    }, {funcInfo: 'Comparison : >= ' + validator[1]});
                }
                else if (validator[0] === '<=') {
                    return validatorsUtils.validatorFunction(target, function(target) {
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
                            result = validatorsUtils.validate(target[i], validator[j], {key: i, parent: target, path: extra.path, refs: extra.refs});
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

            stringValidator: function (target, validator) {
                if (validator === 'nan') {
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
                            status: false,
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
            }
        };

        lazyAssert.validators = {};
        utils.extend(lazyAssert.validators, validatorsUtils);
    }
};