var lazy = require('../index');
var fs = require('fs');

/* global before, beforeEach, after, afterEach */
describe('Test lazy peek validate', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    beforeEach(function () {});

    after(function () {});

    afterEach(function () {});

    it('Should create related files' +
        '', function() {
        var _warn = console.warn;
        console.warn = function() {};

        lazy.throws(function() {
            lazy.peekValidate('temp-peek', {a: 1, b: '2'});
        }, /AssertionError/);

        var paths = lazy.getReportPaths('temp-peek');
        lazy.ok(fs.existsSync(paths.validator), 'validator file should exist');
        lazy.ok(fs.existsSync(paths.suggest), 'suggest file should exist');

        console.warn = _warn;
    });

    it('Should peek validate', function () {
        lazy.peekValidate('01-simple-value', {
            'number': true,
            'string': 'abc',
            'boolean': true,
            'null': null,

            'array': [1, 'abc', null, {a: 1}, {b: [1, ['c']]}]
        });
    });
});
