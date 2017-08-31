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
});