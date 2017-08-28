function add(a, b) {
    a = a || 0;
    b = b || 0;

    return {result: a + b, a: a, b: b};
}

function multiply(a, b) {
    a = a || 0;
    b = b || 0;

    return {result: a * b, a: a, b: b};
}

module.exports = {add: add, multiply: multiply}