var fs = require('fs');

var lazy = require('../../index');
var utils = require('../../utils');
var lib = require('../script-lib');

/* global before, beforeEach, after, afterEach */
describe('Test the lazy helper scripts', function() {
    var fixturePath = utils.j(__dirname, 'test-fixture');
    var targetPath = utils.j(__dirname, 'test-files/something.report');
    var basePath = utils.j(__dirname, 'test-files');

    before(function() {
        lazy.setLocation(__filename);
    });

    beforeEach(function() {
        var files = fs.readdirSync(fixturePath);

        files.forEach(function(file) {
            utils.write(utils.j(targetPath, file),
                utils.read(utils.j(fixturePath, file))
            );
        });
    });
    after(function() {});
    afterEach(function() {});

    it('Should refresh actual files', function() {
        lib.refreshAll(basePath);

        lazy.peek('01-refresh', {
            '00 actual': utils.read(utils.j(targetPath, 'hello.actual')),
            '01 actual.js': utils.read(utils.j(targetPath, 'hello.actual.js')),
            '02 suggest.js': utils.read(utils.j(targetPath, 'hello.suggest.js')),
        });
    });

    it('Should remove actual files', function() {
        lib.removeAll(basePath);

        lazy.peek('02-remove', {
            '00 actual': fs.existsSync(utils.j(targetPath, 'hello.actual')),
            '01 actual.js': fs.existsSync(utils.j(targetPath, 'hello.actual.js')),
            '02 suggest.js': fs.existsSync(utils.j(targetPath, 'hello.suggest.js')),
        });
    });
});