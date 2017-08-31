var lazy = require('../index');

describe('Test extra utils for lazy-assert', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    it('Should have correct types for simple value', function () {
        lazy.peek('1-simple-type', [
            lazy.type('string'),
            lazy.type(123),
            lazy.type(-0.123),
            lazy.type(false),
            lazy.type(null),
            lazy.type(undefined)
        ]);
    });

    it('Should have correct types for complex value', function () {
        lazy.peek('2-complex-type', [
            // summarizing type for object
            lazy.type({
                hello: 'world',
                object: {a: 1, b: 2},
                number: 123,
                func: function () {
                },
                boolean: false,
                nullValue: null,
                undefinedValue: undefined
            }),

            // summarizing types for array
            lazy.type([
                'a-string',
                123,
                {
                    name: 'foo',
                    count: 123,
                    someValue: false
                },
                {
                    name: 'bar',
                    age: 23,
                    count: 32,
                    someValue: [1, 2, 3]
                },
                {
                    age: 32,
                    someValue: 'string',
                    object: {a: 1, b: 2},
                    func: function () {
                    }
                }])
        ]);
    });

    it('Should pick the correct keys', function () {
        lazy.peek('3-pick', [
            lazy.pick({
                first: 123,
                last: {a: 1, b: 2},
                skip: [1, 2, 3]
            }, ['first', 'last', 'not-exist']),

            lazy.pick([
                {first: 1, a: 2},
                {last: 2, b: 3, a: 1},
                {first: 1, last: 4, skip: 3}
            ], ['first', 'last', 'not-exist'])
        ])
    });

    it('Should unpick the skipped keys', function () {
        lazy.peek('4-unpick', [
            lazy.unpick({
                first: 123,
                last: {a: 1, b: 2},
                skip: [1, 2, 3]
            }, ['first', 'last', 'not-exist']),

            lazy.unpick([
                {first: 1, a: 2},
                {last: 2, b: 3, a: 1},
                {first: 1, last: 4, skip: 3}
            ], ['first', 'last', 'not-exist'])
        ]);
    });

    it('Should match pattern : regexp', function () {
        lazy.peek('5-pattern-regexp', {
            '01 string /string/': lazy.pattern('string', /string/),
            '02 abcd /bc/': lazy.pattern('abcd', /bc/),
            '03 abcd /^bc/': lazy.pattern('abcd', /^bc/),
            '04 123123.123 /123.d+/': lazy.pattern(123.123, /123\.\d+/),
            '05 123123.123 /^123.d+/': lazy.pattern(123123.123, /^123\.\d+/),
            '06 {} /any/': lazy.pattern({}, /any/),
            '07 function /any/': lazy.pattern(function () {
            }, /any/),
            '08 [{}, any, 123, {}], /123/': lazy.pattern([{}, 'any', 123, {}], /123/)
        });
    });

    it('Should match function : function', function () {
        var checkType, checkNumber, checkFunc;

        lazy.peek('6-pattern-function', {
            '01 string, typeof === string': lazy.pattern('string', checkType = function (value) {
                return typeof value === 'string'
            }),
            '02 123, typeof === string': lazy.pattern(123, checkType),
            '03 {a: 2}, val.a > 1': lazy.pattern({a: 2}, checkNumber = function (value) {
                return value.a > 1;
            }),
            '04 {a: 1}, val.a > 1': lazy.pattern({a: 1}, checkNumber),
            '05 return first + last, result === first + last': lazy.pattern(
                function (first, last) {
                    return first + last;
                },
                checkFunc = function (func) {
                    return func('a', 'b') === 'ab';
                }
            ),
            '06 return first, result === first + last': lazy.pattern(
                function (first, last) {
                    return first;
                },
                checkFunc
            )
        });
    });
});