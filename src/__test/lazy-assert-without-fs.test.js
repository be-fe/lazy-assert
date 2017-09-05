var sinon = require('sinon');

var requireStub = sinon.stub(global, 'require');

requireStub.withArgs('fs')
    .callsFake(function () {
        throw new Error('No fs can be found.');
    });

requireStub.callThrough();

var lazy = require('../index');
var mockWarn = require('./_utils/mock-warn');

/* global before, beforeEach, after, afterEach */
describe('Test lazy assert without fs', function () {

    var self = this;
    var setLogCalled;

    before(function () {
        console.log('fuck why? fs');
        setLogCalled = mockWarn.setLogCalled(self);
        mockWarn.mockWarn(self);
    });

    after(function() {
        console.warn.restore();
    });

    it('Should run compare correctly', function () {
        var result;

        result = lazy.compare('01-compare', {
            hello: 'world',
            array: [1, 2, 3]
        }, {
            "hello": "world",
            "array": [
                1,
                2,
                3
            ]
        });
        lazy.ok(result);

        result = lazy.compare('02-compare', 123, 123);
        lazy.ok(result);

        result = lazy.compare('03-compare', null, null);
        lazy.ok(result);

        result = lazy.compare('04-compare-with-pattern', lazy.pattern(
            {hello: 'world', array: [1, 2, 3]},
            {
                hello: function (value, key) {
                    return key === 'hello' && typeof value === 'string'
                },
                array: function (value) {
                    return value instanceof Array
                }
            }
        ), {
            "hello": "ok",
            "array": "ok"
        });
        lazy.ok(result);
    });

    it('Should throw warning on compare error', function () {
        console.log('lalala fs');
        var result = [];
        setLogCalled(function () {
            result.push(arguments);
        });

        lazy.compare('error', {hello: 'world'});
        lazy.compare('error', 123);
        lazy.compare('error', undefined);
        lazy.compare('error', [1, 2, 3]);

        var a = {name: 'a'};
        var b = {name: 'b', a: a};
        a.b = b;
        lazy.compare('error', a, 0, 3);
        lazy.compare('error', a, 0, 'ref');

        setLogCalled();
        lazy.assertCompare('compare-warnings', result, [
            {
                "0": "[WARN]  peek <error> did not match the expected value, the actual prepared value is : "
            },
            {
                "0": "{\n  \"hello\": \"world\"\n}"
            },
            {
                "0": "[WARN]  peek <error> did not match the expected value, the actual prepared value is : "
            },
            {
                "0": "123"
            },
            {
                "0": "[WARN]  peek <error> did not match the expected value, the actual prepared value is : "
            },
            {
                "0": "[\n  1,\n  2,\n  3\n]"
            },
            {
                "0": "[WARN]  peek <error> did not match the expected value, the actual prepared value is : "
            },
            {
                "0": "{\n  \"name\": \"a\",\n  \"b\": {\n    \"name\": \"b\",\n    \"a\": {\n      \"name\": \"a\",\n      \"b\": \"_[[[reference: object]]]_\"\n    }\n  }\n}"
            },
            {
                "0": "[WARN]  peek <error> did not match the expected value, the actual prepared value is : "
            },
            {
                "0": "{\n  \"b\": {\n    \"a\": \"_[[[reference: @root]]]_\",\n    \"name\": \"b\"\n  },\n  \"name\": \"a\"\n}"
            }
        ]);
    });

    it('Should throw assert error', function () {
        lazy.throws(function () {
            lazy.assertCompare('assert-error', {hello: 'world'}, 123);
        }, /assert-error/)
    });
});
