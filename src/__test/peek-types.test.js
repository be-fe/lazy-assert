var lazy = require('../index');

describe('Test summarize types', function() {
    before(function() {
        lazy.setLocation(__filename);
    });

    it('Should have correct type for simple value', function() {
        lazy.peek('1-simple-type', [
            lazy.type('string'),
            lazy.type(123),
            lazy.type(-0.123),
            lazy.type(false),
            lazy.type(null),
            lazy.type(undefined)
        ]);
    });
});