var lazy = require('../index');

describe('Test default peek', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    it('Test simple value', function () {
        lazy.peek('string-value', 'a string');
        lazy.peek('number-value', 123);
        lazy.peek('float-number-value', -0.123);
        lazy.peek('boolean-value', true);
        lazy.peek('null-value', null);
        lazy.peek('undefined-value', undefined);
    });

    it('Test complex value', function () {
        lazy.peek('function-value', function () {
        });
        lazy.peek('array-value', [1, 2, 3]);
        lazy.peek('object-value', {hello: 'world'});
    });

    it('Test complex value : deep object', function () {
        lazy.peek('complex-object', {
            hello: [1, 2, 3, {
                world: '!'
            }],
            func: function () {
            },
            bool: true,
            aString: 'a string'
        });
    });

    it('Test complex value : really deep object', function () {
        lazy.peek('complex-deep-object', {
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
        lazy.peek('complex-deep-object-6', {
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
        lazy.peek('complex-deep-object-full', {
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
});