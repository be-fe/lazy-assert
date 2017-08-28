var lazy = require('../index');
var assert = require('assert');

describe('Test simple output', function () {
    it('Test processValue: string/number/boolean/null/undefined', function () {
        assert.strictEqual(lazy.processValue('a string'), 'a string');
        assert.strictEqual(lazy.processValue(123), 123);
        assert.strictEqual(lazy.processValue(-0.123), -0.123);
        assert.strictEqual(lazy.processValue(true), true);
        assert.strictEqual(lazy.processValue(null), null);
        assert.strictEqual(lazy.processValue(undefined), undefined);
    });

    it('Test stringify: string/number/boolean/null/undefined', function () {
        assert.strictEqual(lazy.stringify('a string'), '"a string"');
        assert.strictEqual(lazy.stringify(123), '123');
        assert.strictEqual(lazy.stringify(-0.123), '-0.123');
        assert.strictEqual(lazy.stringify(true), 'true');
        assert.strictEqual(lazy.stringify(null), 'null');
        assert.strictEqual(lazy.stringify(undefined), 'undefined');
    });

    it('Test processValue: object', function () {
        assert.deepStrictEqual(
            lazy.processValue({hello: {world: '!'}}),
            {hello: {world: '!'}}
        );
    });

    it('Test stringify: object', function () {
        assert.deepStrictEqual(
            lazy.stringify({hello: {world: '!'}}),
            '{}\n  hello : {}\n    world : "!"'
        );
    });

    it('Should have preset plugin `ref`', function () {
        assert.ok(lazy.plugins.ref, 'Should have ref');
        assert.ok(lazy.plugins.ref.process, 'Should have ref.process');
        assert.ok(lazy.plugins.ref.post, 'Should have ref.post');
    });
});