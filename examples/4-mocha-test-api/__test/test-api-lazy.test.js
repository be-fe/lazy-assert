var axios = require('axios');

var lazy = require('../../../src/index');
var config = require('../test-config');

describe('测试 api', function () {
    var instance;
    this.timeout(2000);

    // Checkout https://github.com/mzabriskie/axios for more API docs
    before(function () {
        // This is just a dummy server for demonstrate the test
        require('../app');

        instance = axios.create({
            baseURL: config.url,
            header: config.header
        });

        lazy.setLocation(__filename);
    });

    it('测试测试', function () {
        var result = /* call() */ {
            data: {
                user: {
                    name: 'liang'
                },
                personList: [1, 4, 3, null, 'abc']
            }
        };

        lazy.peekValidate('something', result)
    });

    it('测试 get /hello', function (done) {
        instance.get('/hello').then(function (response) {

            lazy.peek('1-hello-get', [
                lazy.pick(response.data, ['hello', 'name']),
                'type: ' + typeof response.data.timestamp,
                'large enough: ' + (response.data.timestamp > 1500000000000)
            ]);

            done();
        }).catch(function (error) {
            done(error);
        });
    });

    it('测试 get /hello?name=world', function (done) {
        instance.get('/hello?name=world').then(function (response) {
            delete response.data.thingsWeDontCare;

            lazy.peek('2-hello-get', [
                lazy.pick(response.data, ['hello', 'name']),
                'type: ' + typeof response.data.timestamp,
                'large enough: ' + (response.data.timestamp > 1500000000000)
            ]);

            done();
        }).catch(function (error) {
            done(error);
        });
    });

    it('测试 catch /hello?name=world', function (done) {
        instance.get('/hello?name=world').then(function (response) {
            lazy.peek('temp-wrong-peek', response.data.hello);

            done();
        }).catch(function (error) {
            lazy.peek('4-error-caught', error, 'ref');
            done();
        });
    });

    it('测试 post /hi?name=world', function (done) {
        instance.post('/hi', {
            name: 'world'
        }).then(function (response) {

            lazy.peek('5-hello-post', {
                values: lazy.unpick(response.data, ['timestamp', 'thingsWeDontCare']),
                type: typeof response.data.timestamp,
                largeEnough: (response.data.timestamp > 1500000000000)
            });

            done();
        }).catch(function (error) {
            done(error);
        });
    });
});