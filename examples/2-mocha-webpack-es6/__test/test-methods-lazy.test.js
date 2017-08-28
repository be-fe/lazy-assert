import a from '../methods-es6-a';
import lazy from '../../../src/index';

describe('测试 es6', function () {
    before(function() {
        lazy.setLocation(__filename);
    });

    it('test lib a', function () {
        const result = a.func('world');

        lazy.peek('test-lib-a-result', result, 'ref');
    });
});