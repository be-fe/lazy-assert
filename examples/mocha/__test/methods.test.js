var targetMethod = require('../methods');
var assert = require('assert');

describe('Test the methods', function() {

    it('add 2 + 3', function() {
       assert.equal(targetMethod.add(2, 3), 5);
    });


    it('multiply 2 * 3', function () {
        assert.equal(targetMethod.multiply(2, 3), 6);
    });
});