var BIG_INTEGER = 100000000;

/**
 * @def: .sum: function (num, ...) returns sum
 *
 *  // num 需要做类型处理 / 保证
 *  // 如 typeof num != number, 则转为 0
 *  // Infinity, -Infinity, NaN => 0
 *  num: number
 *
 *  sum: number
 */
module.exports = function (/* ...num */) {
    var sum = 0;

    for (var i = 0; i < arguments.length; i ++) {
        var num = arguments[i];

        if (typeof num !== 'number'|| isNaN(num) || !isFinite(num)) {
            continue;
        }

        sum += num;
    }

    return Math.floor(sum * BIG_INTEGER) / BIG_INTEGER;
};