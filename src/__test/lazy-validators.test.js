var lazy = require('../index');

/* global before, beforeEach, after, afterEach */
describe('Test lazy validator', function() {
    before(function() {
        lazy.setLocation(__filename);
    });

    beforeEach(function() {});
    after(function() {});
    afterEach(function() {});

    it('Should return correct result : simple validator', function() {
        lazy.peek('01-simple', {
            '01 string : true': lazy.validators.validate('123', 'string'),
            '02 string : false': lazy.validators.validate(123, 'string'),

            '03 number : true': lazy.validators.validate(123, 'number'),
            '04 number : false': lazy.validators.validate(true, 'number'),

            '05 boolean : true': lazy.validators.validate(false, 'boolean'),
            '06 boolean : false': lazy.validators.validate('123', 'boolean'),
            '07 null : true': lazy.validators.validate(null, 'null'),
            '08 null : false': lazy.validators.validate(undefined, 'null'),
            '09 undefined : true': lazy.validators.validate(undefined, 'undefined'),
            '10 undefined : false': lazy.validators.validate([], 'undefined'),

            '11 array : true': lazy.validators.validate([1, 2, 3], 'array'),
            '12 array : false': lazy.validators.validate(123, 'array'),
            '13 object : true': lazy.validators.validate({a: 1}, 'object'),
            '14 object : false': lazy.validators.validate(false, 'object'),
            '15 null, object : false': lazy.validators.validate(null, 'object'),
            '16 function : true': lazy.validators.validate(function() {}, 'function'),
            '17 function : false': lazy.validators.validate(123, 'function'),

            '18 nan : true': lazy.validators.validate(+'asdf', 'nan'),
            '19 nan : false': lazy.validators.validate('asdf', 'nan'),
            '20 infinity : true': lazy.validators.validate(Infinity, 'infinity'),
            '21 infinity : false': lazy.validators.validate(-Infinity, 'infinity'),
            '22 -infinity : true': lazy.validators.validate(-Infinity, '-infinity'),
            '23 -infinity : false': lazy.validators.validate(123, '-infinity'),
        });
    });
});