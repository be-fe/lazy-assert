var lazy = require('../index');

/* global before, beforeEach, after, afterEach */
describe('Test validators warning printing', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    beforeEach(function () {
    });
    after(function () {
    });
    afterEach(function () {
    });

    it('Should process result items : simple case', function () {
        lazy.peek('01-simple-case', {
            '01 root only': lazy.validators.formalizeFailResultItem(
                lazy.validators.validate(null, 'number')
            ),
            '02 with parents': lazy.validators.formalizeFailResultItem(
                lazy.validators.validate(null, 'number'), 'test', 'test'
            ),
            '03 in object': lazy.validators.formalizeFailResultItem(
                lazy.validators.validate({a: {b: 1}}, {a: {b: 'object'}})
            ),
            '04 object & or array': lazy.validators.formalizeFailResultItem(
                lazy.validators.validate({a: {b: 1}}, [{a: 'undefined'}, {a: {b: 'function'}}, /abc/])
            ),
            '05 object & and array': lazy.validators.formalizeFailResultItem(
                lazy.validators.validate({a: {b: 1}}, ['and', {a: {b: 'number'}}, {a: 'function'}])
            ),
            '06 val & op test': lazy.validators.formalizeFailResultItem(
                lazy.validators.validate({a: 5}, {a: [['>', 6], /abc/]})
            ),

        }, -1);
    });
});