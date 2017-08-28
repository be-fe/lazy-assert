var lazy = require('../index');
var assert = require('assert');

describe('Test lazy peek', function () {
    it('If peek key is not set, throw error', function () {
        lazy.setLocation('test-script');

        assert.throws(function () {
            lazy.peek(123);
        }, /@no-peek-key:/);
        assert.throws(function () {
            lazy.peek(123, 123);
        }, /@no-peek-key:/);
        assert.throws(function () {
            lazy.peek('', 123);
        }, /@no-peek-key:/);
    });

    it('If test location is not set, throw error', function () {
        lazy.setLocation(null);

        assert.throws(function () {
            lazy.peek('a-peek-key', 123);
        }, /@no-test-set:/, 'no test set');
    });
});