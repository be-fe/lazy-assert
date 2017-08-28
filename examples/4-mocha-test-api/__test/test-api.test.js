var axios = require('axios');

var assert = require('assert');
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
        })
    });

    it('测试 get /hello', function (done) {
        instance.get('/hello').then(function (response) {
            delete response.data.thingsWeDontCare;

            assert.equal(response.data.hello, ', nobody');
            assert.equal(response.data.name, 'nobody');
            assert.equal(typeof response.data.timestamp, 'number');
            assert.ok(response.data.timestamp > 1500000000000, 'Should great than certain number');

            done();
        }).catch(function (error) {
            done(error);
        });
    });

    it('测试 get /hello?name=world', function (done) {
        instance.get('/hello?name=world').then(function (response) {
            delete response.data.thingsWeDontCare;

            assert.deepEqual(response.data, {
                hello: ', world',
                name: 'world'
            });
            done();
        }).catch(function (error) {
            done(error);
        });
    });

    it('测试 catch /hello?name=world', function (done) {
        instance.get('/hello?name=world').then(function (response) {
            delete response.data.thingsWeDontCare;
            delete response.data.timestamp

            assert.deepEqual(response.data, {
                hello: ', not-correct'
            });
            done();
        }).catch(function (error) {
            console.log(error.message);
            assert.equal(error.message, "{ hello: ', world', name: 'world' } deepEqual { hello: ', not-correct' }");
            done();
        });
    });

    it('测试 post /hi?name=world', function (done) {
        instance.post('/hi', {
            name: 'world'
        }).then(function (response) {
            delete response.data.thingsWeDontCare;

            assert.deepEqual(response.data, {
                hi: ', world',
                name: 'world'
            });
            done();
        }).catch(function (error) {
            done(error);
        });
    });
});