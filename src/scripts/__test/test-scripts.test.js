var lazy = require('../../index');
var utils = require('../../utils');
var fs = require('fs');

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

    });
});