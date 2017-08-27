var targetMethod = require('../methods');
var assert = require('assert');

describe('Test the methods', function () {

    describe('Test cases for `add`', function () {
        it('add 2 + 3 = 5', function () {
            assert.equal(targetMethod.add(2, 3), 5);
        });

        it('add undefined + 2 = 2', function () {
            assert.equal(targetMethod.add(undefined, 2), 2);
        });
    });

    describe('Test cases fro `multiply`', function () {
        it('multiply 2 * 3', function () {
            assert.equal(targetMethod.multiply(2, 3), 6);
        });

        it('multiply undefined * 3 = 0', function () {
            assert.equal(targetMethod.multiply(undefined, 3), 0);
        });
    });
});