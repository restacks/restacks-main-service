
// webpack for client
var argv = require('minimist')(process.argv.slice(2));
var ports = {
    hmr: argv.hmr || 7002,
    server: argv.server || 7000
}

module.exports = {
    entry: {
        client: [
            'babel-polyfill',
            'webpack-dev-server/client?http://127.0.0.1:' + (ports.hmr),
            'webpack/hot/only-dev-server',
            './src/client/App.tsx'
        ]
    },
    output: {
        libraryTarget: 'var',
        path: './dist',
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
    devtool: 'inline-source-map',
    devServer: {
        contentBase: 'http://localhost:' + ports.server,
        publicPath: '/bundle/',
        stats: 'errors-only',
        hot: true,
        proxy: {
            '*': 'http://127.0.0.1:' + ports.server
        },
        headers: { 'Access-Control-Allow-Origin': '*' },
        host: '127.0.0.1'
    }
}