var nodeExternals = require('webpack-node-externals');

module.exports = {
    // webpack should emit node.js compatible code
    target: 'node',

    // in order to ignore all modules in node_modules folder from bundling
    externals: [nodeExternals()],

    // 如果不设置这个, 那么 __filename 将为 '/index.js' 无法给 testHelper 使用
    node: {
        __dirname: true,
        __filename: true
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_moduels/,
                query: {
                    presets: ['es2015', 'stage-1'],
                    plugins: ['transform-decorators-legacy']
                }
            },
        ]
    }
};