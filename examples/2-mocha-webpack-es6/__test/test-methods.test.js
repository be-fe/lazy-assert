import a from '../methods-es6-a';
import assert from 'assert';

describe('测试 es6', function () {
    it('test lib a', function () {
        const result = a.func('world');

        assert.equal(result, 'greeting: hello, world');
    });
});