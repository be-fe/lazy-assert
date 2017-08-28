var conf = require('../nightwatch.config.js');

module.exports = {
    'Demo test GitHub': function (browser) {
        browser
            .url('https://www.baidu.com/')   // visit the url
            .waitForElementVisible('body'); // wait for the body to be rendered

        // part two:
        browser
            .assert.containsText('body', '百度') // assert contains
            .saveScreenshot(conf.imgpath(browser) + 'baidu.png')
            .end();
    }
};
