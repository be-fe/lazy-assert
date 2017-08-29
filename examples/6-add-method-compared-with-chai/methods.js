module.exports = function (/* ...args */) {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        var value = arguments[i];

        value = parseFloat(value);
        if (isNaN(value)) {
            value = 0;
        }

        result += value;
    }
    return result;
};