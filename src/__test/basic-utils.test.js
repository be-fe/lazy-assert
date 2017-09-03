var lazy = require('../index');
var utils = require('../utils');

/* global before, beforeEach, after, afterEach */
describe('Test the utils.js', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    beforeEach(function () {});

    after(function () {});

    afterEach(function () {});

    it('Should return correct answer : isArray', function() {
        lazy.peek('01-is-array', {
            '01-true': utils.isArray([]),
            '02-false object': utils.isArray({}),
            '03-false arguments': utils.isArray(arguments),
            '04-false null': utils.isArray(null),
            '05-false undefined': utils.isArray(undefined),
            '05-false NaN': utils.isArray(NaN),
            '05-false 123': utils.isArray(123),
            '05-false string': utils.isArray('string'),
        });
    });
});
