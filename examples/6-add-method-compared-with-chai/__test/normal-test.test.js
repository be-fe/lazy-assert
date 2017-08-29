var add = require('../add');
require('chai').should();

describe('Test add method', function () {
    it('Should return the value we want', function () {
        add().should.equal(0);
        add(1).should.equal(1);
        add(1, 2).should.equal(3);
        add(1, 2, 3).should.equal(6);
    });

    it('Should handle funny value', function () {
        add('1', 2).should.equal(3);
        add(1, null).should.equal(1);
        add(1, undefined, 2).should.equal(3);
        add(1, true, false, 2).should.equal(3);
    });
});