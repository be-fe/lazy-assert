module.exports = {
    add: function (/* ...args */) {
        var result = 0;
        for (var i = 0; i < arguments.length; i++) {
            var value = arguments[i];

            if (isNaN(Number(value)) || isNaN(parseFloat(value))) {
                value = 0;
            }
            else {
                value = Number(value);
            }

            result += value;
        }
        return result;
    },

    sort: function (personList, key) {
        key = key || 'firstName';
        personList.list.sort(function (a, b) {
            return a[key] > b[key] ? 1 :
                a[key] < b[key] ? -1 : 0;
        });
        return personList;
    },

    getSortedNumberList: function () {
        var result = [];
        for (var i = 0; i < arguments.length; i++) {
            var value = arguments[i];

            if (!isNaN(Number(value)) && !isNaN(parseFloat(value))) {
                result.push(Number(value));
            }
        }
        result.sort(function (a, b) {
            return a > b ? 1 : a < b ? -1 : 0;
        });
        return result;
    }
};