var KEY = '--[[lazy_plugin_name]]--';

module.exports = {
    process: function (value, processValue, context, currentPluginProcess) {
        context.path = context.path || ['@root'];
        if (value[KEY]) {
            return '_[[[reference: ' + value[KEY] + ']]]_';
        }
        else {
            var result;

            if (value instanceof Array) {
                result = [];
                value[KEY] = context.path.join('.');

                for (var i = 0; i < value.length; i++) {
                    context.path.push(i);
                    result[i] = processValue(value[i], currentPluginProcess, context);
                    context.path.pop();
                }
            }
            else {
                result = {};
                value[KEY] = context.path.join('.');

                for (var key in value) {
                    if (key !== KEY) {
                        context.path.push(key);
                        result[key] = processValue(value[key], currentPluginProcess, context);
                        context.path.pop();
                    }
                }
            }

            return result;
        }
    },

    post: function (value, postValue, context, currentPluginPost) {
        if (!value[KEY]) {
            return;
        }
        else {
            delete value[KEY];
            for (var key in value) {
                postValue(value[key], currentPluginPost, context);
            }
        }
    }
};