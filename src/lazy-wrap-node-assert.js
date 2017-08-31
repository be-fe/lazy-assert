var assert = require('assert');

module.exports = {
    load: function (lazyAssert) {
        [
            'equal',
            'strictEqual',

            'deepEqual',
            'deepStrictEqual',

            'notEqual',
            'notStrictEqual',

            'notDeepEqual',
            'notDeepStrictEqual',

            'ifError',
            'doesNotThrow',
            'throws',

            'ok',
            'fail'
        ].forEach(function(methodName) {
            lazyAssert[methodName] = assert[methodName].bind(assert);
        });
    }
};