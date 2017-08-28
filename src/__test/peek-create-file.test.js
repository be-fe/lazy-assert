var lazy = require('../index');
var fs = require('fs');
var utils = require('../utils');
var assert = require('assert');

describe('Test value peeking', function () {
    var actual = function (key) {
        return utils.j(__filename + '.report/' + key + '.actual');
    };
    var expected = function (key) {
        return utils.j(__filename + '.report/' + key + '.expected');
    };

    var removeFiles = function (keys) {
        keys.forEach(function (key) {
            if (fs.existsSync(actual(key))) {
                fs.unlinkSync(actual(key));
            }

            if (fs.existsSync(expected(key))) {
                fs.unlinkSync(expected(key));
            }
        });
    };

    before(function () {
        lazy.setLocation(__filename);
        removeFiles([
            'single-peek',
            'multiple-peek'
        ]);
    });

    it('Test single peek', function () {
        assert.throws(function () {
            lazy.peek('single-peek', 'a string');
        });

        assert.strictEqual(utils.read(actual('single-peek')), '"a string"');
        assert.strictEqual(utils.read(expected('single-peek')), '');
    });

    it('Test peek instance', function () {
        assert.throws(function () {
            var peek = lazy.newPeek('multiple-peek');

            peek.push('hello').push('world');

            peek.set('hello', {world: '!'})

            var b = {name: 'b'};
            var a = {name: 'a', b: b};
            b.a = a;

            peek.set('foo', a, 'ref');

            peek.push(123);

            peek.assert();
        });

        lazy.peek('multiple-peek-file', utils.read(actual('multiple-peek')));
        assert.strictEqual(utils.read(expected('multiple-peek')), '');
    });

    it('Test forceSet vs. set', function () {
        var peek = lazy.newPeek('peek-instance');

        peek.set('hello', 'world');
        assert.throws(function () {
            peek.set('hello', 'new world');
        }, /@set-on-same-key:/);

        peek.forceSet('hello', 'new world');
    });
});