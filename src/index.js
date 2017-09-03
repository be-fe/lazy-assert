var assert = require('assert');
var utils = require('./utils');

try {
    var fs = require('fs');
}
catch (ex) {
    fs = require('./fake-fs');
}

/**
 * @start-def: lazyAssert: {}
 */
var lazyAssert = {
    /**
     * This is require to be run before any assertion can be made.
     *
     * It will be used to create report folder, e.g. `/path/to/your/test.js.report`
     * You will expect to see `peek-key.actual` and `peek-key.expected` files in `report` folders
     *
     * @def: .setLocation: path => undefined throws noTestScriptFound
     *  path: string    // the target test script that is being run
     *
     *  noTestScriptFound: Error
     *      type: 'no-test-found'
     */
    setLocation: function (path) {
        lazyAssert.testLocation = path;
    },

    /**
     *
     * @def: .stringify: value, depthOrPlugin => result
     */
    stringify: function (value, depthOrPlugin) {
        var peekValue = this.prepareValue(value, depthOrPlugin);
        return lazyAssert.innerStringify(peekValue).replace(/^\s+/, '').replace(/\s+$/, '');
    },

    prepareValue: function (value, depthOrPlugin) {
        var peekValue = lazyAssert.processValue(value, depthOrPlugin);
        lazyAssert.postValue(value, depthOrPlugin);
        return peekValue;
    },

    repeat: function (str, count) {
        return new Array(count + 1).join(str);
    },

    /**
     * @def: .plugins: #@.plugins
     */
    plugins: {},

    /**
     * @def: .plugin: processors => undefined
     *  processors: {name: processor}   as .plugins
     *      name: string        // plugin's name to be referenced
     *      processor: {}
     *          process: (value, #@.processValue, context) => result
     *              value: object | Array   // This is the current value or array being processed
     *              context: {}             // This is the current context that for the current run
     *              result: any             // result is the returned value that will be set for #@.innerStringify
     *          post: (value, #@.postValue, context) => undefined
     *              // Normally, post processing is for cleaning up original value,
     *              // if you do something dirty on the value
     *              value: object | Array   // This is the current value being post-processed
     */
    plugin: function (processors) {
        for (var name in processors) {
            if (typeof processors[name] === 'function') {
                this.plugins[name] = {
                    '--[[lazy_plugin_name]]--': name,
                    process: processors[name].bind(lazyAssert),
                    post: null
                };
            }
            else {
                this.plugins[name] = {
                    '--[[lazy_plugin_name]]--': name,
                    process: processors[name].process.bind(lazyAssert),
                    post: processors[name].post.bind(lazyAssert)
                }
            }

            this.plugins[name].process.lazyPluginName = name;
            if (this.plugins[name].post) {
                this.plugins[name].lazyPluginName = name;
            }
        }
    },

    innerStringify: function (value, indentation) {
        indentation = indentation || 0;

        var line = function (content) {
            return lazyAssert.repeat('  ', indentation + 1) + content;
        };

        if (typeof value === 'number') {
            if (isNaN(value)) {
                return 'NaN\n';
            }
            else if (!isFinite(value)) {
                if (value > 0) {
                    return 'Infinity\n';
                }
                else {
                    return '-Infinity\n';
                }
            }
        }

        switch (typeof value) {
            case 'object':
                if (!value) {
                    return 'null\n';
                }

                var result;
                var keys = [];

                if (value instanceof Array) {
                    result = '[]\n';
                    for (var i = 0; i < value.length; i++) {
                        keys.push(i);
                    }
                }
                else if (value instanceof RegExp) {
                    result = value.toString() + '\n';
                }
                else {
                    result = '{}\n';
                    for (var key in value) {
                        keys.push(key);
                    }
                }

                keys.sort(function (a, b) {
                    return a > b ? 1 :
                        a < b ? -1 : 0;
                });
                keys.forEach(function (key) {
                    result += line(key + ' : ' + lazyAssert.innerStringify(value[key], indentation + 1));
                });

                return result;
            default:
                return JSON.stringify(value) + '\n';
        }
    },

    /**
     *
     * @def: .postValue: value, plugin, context, currentPlugin => undefined
     *  value: object | Array
     *  plugin: string | {post: #@.plugin.post} | #@.plugin.post
     *  context: {plugins: #@.plugins}
     *  currentPlugin: #@.plugins.post
     */
    postValue: function (value, plugin, context) {
        context = context || {
            plugins: this.plugins
        };

        if (typeof plugin === 'string') {
            plugin = lazyAssert.plugins[plugin];
        }

        if (typeof plugin === 'object') {
            plugin = plugin.post;
        }

        if (typeof plugin === 'function') {
            if (typeof value !== 'object' || !value) {
                return value;
            }

            plugin(value, lazyAssert.processValue, context, plugin);
        }
    },

    /**
     *
     * @def: .processValue: value, depthOrPlugin, context, currentPlugin => result
     *  value: string
     *  depthOrPlugin: number | string | {process: #@.plugin.process} | #@.plugin.process
     *  context: {plugins: #@.plugins, currentPlugin: #@.plugins.processor}
     *  currentPlugin: #@.plugins.process
     *
     *  // The returned result is for #@.innerStringify
     *  result: any
     */
    processValue: function (value, depthOrPlugin, context) {
        context = context || {
            plugins: this.plugins
        };

        if (typeof depthOrPlugin === 'string') {
            depthOrPlugin = lazyAssert.plugins[depthOrPlugin];
        }

        if (typeof depthOrPlugin === 'object') {
            depthOrPlugin = depthOrPlugin.process;
        }

        if (typeof depthOrPlugin === 'function') {
            if (typeof value !== 'object' || !value) {
                return value;
            }

            return depthOrPlugin(value, lazyAssert.processValue, context, depthOrPlugin);
        }

        // 非 object 的config, 走 depth = number 的方式进行后续操作
        if (typeof depthOrPlugin === 'undefined') {
            depthOrPlugin = 5;
        }

        switch (typeof value) {
            case 'object':
                if (!value) {
                    return value;
                }

                if (!depthOrPlugin) {
                    return '_[[[reference: object]]]_';
                }

                if (value instanceof Array) {
                    var result = [];
                    for (var i = 0; i < value.length; i++) {
                        result[i] = lazyAssert.processValue(value[i], depthOrPlugin - 1, context);
                    }
                }
                else if (value instanceof RegExp) {
                    return value;
                }
                else {
                    var result = {};
                    for (var key in value) {
                        result[key] = lazyAssert.processValue(value[key], depthOrPlugin - 1, context);
                    }
                }
                return result;
            case 'function':
                return '_[[[function]]]_';
            default:
                return value;
        }
    },

    /**
     *
     * @def: .peek: peekKey, value, depthOrPlugin => undefined
     *  peekKey: string     // This will set up the peek key (the peek file) for the test
     *  value: any          // This is the value for peeking
     *  depthOrPlugin: @#.processValue.depthOrPlugin
     */
    peek: function (peekKey, value, depthOrPlugin) {
        if (!this.testLocation) {
            throw utils.newError('no-test-set', 'No test script set for this test.');
        }
        if (arguments.length < 2 || typeof peekKey !== 'string' || !peekKey) {
            throw utils.newError('no-peek-key', 'No peek key set for this peek')
        }

        var reportPath = utils.j(this.testLocation + '.report');
        var expectPath = utils.j(reportPath, peekKey + '.expected');
        var actualPath = utils.j(reportPath, peekKey + '.actual');

        var expected = '';
        var actual = this.stringify(value, depthOrPlugin);

        if (!fs.existsSync(expectPath)) {
            utils.write(expectPath, '');
            expected = '';
        }
        else {
            expected = utils.read(expectPath);
        }

        utils.write(actualPath, actual);
        assert.equal(
            actual, expected,
            (this.testLocation ? this.testLocation + ' : ' : '')
            + (this._hint ? this._hint + ' : ' : '')
            + peekKey
        );
    },

    hint: function (hint) {
        this._hint = hint;
    },

    /**
     * This function will compare the prepared value of actual target value with the expected prepared value.
     * If failed, output the prepared value of the actual target value.
     *
     * So that, you can simple copy & paste the output to your test case.
     * With minimal alteration, you wrote your test. ;)
     *
     * @def: .compare: peekKey, actualTargetValue, expectedPreparedValue, depthOrPlugin => boolean
     *  // this arg is not used in report file creation as compare is meant to be run
     *  // in fileless scenario
     *  peekKey: string // is for showing some hint about which compare broke.
     *
     *  actualTargetValue: any      // the actual value
     *  expectedPreparedValue: any  // different from "an actual value", it refers to the prepared value from an actual value
     *
     *  depthOrPlugin: string | func | number   // see #@.processValue.depthOrPlugin
     */
    compare: function (peekKey, actualTargetValue, expectedPreparedValue, depthOrPlugin) {
        var actualString = utils.trim(lazyAssert.stringify(actualTargetValue, depthOrPlugin));
        var expectedString = utils.trim(lazyAssert.innerStringify(expectedPreparedValue));

        // console.log('@@d');
        // console.log('"' + actualString + '"');
        // console.log('"' + expectedString + '"');
        // console.log(actualString === expectedString);

        if (actualString !== expectedString) {
            console.warn('[WARN] ' + (this._hint ? this._hint + ' :' : '') + ' peek <' + peekKey + '> did not match the expected value, the actual prepared value is : ');
            console.warn(JSON.stringify(lazyAssert.prepareValue(actualTargetValue, depthOrPlugin), null, 2));
            return false;
        }
        return true;
    },

    /**
     * Almost the same as #@.compare, except for that it throw an AssertionError instead of return true/false.
     *
     * @def: .assertCompare: function
     */
    assertCompare: function (peekKey, actualTargetValue, expectedPreparedValue, depthOrPlugin) {
        var actualString = utils.trim(lazyAssert.stringify(actualTargetValue, depthOrPlugin));
        var expectedString = utils.trim(lazyAssert.innerStringify(expectedPreparedValue, depthOrPlugin));

        if (actualString !== expectedString) {
            console.warn('[WARN] ' + (this._hint ? this._hint + ' :' : '') + ' peek <' + peekKey + '> did not match the expected value, the actual prepared value is : ');
            console.warn(JSON.stringify(lazyAssert.prepareValue(actualTargetValue, depthOrPlugin), null, 2));
        }
        assert.equal(actualString, expectedString, peekKey);
    },

    /**
     *
     * @def: ~Validator: arrayConfig | objectConfig | stringConfig | notStringConfig | regexpConfig | functionConfig
     *
     *  // The function being used to validate the target value
     *  functionConfig: (val, key, parent) => boolean
     *      val: any
     *      key: string | number
     *      parent: {} | []
     *
     *  // Use to validate the type of the target value
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
     *  arrayConfig: [firstArg, #@~Validator, ...] | [#@~Validator, ...] | ['value', rawValue...] >>
     *      | [op, value] | ['!', notValidator...]
     *      ///
     *      When firstArg = 'array', the following Validator is to validate any item of the target value,
     *      which should be an array.
     *
     *      When firstArg = 'and', the result of validation is true, only if the following validators returns true when
     *      validating the target value.
     *      ///
     *      firstArg: 'array' | 'and'
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
     *      // When the first item is '!', the result of validation is true only if all the validators returns false
     *      notValidator: #@~Validator
     *
     *  // key is related to the target's object's key
     *  objectConfig: {key: #@~Validator}
     *
     *
     * @def: .validate: peekKey, actualTargetValue, validator => boolean
     *  peekKey: string         // The key to help marking the output easier
     *  actualTargetValue: any  // The value to validate
     *  validator: #@~Validator     // The validator to be used to validate the target value
     */
    validate: function (peekKey, actualTargetValue, validator) {

    },

    /**
     *
     */
    assertValidate: function () {

    },

    newPeek: function (peekKey) {
        var peek = new Peek(peekKey);
        return peek;
    },
};

// Loading Peek class
var Peek = require('./Peek').init(lazyAssert);

// Loading utils
require('./lazy-utils').load(lazyAssert);
require('./lazy-wrap-node-assert').load(lazyAssert);

// Setting up preset plugins:
lazyAssert.plugin({
    ref: require('./plugins/with-reference')
});

// make babel happy ;)
lazyAssert.default = lazyAssert;
module.exports = lazyAssert;