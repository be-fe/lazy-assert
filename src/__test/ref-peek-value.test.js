var lazy = require('../index');

describe('Test default peek', function () {
    before(function () {
        lazy.setLocation(__filename);
    });

    it('Test simple value: ref as string', function () {
        lazy.peek('string-value-ref-string', 'a string', 'ref');
        lazy.peek('string-value-ref-object', 'a string', lazy.plugins.ref);
    });

    it('Test complex value', function () {
        var b = {name: 'b'}
        var a = {name: 'a', b: b, c: [b]};
        b.a = a;

        lazy.peek('complex-ref-string', a, 'ref');
        lazy.peek('complex-ref-object', a, lazy.plugins.ref);
    });
});