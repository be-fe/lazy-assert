var sinon = require('sinon');

/**
 *
 * @start-def: mockWarn: {};
 */
module.exports = {
    /**
     * ///
     * This will mock the console.warn function
     * and monitor the onLogCalled from runner instance
     * ///
     * @def: .mockWarn: (self) => undefined
     *  self: TestRunnerInstance
     */
    mockWarn: function (self) {
        var _warn = console.warn.bind(console);

        var warn = sinon.stub(console, 'warn');
        warn.callsFake(function () {
            if (self.onLogCalled) {
                // This is only for debug purpose
                // _warn.apply(null, arguments);
                self.onLogCalled.apply(this, arguments)
            }
            else {
                _warn.apply(null, arguments);
            }
        });
    },

    /**
     *
     * @def: .setLogCalled: self => setLogCalled
     *  self: TestRunnerInstance
     *  setLogCalled: callback => undefined
     *
     *      // this is actually the stub of console.warn
     *      callback: (...args) => undefined
     */
    setLogCalled: function (self) {
        self.insideLogCalling = false;
        return function (callback) {
            self.onLogCalled = function () {
                self.insideLogCalling = true;
                callback && callback.apply(null, arguments);
                self.insideLogCalling = false;
            }
        };
    }
};