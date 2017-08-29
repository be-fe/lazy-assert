module.exports = {
    add: function (/* ...args */) {
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
    },

    sort: function (personList, key) {
        key = key || 'firstName';
        personList.list.sort(function (a, b) {
            return a[key] > b[key] ? 1 :
                a[key] < b[key] ? -1 : 0;
        });
        return personList;
    }
};