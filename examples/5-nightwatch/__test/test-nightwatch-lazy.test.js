var conf = require('../nightwatch.config.js');
var fs = require('fs');
var lazy = require('../../../src/index');

var SearchPage = function (browser) {
    this.browser = browser;
};

SearchPage.prototype = {
    doSearch: function (keyword) {
        this.browser.element('css selector', '#kw')
            .keys(keyword);
        return this.waitFor('.result');
    },
    waitFor: function (xpath) {
        return this.browser.waitForElementVisible(xpath);
    }
};

module.exports = {
    'before': function () {
        lazy.setLocation(__filename);
    },
    'Demo test GitHub': function (browser) {
        var self = this;
        // visit the url & wait for the body to be rendered
        browser
            .url('https://www.baidu.com/')
            .waitForElementVisible('body');

        var page = new SearchPage(browser);
        page.doSearch('hello world');

        var peek = lazy.newPeek('info');
        // 检测 "百度百科" 文本
        browser
            .info('.result-op h3 a', function (res) {
                res.attr.href = res.attr.href.indexOf('http://www.baidu.com/link?') > -1;
                peek.set('auto', res, 'ref');
            })
            .info('.result-op h3 a', {attr: 'target'}, function (res) {
                peek.set('attr-string', res, 'ref');
            })
            .info('.result-op h3 a', {attr: ['target' ,'name']}, function (res) {
                peek.set('attr-array', res, 'ref');
            })
            .info('.result-op h3 a', {attr: 'target', style: 'width'}, function (res) {
                peek.set('style-string', res, 'ref');
            })
            .info('.result-op h3 a', {attr: ['target'], style: ['width', 'color']}, function (res) {
                peek.set('style-array', res, 'ref');
                peek.assert();
            })
            .saveScreenshot(conf.imgpath(browser) + 'baidu.png')
            .end();
    }
};
