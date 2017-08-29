var add = require('../methods').add;
var sort = require('../methods').sort;
var numList = require('../methods').getSortedNumberList;
var lazy = require('../../../src/index');

describe('Test add method', function () {
    before(function() {
        lazy.setLocation(__filename);
    });

    it('Should return the value we want', function () {
        lazy.peek('result', {
            'no arg': add(),
            '1': add(1),
            '1, 2': add(1, 2),
            '1, 2, 3': add(1, 2, 3)
        });
    });


    it('Should handle funny value', function () {
        lazy.peek('funny-value', {
           '"1", 2': add('1', 2),
            '1, null, 2': add(1, null, 2),
            '1, undefined, 2': add(1, undefined, 2),
            '1, true, false, 2': add(1, true, false, 2)
        });
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
        var list = sort(this.personList);
        lazy.peek('2-sort-right-order', list, 'ref');
    });

    it('Should sort in the right order : firstName', function () {
        var list = sort(this.personList, 'firstName');
        lazy.peek('3-sort-right-order-firstName', list, 'ref');
    });

    it('Should sort in the right order : lastName', function () {
        var list = sort(this.personList, 'lastName');
        lazy.peek('4-sort-right-order-lastName', list, 'ref');
    });

    it('Should sort in the right order : age', function () {
        var list = sort(this.personList, 'age');
        lazy.peek('5-sort-right-order-age', list, 'ref');
    });

    it('Should get sorted number list', function () {
        lazy.peek('6-sorted-number-list', {
            'no arg': numList(),
            '1': numList(1),
            '2, 1.2, 3': numList(2, 1.2, 3),
            '5, 2, undefined, true, 3': numList(5, 2, undefined, true, 3),
            '5, "2", undefined, true, 3': numList(5, '2', undefined, true, 3),
            '5, "2 not a number", undefined, true, 3': numList(5, '2 not a number', undefined, true, 3),
        });
    });
});