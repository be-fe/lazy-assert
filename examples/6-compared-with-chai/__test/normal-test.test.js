var add = require('../methods').add;
var sort = require('../methods').sort;
var numList = require('../methods').getSortedNumberList;
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

    beforeEach(function () {
        this.personList = {
            list: [{
                firstName: 'foo',
                lastName: 'bar',
                age: 30
            }, {
                firstName: 'william',
                lastName: 'green',
                age: 20
            }, {
                firstName: 'newborn',
                lastName: 'bond',
                age: 40
            }, {
                firstName: 'newborn',
                lastName: 'ai',
                age: 5
            }]
        };

        this.personList.self = this.personList;
    });

    it('Should sort in the right order', function () {
        sort(this.personList);

        this.personList.list[0].firstName.should.equal('foo');
        this.personList.list[1].lastName.should.equal('bond');
        this.personList.list[2].lastName.should.equal('ai');
        this.personList.list[3].firstName.should.equal('william');
    });


    it('Should sort in the right order : firstName', function () {
        var list = sort(this.personList, 'firstName');

        this.personList.list[0].firstName.should.equal('foo');
        this.personList.list[1].lastName.should.equal('bond');
        this.personList.list[2].lastName.should.equal('ai');
        this.personList.list[3].firstName.should.equal('william');
    });

    it('Should sort in the right order : lastName', function () {
        var list = sort(this.personList, 'lastName');

        this.personList.list[0].lastName.should.equal('ai');
        this.personList.list[1].firstName.should.equal('foo');
        this.personList.list[2].lastName.should.equal('bond');
        this.personList.list[3].firstName.should.equal('william');
    });

    it('Should sort in the right order : age', function () {
        var list = sort(this.personList, 'age');

        this.personList.list[0].lastName.should.equal('ai');
        this.personList.list[1].firstName.should.equal('william');
        this.personList.list[2].firstName.should.equal('foo');
        this.personList.list[3].lastName.should.equal('bond');
    });

    it('Should get sorted number list', function () {
        numList().should.deep.equal([]);
        numList(1).should.deep.equal([1]);
        numList(2, 1.2, 3).should.deep.equal([1.2, 2, 3]);
        numList(5, 2, undefined, true, 3).should.deep.equal([2, 3, 5]);
        numList(5, '2', undefined, true, 3).should.deep.equal([2, 3, 5]);
        numList(5, "2 not a number", undefined, true, 3).should.deep.equal([3, 5]);
    });
});