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

    it('Should match pattern : function', function () {
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
            ),
            '07 [{a: 1}, {a: 2}, "a", 123]': lazy.pattern(
                [{a: 1}, {a: 2}, 'a', 123],
                checkNumber
            )
        });
    });

    it('Should match patter : object', function () {
        var target = {a: 'any', b: 123, c: 321};

        lazy.peek('7-pattern-object', {
            '01 "abc", {a: /any/}': lazy.pattern('abc', {a: /any/}),
            '02 {a: "any", b: 123, c: 321}, {a: /any/, b: /^12/}':
                lazy.pattern(
                    target,
                    {
                        a: /any/,
                        b: /^12/
                    }
                ),
            '03 missing d': lazy.pattern(
                target,
                {
                    a: /any/,
                    d: /^12/
                }
            ),
            '04 [ ... ]': lazy.pattern(
                [target, undefined, 123],
                {
                    a: /any/,
                    d: /^12/
                }
            )
        });
    });

    it('Should match fullPattern : object style', function () {
        lazy.peek('8-full-pattern-object', {
            '01 {...}, {...}, success': lazy.fullPattern(
                {a: 123, b: 321},
                {
                    a: function (a) {
                        return a > 1
                    },
                    b: /^32/
                }
            ),
            '02 {...}, {...}, missing pattern': lazy.fullPattern(
                {a: 123, b: 321},
                {
                    a: function (a) {
                        return a > 1
                    }
                }
            ),
            '03 {...}, {...}, missing target': lazy.fullPattern(
                {a: 123},
                {
                    a: function (a) {
                        return a > 1
                    },
                    b: /^32/
                }
            ),
            '03 {...}, {...}, missing target, pattern': lazy.fullPattern(
                {a: 123, b: 321},
                {
                    a: function (a) {
                        return a > 1
                    },
                    d: /^32/
                }
            ),
            '03 {...}, {...}, with failure': lazy.fullPattern(
                {a: 123, b: 321},
                {
                    a: function (a) {
                        return a > 1
                    },
                    b: /^12/
                }
            )
        });
    });

    it('Should match fullPattern : array style', function () {
        lazy.peek('9-full-pattern-array', {
            '01 [...], [...], success': lazy.fullPattern(
                [123, -1],
                [/^12/, function (value, index) {
                    return value < index;
                }]
            ),
            '02 [...], [...] fail': lazy.fullPattern(
                [123, 10],
                [/^12/, function (value, index) {
                    return value < index;
                }]
            ),
            '03 [...], [...] missing pattern': lazy.fullPattern(
                [123, 123, 123],
                [/any/, /any/]
            ),
            '04 [...], [...] missing target': lazy.fullPattern(
                [123],
                [/any/, /any/]
            )
        });
    });

    it('Should fail on mismatch on fullPattern', function () {
        lazy.peek('10-full-pattern-mismatch', {
            '01 mismatch : [], {}': lazy.fullPattern(
                [1, 2],
                {}
            ),
            '02 mismatch : [], undefined': lazy.fullPattern(
                [1, 2],
                undefined
            )
        })
    });
});