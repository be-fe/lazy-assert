var utils = require('./utils');

module.exports = {
    init: function (lazyAssert) {
        /**
         * @start-def: Peek: Class
         *  instance: {}
         *      peekKey: string     // The peek key to be used in the final #@.assert
         *      list: []            // Used by #@.push
         *      set: {}             // Used by #@.set
         */
        var Peek = function (peekKey) {
            this.peekKey = peekKey;
            this.list = [];
            this.map = {};
        };

        // @start-def: .prototype: {}
        Peek.prototype = {
            /**
             *
             * @def: .push: value, depthOrPlugin => this
             *  // Using push means that you need to make sure that the order strictly follows your instruction
             *  value: any      // the value to be peek as a step
             *  depthOrPlugin: #@.processValue.depthOrPlugin
             */
            push: function (value, depthOrPlugin) {
                this.list.push(lazyAssert.prepareValue(value, depthOrPlugin));
                return this;
            },

            /**
             *
             * @def: .set: value, depthOrPlugin => this throws setOnSameKeyError
             *
             *  // Setting the key in the peek map does not rely on the order of your test steps
             *  // However, make sure that it could overwrite some existing key by accident...
             *  // If so, please use #@.forceSet instead
             *  value: any      // the value to be peek as a step
             *  depthOrPlugin: #@.processValue.depthOrPlugin
             *
             *  setOnSameKeyError: Error
             *      type: 'set-on-same-key'
             */
            set: function (key, value, depthOrPluign) {
                if (key in this.map) {
                    throw utils.newError('set-on-same-key', 'The key is used previously.');
                }
                this.map[key] = lazyAssert.prepareValue(value, depthOrPluign);
                return this;
            },

            /**
             * // Basically the same as #@.set, except for it doesn't throw an error when setting an existing key
             * @def: .forceSet: key, value, depthOrPlugin => this
             */
            forceSet: function (key, value, depthOrPlugin) {
                this.map[key] = lazyAssert.prepareValue(value, depthOrPlugin);
                return this;
            },

            /**
             * // Finally, we wrap up everything and do an assertion using #@lazyAssert.peek
             * @.assert: () => undefined
             */
            assert: function () {
                lazyAssert.peek(this.peekKey, {
                    list: this.list,
                    map: this.map
                }, -1);
            }
        };

        return Peek;
    }
};