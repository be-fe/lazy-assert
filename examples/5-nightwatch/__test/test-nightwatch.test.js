var conf = require('../nightwatch.config.js');
var fs = require('fs');

var SearchPage = function (browser) {
    this.browser = browser;
};

SearchPage.prototype = {
    doSearch: function (keyword) {
        this.browser.element('xpath', '#kw')
            .keys(keyword);
        return this.waitFor('.result');
    },
    waitFor: function (xpath) {
        return this.browser.waitForElementVisible(xpath);
    }
};

module.exports = {
    'Demo test GitHub': function (browser) {

        // visit the url & wait for the body to be rendered
        browser
            .url('https://www.baidu.com/')
            .waitForElementVisible('body');

        var page = new SearchPage(browser);
        page.doSearch('hello world');

        // 检测 "百度百科" 文本
        browser
            .assert.containsText('body', 'hello world_百度百科') // assert contains
            .saveScreenshot(conf.imgpath(browser) + 'baidu.png')
            .end();
    }
};
