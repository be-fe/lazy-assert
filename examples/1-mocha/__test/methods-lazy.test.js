var targetMethod = require('../methods');
var lazy = require('../../../src/index');

describe('Test the methods', function () {

    before(function () {
        lazy.setLocation(__filename);
    });

    describe('Test cases for `add`', function () {
        it('add 2 + 3 = 5', function () {
            lazy.peek('1-2-plus-3', targetMethod.add(2, 3));
        });

        it('add undefined + 3 = 3', function () {
            lazy.peek('2-undefined-plus-3', targetMethod.add(undefined, 3));
        });
    });

    describe('Test cases fro `multiply`', function () {
        it('multiply 2 * 3', function () {
            lazy.peek('3-2-multiply-3', targetMethod.multiply(2, 3));
        });

        it('multiply undefined * 3 = 0', function () {
            lazy.peek('4-undefined-multiply-3', targetMethod.multiply(undefined, 3));
        });
    });
});