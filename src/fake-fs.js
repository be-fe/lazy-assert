
console.warn('[WARN] fs module is not available, so please use .compare instead')

var fakeApis = function (target, apis) {
    apis.forEach(function (apiName) {
        target[apiName] = function () {
            console.warn('[WARN] fs is not accessible via lazy-assert when loaded without node env. Function <' + apiName + '> called with arguments : ', arguments);
        };
    });
};

module.exports = fakeApis({}, [
    'existsSync',
    'mkdirSync',
    'statSync',
    'writeFileSync',
    'readFileSync'
]);