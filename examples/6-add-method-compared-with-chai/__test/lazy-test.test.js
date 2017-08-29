var add = require('../add');
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
});