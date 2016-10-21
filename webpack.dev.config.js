var webpack = require('webpack');
var devConfig = require('./webpack.dev.config.js');
// webpack for client
var argv = require('minimist')(process.argv.slice(2));
var ports = {
    hmr: argv.hmr || 7000,
    server: argv.server || 7001
}

module.exports = {
    entry: {
        client: [
            'babel-polyfill',
            'webpack-dev-server/client?http://127.0.0.1:' + (ports.hmr),
            'webpack/hot/only-dev-server',
            './tmp/client/App.js'
        ]
    },
    output: {
        libraryTarget: 'var',
        path: '/dist',
        publicPath: '/dist',
        filename: '[name].js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                DEVELOPMENT: true,
                BROWSER: JSON.stringify(true)
            }
        })
    ],
    devtool: 'cheap-source-map',
    devServer: {
        contentBase: 'http://localhost:' + ports.hmr,
        publicPath: '/dist/',
        stats: 'normal',
        hot: true,
        proxy: {
            '*': 'http://127.0.0.1:' + ports.server
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        host: '127.0.0.1'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel']
            },
            { test: /\.node$/, loader: 'node' }
        ]
    },
}