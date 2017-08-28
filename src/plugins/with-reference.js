module.exports = {
    process: function (value, processValue, context, currentPluginProcess) {
        context.path = context.path || ['@root'];
        if (value.___lazy_path___) {
            return '_[[[reference: ' + value.___lazy_path___ + ']]]_';
        }
        else {
            var result;

            if (value instanceof Array) {
                result = [];
                value.___lazy_path___ = context.path.join('.');

                for (var i = 0; i < value.length; i++) {
                    context.path.push(i);
                    result[i] = processValue(value[i], currentPluginProcess, context);
                    context.path.pop();
                }
            }
            else {
                result = {};
                value.___lazy_path___ = context.path.join('.');

                for (var key in value) {
                    context.path.push(key);
                    result[key] = processValue(value[key], currentPluginProcess, context);
                    context.path.pop();
                }
            }

            return result;
        }
    },

    post: function (value, postValue, context, currentPluginPost) {
        if (!value.___lazy_path___) {
            return;
        }
        else {
            delete value.___lazy_path___;
            for (var key in value) {
                postValue(value[key], currentPluginPost, context);
            }
        }
    }
};