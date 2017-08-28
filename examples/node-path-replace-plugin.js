/**
 * Modified NodeStuffPlugin to replace __filename and __dirname with absolute path
 * @see https://github.com/webpack/webpack/blob/ca8b693c2c17bd06778476381fae23b3b21c0475/lib/NodeStuffPlugin.js
 */
function NodePathReplacePlugin() {
}

NodePathReplacePlugin.prototype.apply = function (compiler) {

    function setModuleConstant(expressionName, fn) {
        compiler.plugin('compilation', function (compilation, params) {
            params.normalModuleFactory.plugin('parser', function (parser, parserOptions) {
                parser.plugin("expression " + expressionName, function () {
                    this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
                    return true;
                });
            });
        });
    }

    setModuleConstant("__filename", function (module) {
        return module.resource;
    });

    setModuleConstant("__dirname", function (module) {
        return module.context;
    });

};

module.exports = NodePathReplacePlugin;


/**
 // The old version for webpack 1.x ?
 function NodePathReplacePlugin() {}
 module.exports = NodePathReplacePlugin;
 NodePathReplacePlugin.prototype.apply = function(compiler) {

    function setModuleConstant(expressionName, fn) {
        compiler.parser.plugin("expression " + expressionName, function() {
            this.state.current.addVariable(expressionName, JSON.stringify(fn(this.state.module)));
            return true;
        });
    }

    setModuleConstant("__filename", function(module) {
        return module.resource;
    });

    setModuleConstant("__dirname", function(module) {
        return module.context;
    });

};
 */
