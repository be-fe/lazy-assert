var targetMethod = require('../methods');
var assert = require('assert');

describe('Test the methods', function () {

    describe('Test cases for `add`', function () {
        it('add 2 + 3 = 5', function () {
            assert.deepStrictEqual(targetMethod.add(2, 3), {
                result: 5,
                a: 2,
                b: 3
            });
        });

        it('add undefined + 3 = 3', function () {
            assert.deepStrictEqual(targetMethod.add(undefined, 3),  {
                result: 3,
                a: 0,
                b: 3
            });
        });
    });

    describe('Test cases fro `multiply`', function () {
        it('multiply 2 * 3', function () {
            assert.deepStrictEqual(targetMethod.multiply(2, 3),  {
                result: 6,
                a: 2,
                b: 3
            });
        });

        it('multiply undefined * 3 = 0', function () {
            assert.deepStrictEqual(targetMethod.multiply(undefined, 3),  {
                result: 0,
                a: 0,
                b: 3
            });
        });
    });
});