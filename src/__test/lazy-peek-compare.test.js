var lazy = require('../index');
var fs = require('fs');

/* global before, beforeEach, after, afterEach */
describe('Test lazy peek compare', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    beforeEach(function () {});

    after(function () {});

    afterEach(function () {});

    it('Should create related files', function() {
        lazy.throws(function () {
            lazy.peekCompare('temp-peek', {a: 1, b: 1});
        }, /AssertionError/);

        var paths = lazy.getReportPaths('temp-peek');
        lazy.ok(fs.existsSync(paths.expectJS), 'expected file should exist');
        lazy.ok(fs.existsSync(paths.actualJS), 'actual file should exist');
    });

    it('Should lazy peek compare', function () {
        lazy.peekCompare('01-simple-value', {
            a: 1,
            b: 2,
            c: [1, 2, 3]
        });
    });
});
