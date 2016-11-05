var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');
var webpackDevServer = require('webpack-dev-server');
var webpack = require('webpack');
var devConfig = require('./webpack.dev.config.js');
var argv = require('minimist')(process.argv.slice(2));
var ports = {
    hmr: argv.hmr || 7000,
    server: argv.server || 7001
}




gulp.task('serve', function () {

    new webpackDevServer(webpack(devConfig),devConfig.devServer).listen(ports.hmr ,function(){
        console.log('webpack server run at ' + (ports.hmr));
    });
    
});