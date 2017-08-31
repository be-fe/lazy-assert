var wrapper = require('../lazy-wrap-node-assert');
var lazy = require('../index');

var sinon = require('sinon');
var assert = require('assert');

/* global before, beforeEach, after, afterEach */
describe('Test lazy wrapping node assert', function() {
    before(function() {
        lazy.setLocation(__filename);

        sinon.spy(assert, 'ok');
        sinon.spy(assert, 'equal');
    });

    beforeEach(function() {
        this.fakeLazy = {};
        wrapper.load(this.fakeLazy);

        assert.ok.reset();
        assert.equal.reset();
    });
    after(function() {});
    afterEach(function() {});

    it('Should have all the defined functions', function() {
        var result = {}, fakeLazy = this.fakeLazy;
        for (var key in fakeLazy) {
            result[key] = typeof fakeLazy[key];
        }
        lazy.peek('1-functions', result);
    });

    it('Should run the assert api correctly', function () {
        this.fakeLazy.ok(true, 'calling ok');
        this.fakeLazy.equal('hello', 'hello', 'calling equal');

        lazy.peek('2-api-calling', {
            'ok called': assert.ok.calledOnce,
            'equal called': assert.equal.calledOnce
        });
    });
});