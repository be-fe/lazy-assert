var lazy = require('../index');
var utils = require('../utils');

/* global before, beforeEach, after, afterEach */
describe('Test lazy validator', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    beforeEach(function () {
    });
    after(function () {
    });
    afterEach(function () {
    });

    it('Should return correct result : simple validator', function () {
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
            '16 function : true': lazy.validators.validate(function () {
            }, 'function'),
            '17 function : false': lazy.validators.validate(123, 'function'),

            '18 nan : true': lazy.validators.validate(+'asdf', 'nan'),
            '19 nan : false': lazy.validators.validate('asdf', 'nan'),
            '20 infinity : true': lazy.validators.validate(Infinity, 'infinity'),
            '21 infinity : false': lazy.validators.validate(-Infinity, 'infinity'),
            '22 -infinity : true': lazy.validators.validate(-Infinity, '-infinity'),
            '23 -infinity : false': lazy.validators.validate(123, '-infinity'),

            '24 regexp 123, /^12/: true': lazy.validators.validate(123, /^12/),
            '25 regexp "abc", /bc$/: true': lazy.validators.validate('abc', /bc$/),
            '26 regexp {}, /bc$/: false': lazy.validators.validate({}, /bc$/),
            '27 regexp 123, /bc$/: false': lazy.validators.validate(123, /bc$/),

            '28 regexp string : true': lazy.validators.validate(/123/, 'regexp'),
            '29 regexp string: false': lazy.validators.validate(123, 'regexp'),
        });
    });

    it('Should return correct result : array', function () {
        lazy.peek('02-array', {
            '01 or : 123, string | number': lazy.validators.validate(123, ['string', 'number']),
            '01 or : "123", string | number': lazy.validators.validate('123', ['string', 'number']),
            '01 or : null, string | number': lazy.validators.validate(null, ['string', 'number']),

            '02 and : true': lazy.validators.validate(123, ['and', 'number', function (val) {
                return val > 5
            }]),
            '02 and : false, type error': lazy.validators.validate('123', ['and', 'number', function (val) {
                return val > 5
            }]),
            '02 and : false, func error': lazy.validators.validate(4, ['and', 'number', function (val) {
                return val > 5
            }]),

            '03 > : true': lazy.validators.validate(5, ['>', 3]),
            '03 > : false': lazy.validators.validate(2, ['>', 3]),

            '04 < : true': lazy.validators.validate(2, ['<', 3]),
            '04 < : false': lazy.validators.validate(5, ['<', 3]),

            '05 >= : true': lazy.validators.validate(3, ['>=', 3]),
            '05 >= : false': lazy.validators.validate(2, ['>=', 3]),

            '06 <= : true': lazy.validators.validate(3, ['<=', 3]),
            '06 <= : false': lazy.validators.validate(5, ['<=', 3]),

            '07 ! : true': lazy.validators.validate(3, ['!', 'null', 'object']),
            '07 ! : false': lazy.validators.validate(null, ['!', 'null', 'object']),

            '08 value : true, 1': lazy.validators.validate(1, ['value', 1, null]),
            '08 value : true, null': lazy.validators.validate(null, ['value', 1, null]),
            '08 value : false': lazy.validators.validate(true, ['value', 1, null]),
            '09 or : true': lazy.validators.validate([], ['or', 'array', null]),
            '09 or : false': lazy.validators.validate(true, ['value', 'array', null]),
        }, -1);
    });

    it('Should return correct result : array-array', function () {
        lazy.peek('03-array-array', {
            '01 [1, 2, 3] : true': lazy.validators.validate([1, 2, 3], ['array', 'number']),
            '02 [1, "2", 3] : true': lazy.validators.validate([1, '2', 3], ['array', 'number', 'string']),
            '03 [1, "2", 3] : false': lazy.validators.validate([1, '2', 3], ['array', 'number', 'object']),
            '04 [1, {a: 1}, 3] : true': lazy.validators.validate([1, {a: 1}, 3], ['array', 'number', 'object']),
            '05 [1, {a: 1}, 3] : false': lazy.validators.validate([1, {a: 1}, 3], ['array', 'number', 'function', 'null']),
            '07 [1, {a: 1}, 3] : false': lazy.validators.validate([1, {a: 1}, 3], ['array', 'number', {}]),
            '08 [1, {a: 1}, 3] : true': lazy.validators.validate([1, {a: 1}, 3], ['array', 'number', {a: 'number'}]),
            '09 [1, {a: 1}, 3] : false': lazy.validators.validate([1, {a: 1}, 3], ['array', 'number', {a: 'string'}]),
            '10 null : false': lazy.validators.validate(null, ['array', 'number', {a: 'string'}]),
        }, -1);
    });

    it('Should return correct result : object', function () {
        lazy.peek('04-object', {
            '01 {} : true': lazy.validators.validate({}, {}),
            '02 {} : false': lazy.validators.validate({}, {a: 'number'}),
            '03 {} : true': lazy.validators.validate({}, {a: 'undefined'}),
            '04 {} : true': lazy.validators.validate({}, {a: undefined}),
            '05 {a: 1} : true, number': lazy.validators.validate({a: 1}, {a: 'number'}),
            '06 {a: 1} : true, object | number': lazy.validators.validate({a: 1}, {a: ['object', 'number']}),
            '07 {a: 1} : true, number & func': lazy.validators.validate({a: 1}, {
                a: ['and', 'number', function (val) {
                    return val > 0
                }]
            }),
            '08 {a: 1} : false, object': lazy.validators.validate({a: 1}, {a: ['object']}),
            '09 {a: 1} : false, number & func': lazy.validators.validate({a: 1}, {
                a: ['and', 'number', function (val) {
                    return val < 0
                }]
            }),
            '10 {a: 1} : false, number & <': lazy.validators.validate({a: 1}, {a: ['and', 'number', ['<', 0]]}),
            '11 {a: 1} : true, number & >': lazy.validators.validate({a: 1}, {a: ['and', 'number', ['>', 0]]}),
            '12 {a: 1} : false, object & >': lazy.validators.validate({a: 1}, {a: ['and', 'object', ['>', 0]]}),
            '13 {a: 1} : true, object | >': lazy.validators.validate({a: 1}, {a: ['object', ['>', 0]]}),
            '14 {a: {b: 1}} : true': lazy.validators.validate({a: {b: 1}}, {a: ['object', ['>', 0]]}),
            '15 {a: {b: 1}} : true': lazy.validators.validate({a: {b: 1}}, {a: {b: 'number'}}),
            '16 {a: {b: 1}} : true': lazy.validators.validate({a: {b: 1}},
                {
                    a: {
                        b: ['and', 'number', ['>', 0]]
                    }
                }
            ),
            '17 {a: {b: 1}} : false': lazy.validators.validate({a: {b: 1}},
                {
                    a: {
                        b: ['and', 'object', ['>', 0]]
                    }
                }
            ),
            '18 {a: {b: ["1", "2", null]]}} : false': lazy.validators.validate(
                {a: {b: ['1', '2', null]}},
                {
                    a: {
                        b: ['string', ['array', 'string']]
                    }
                }
            ),
            '19 {a: {b: ["1", "2", null]]}} : true': lazy.validators.validate(
                {a: {b: ['1', '2', null]}},
                {
                    a: {
                        b: ['string', ['array', 'string', null]]
                    }
                }
            ),
            '20 {a: {b: "1"}} : true': lazy.validators.validate(
                {a: {b: '1'}},
                {
                    a: {
                        b: ['string', ['array', 'string', null]]
                    }
                }
            ),
        }, -1);
    });
});