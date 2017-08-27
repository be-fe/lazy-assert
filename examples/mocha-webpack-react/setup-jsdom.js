const jsdom = require('jsdom').JSDOM;

var jsdomInstance = new jsdom(`<!DOCTYPE html><html><head><meta charset="utf-8"></head><body></body></html>`);
var window = global.window = jsdomInstance.window;
window.console = global.console;

Object.keys(window).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = window[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};