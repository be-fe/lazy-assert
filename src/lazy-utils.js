var utils = require('./utils');

module.exports = function (lazyAssert) {

    // @start-def: lazyAssert: {}
    utils.extend(lazyAssert, {
        pick: function (value, configArray) {
            if (value instanceof Array) {
                var result = [];

                for (var i = 0; i < value.length; i++) {
                    result.push(lazyAssert.pick(value[i], configArray));
                }
                return result;
            }
            else if (typeof value === 'object' && value) {
                var result = {};
                configArray.forEach(function (key) {
                    if (key in value) {
                        result[key] = value[key];
                    }
                });
                return result;
            }
            else {
                return value;
            }
        },

        unpick: function (value, configArray) {
            if (value instanceof Array) {
                var result = [];

                for (var i = 0; i < value.length; i++) {
                    result.push(lazyAssert.unpick(value[i], configArray));
                }
                return result;
            }
            else if (typeof value === 'object' && value) {
                var result = {};
                for (var key in value) {
                    result[key] = value[key];
                }
                configArray.forEach(function (key) {
                    delete result[key];
                });
                return result;
            }
            else {
                return value;
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
        }
    });
};