function add(a, b) {
    a = a || 0;
    b = b || 0;

    return a + b;
}

function multiply(a, b) {
    a = a || 0;
    b = b || 0;

    return a * b;
}

module.exports = {add: add, multiply: multiply}