var lazy = require('../index');

describe('Test default peek', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    it('Test simple value', function () {
        lazy.peek('1-simple-value', {
            'string': 'string',
            'number': 123,
            'float': -0.123,
            'NaN': Number('not-a-number'),
            'Infinity': Infinity,
            '-Infinity': -1 * Infinity,
            'boolean': false,
            'null': null,
            'undefined': undefined,
        });
    });

    it('Test complex value', function () {
        lazy.peek('2-complex-value', {
            'functon': function () {},
            'array': [1, 2, 3],
            'object': {hello: 'world'},
            'regexp': /abc/
        });
    });

    it('Test complex value : really deep object', function () {
        lazy.peek('3-complex-deep-object', {
            a: {b: {c: {d: {e: {f: {g: 0}}}}}},
            hello: [1, 2, 3, {
                world: '!'
            }],
            func: function () {
            },
            bool: true,
            aString: 'a string'
        });
    });

    it('Test complex value : really deep object, with depth = 6', function () {
        lazy.peek('4-complex-deep-object-6', {
            a: {b: {c: {d: {e: {f: {g: 0}}}}}},
            hello: [1, 2, 3, {
                world: '!'
            }],
            func: function () {
            },
            bool: true,
            aString: 'a string'
        }, 6);
    });

    it('Test complex value : really deep object, with depth = -1', function () {
        lazy.peek('5-complex-deep-object-full', {
            a: {b: {c: {d: {e: {f: {g: 0}}}}}},
            hello: [1, 2, 3, {
                world: '!'
            }],
            func: function () {
            },
            bool: true,
            aString: 'a string'
        }, -1);
    });

    it('Test complex value : deep object', function () {
        lazy.peek('6-complex-object', {
            hello: [1, 2, 3, {
                world: '!'
            }],
            func: function () {
            },
            bool: true,
            aString: 'a string'
        });
    });
});