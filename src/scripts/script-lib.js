var utils = require('../utils');
var fs = require('fs');

var lib = {
    /**
     *
     * @def: .forEachActual: basePath, callback => undefined
     *
     *  basePath: string
     *
     *  callback: actualPath, expectedPath => undefined
     *      actualPath: string
     *      expectedPath: string
     */
    forEachActual: function (basePath, callback) {
        var paths = utils.flattenFiles(basePath);

        // console.log('@@d', paths);

        var vectors = [
            [/\.report\/([^\/]+)\.(expected)$/, 'actual'],
            [/\.report\/([^\/]+)\.(expected\.js)$/, 'actual.js'],
            [/\.report\/([^\/]+)\.(validator\.js)$/, 'suggest.js'],
        ];

        var rgxIgnore = /^\/node_modules\//;

        paths.forEach(function(path) {
            if (!rgxIgnore.test(path)) {
                vectors.forEach(function (vector) {
                    var match = vector[0].exec(path);
                    if (match) {
                        var actualPath = path.replace(vector[0], function (_whole, name) {
                            return '.report/' + name + '.' + vector[1];
                        });

                        // console.log('@@d', actualPath);
                        callback(basePath + actualPath, basePath + path);
                    }
                });
            }
        });
    },

    refreshAll: function (basePath, output) {
        lib.forEachActual(basePath, function (actualPath, expectedPath) {
            // console.log('@@d', actualPath, expectedPath);
            utils.write(actualPath,
                utils.read(expectedPath)
            );
            output && console.log('[INFO] refreshed ' + actualPath);
        });
    },

    removeAll: function (basePath, output) {
        lib.forEachActual(basePath, function (actualPath) {
            try {
                fs.unlinkSync(actualPath);
                output && console.log('[INFO] removed ' + actualPath);
            } catch (ex) {}
        });
    }
};

module.exports = lib;