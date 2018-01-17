var utils = require('./utils');

/**
 * @start-def: lazyUtils: {}
 */
module.exports = {
    load: function (lazyAssert) {
        var inner = {
            patternRegExp: function (target, pattern) {
                if (typeof target === 'string'
                    || typeof target === 'number') {
                    if (pattern.test(String(target))) {
                        return {result: 'ok', pattern: pattern.toString()};
                    }
                    else {
                        return {fail: target, pattern: pattern.toString()};
                    }
                }
                else {
                    return {fail: target, pattern: pattern.toString()};
                }
            },

            patternFunction: function (target, key, pattern) {
                var check = pattern(target, key);
                if (check) {
                    return 'ok';
                }
                else {
                    return {fail: target};
                }
            },

            patternArray: function (array, pattern) {
                var result = [];
                for (var i = 0; i < array.length; i++) {
                    if (pattern instanceof RegExp) {
                        result.push(inner.patternRegExp(array[i], pattern));
                    }
                    else if (typeof pattern === 'function') {
                        result.push(inner.patternFunction(array[i], i, pattern));
                    }
                    else {
                        // 只能是 object 了
                        result.push(inner.patternObject(array[i], pattern));
                    }
                }
                return result;
            },

            patternObject: function (object, pattern) {
                var result = {};

                if (typeof object !== 'object') {
                    return {fail: object, message: 'non-object target is not supported for object pattern'};
                }

                for (var key in pattern) {
                    if (pattern.hasOwnProperty(key)) {
                        if (typeof pattern[key] === 'function') {
                            // match function
                            result[key] = inner.patternFunction(object[key], key, pattern[key]);
                        }
                        else {
                            // regexp
                            result[key] = inner.patternRegExp(object[key], pattern[key]);
                        }
                    }
                }

                return result;
            }
        };

        var lazyUtils = {
            /**
             *
             * @def: .map: (objTarget | arrTarget, callback) => objResult | arrResult
             *  objTarget: {key: any}
             *  arrTarget: [any]
             *
             *  callback: (value, key) => result
             *
             *  objResult: {key: result}
             *  arrResult: [result]
             *
             */
            map: function (target, callback) {
                var result;
                if (target instanceof Array) {
                    result = [];
                    for (var i = 0; i < target.length; i++) {
                        result[i] = callback(target[i], i);
                    }
                }
                else if (typeof target === 'object' && target) {
                    result = {};
                    for (var key in target) {
                        result[key] = callback(target[key], key);
                    }
                }
                else {
                    throw utils.newError('target-not-applicable-for-map', 'Target is not an Array, nor an Object');
                }
                return result;
            },


            pick: function (value, configArrayOrFunc) {
                if (value instanceof Array) {
                    var result = [];

                    for (var i = 0; i < value.length; i++) {
                        result.push(lazyAssert.pick(value[i], configArrayOrFunc));
                    }
                    return result;
                }
                else if (typeof value === 'object' && value) {
                    var result = {};

                    if (typeof configArrayOrFunc === 'function') {
                        for (var key in value) {
                            if (configArrayOrFunc(key, value[key])) {
                                result[key] = value[key]
                            }
                        }
                    }
                    else {
                        configArrayOrFunc.forEach(function (key) {
                            if (key in value) {
                                result[key] = value[key];
                            }
                        });
                    }
                    return result;
                }
                else {
                    throw utils.newError('value-not-applicable-for-pick', 'Value is not an Array, nor an Object');
                }
            },

            unpick: function (value, configArrayOrFunc) {
                if (value instanceof Array) {
                    var result = [];

                    for (var i = 0; i < value.length; i++) {
                        result.push(lazyAssert.unpick(value[i], configArrayOrFunc));
                    }
                    return result;
                }
                else if (typeof value === 'object' && value) {
                    var result = {};
                    for (var key in value) {
                        result[key] = value[key];
                    }
                    if (typeof configArrayOrFunc === 'function') {
                        for (var key in value) {
                            if (configArrayOrFunc(key, value[key])) {
                                delete result[key];
                            }
                        }
                    }
                    else {
                        configArrayOrFunc.forEach(function (key) {
                            delete result[key];
                        });
                    }
                    return result;
                }
                else {
                    throw utils.newError('value-not-applicable-for-unpick', 'Value is not an Array, nor an Object');
                }
            },

            TYPE_ROOT_KEY: '_[[[root-type]]]_',

            /**
             * @def: .type: value, isFirstLevel => result
             *  value: array | object | other
             *      array: []           // Will be summarize as {key: [type1, type2, type3]}
             *      object: {}          // Will be summarize as {key: typeof value[key]}
             *      other: any-other    // Just return typeof value
             *
             *      isFirstLevel: boolean   // when isFirstValue = true, Array's value will return 'array' instead of processing
             *
             *      result: resultArray | resultObject | resultType
             *          resultArray: {key: [string]}
             *          resultObject: {key: string}
             *          resultType: string
             *
             */
            type: function (value, isFirstLevel) {
                if (value instanceof Array) {
                    if (isFirstLevel) {
                        return 'array';
                    }

                    var result = {};

                    for (var i = 0; i < value.length; i++) {
                        var type = lazyAssert.type(value[i], true);

                        if (typeof type === 'object') {
                            for (var key in type) {
                                result[key] = result[key] || {};
                                result[key][type[key]] = 1;
                            }
                        }
                        else {
                            result[lazyAssert.TYPE_ROOT_KEY] = result[lazyAssert.TYPE_ROOT_KEY] || {};
                            result[lazyAssert.TYPE_ROOT_KEY][type] = 1;
                        }
                    }

                    return result;
                }
                else if (typeof value === 'object' && value) {
                    var result = {};

                    for (var key in value) {
                        if (value[key] instanceof Array) {
                            result[key] = 'array';
                        }
                        else if (value[key] instanceof RegExp) {
                            result[key] = 'regexp';
                        }
                        else if (value[key] === null) {
                            result[key] = 'null';
                        }
                        else {
                            result[key] = typeof value[key];
                        }
                    }

                    return result;
                }
                else {
                    return typeof value;
                }
            },

            /**
             *
             * @def: .pattern: target, pattern => result
             *
             *  ///
             *  场景:
             *
             *  target, pattern
             *
             *  {key: any}, {key: func | regexp}
             *  每一个对应的 pattern.key 会用于匹配 target.key
             *
             *  {key: any}, func
             *  func 会用于匹配所有的 target 里的属性
             *
             *  {}, regexp
             *  不支持
             *
             *  [{key}], func
             *  func 会用于匹配所有的 target {key}
             *
             *  [{key}], regexp
             *  不支持
             *
             *  [{key}], {key}
             *  key 对应地检查
             *
             *  [other], {}
             *  不支持
             *
             *  [other], func | regexp
             *  pattern 匹配 target 每一个 item
             *
             *  other, {}
             *  不支持
             *
             *  other, func | regexp
             *  pattern 匹配 target
             *  ///
             *  target: {} | [{}] | [other] | other
             *      other: not a {} nor a []
             *
             *  ///
             *  如果是 func, 则必须返回 true, 才认为是正确的,
             *
             *  如果是 regexp 则 .test() 必须为 true
             *  且如果检查对象非string, 或number, 则直接报错
             *
             *  如果检验值为 false, 则还需要把出错的值打印出来
             *  ///
             *  pattern: object | func | regexp
             *      object: {key: func | regexp}
             *      func: val, key => boolean
             *      regexp: RegExp
             *
             *  result: string
             */
            pattern: function (target, pattern, key) {
                if (target instanceof Array) {
                    return inner.patternArray(target, pattern);
                }
                else if (typeof pattern === 'function') {
                    return inner.patternFunction(target, key, pattern);
                }
                else if (pattern instanceof RegExp) {
                    return inner.patternRegExp(target, pattern);
                }
                else if (typeof pattern === 'object') {
                    return inner.patternObject(target, pattern);
                }
            },


            fullPattern: function (complexTarget, patternSet) {
                if (
                    !(complexTarget instanceof Array && patternSet instanceof Array)
                    && !(typeof complexTarget === 'object' && typeof patternSet === 'object' && !(complexTarget instanceof Array) && !(patternSet instanceof Array))
                ) {
                    return 'fail: target & pattern set mismatch';
                }
                else if (patternSet instanceof Array) {
                    var result = [];
                    for (var i = 0; i < patternSet.length; i++) {
                        if (i >= complexTarget.length) {
                            result[i] = 'fail: target not found';
                        }
                        else {
                            result[i] = lazyUtils.pattern(complexTarget[i], patternSet[i], i);
                        }
                    }

                    if (i < complexTarget.length) {
                        result[i] = 'fail: target has more items than pattern';
                    }

                    return result;
                }
                else {
                    var result = {};

                    var allTargetKeys = {};
                    for (var key in complexTarget) {
                        allTargetKeys[key] = 1;
                    }

                    for (var key in patternSet) {
                        if (key in complexTarget) {
                            result[key] = lazyUtils.pattern(complexTarget[key], patternSet[key], key);
                            delete allTargetKeys[key];
                        }
                        else {
                            result[key] = 'fail: target not found';
                        }
                    }

                    for (var key in allTargetKeys) {
                        result[key] = 'fail: pattern not found';
                    }

                    return result;
                }
            }
        };

        // @start-def: lazyAssert: {}
        utils.extend(lazyAssert, lazyUtils);
    }
};