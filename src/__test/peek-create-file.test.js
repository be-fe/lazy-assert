var lazy = require('../index');
var fs = require('fs');
var utils = require('../utils');
var assert = require('assert');

describe('Test value peeking', function() {
    var actual = function(key) {
        return utils.j(__filename + '.report/' + key + '.actual');
    };
    var expected = function(key) {
        return utils.j(__filename + '.report/' + key + '.expected');
    };

    var removeFiles = function(keys) {
        keys.forEach(function(key) {
            if (fs.existsSync(actual(key))) {
                fs.unlinkSync(actual(key));
            }

            if (fs.existsSync(expected(key))) {
                fs.unlinkSync(expected(key));
            }
        });
    };

    before(function() {
        lazy.setLocation(__filename);
        removeFiles([
            'simple-value'
        ]);
    });

    it('Test simple values', function () {
        assert.throws(function() {
            lazy.peek('simple-value', 'a string');
        });

        assert.strictEqual(utils.read(actual('simple-value')), '"a string"');
        assert.strictEqual(utils.read(expected('simple-value')), '');
    });
});