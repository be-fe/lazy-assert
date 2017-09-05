var lazy = require('../../index');
var sum = require('../sum');

/* global before, beforeEach, after, afterEach */
describe('Test sum function', function() {
    before(function() {
        lazy.setLocation(__filename);
    });

    beforeEach(function() {});
    after(function() {});
    afterEach(function() {});

    it('Should return correct result', function() {
        lazy.peek('01-correct-result', {
            '01 no arg': sum(),
            '02 1, 2': sum(1, 2),
            '03 undefined, 1, "string", 2': sum(undefined, 1, "string", 2),
            '04 NaN, 1, Infinity, 2': sum(+'asdf', 1, Infinity, 2),
            '05 NaN, -Infinity, Infinity, undefined, null, false, function': sum(
                NaN,
                -Infinity,
                Infinity,
                undefined,
                null,
                false,
                function() {}
            ),
            '06 -1, 2, -3': sum(-1, 2, -3),
            '07 0.1, 0.2': sum(0.1, 0.2)
        });
    });
});