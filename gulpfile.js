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

gulp.task('compile:server', function(){
    const tsProject = ts.createProject('./tsconfig.json');
    return gulp.src(['./src/**/*.ts*'], {base: './src'})
        .pipe(tsProject())
        .pipe(gulp.dest('./tmp'))
})



gulp.task('serve',['compile:server'], function () {
    nodemon({
        args: [`--port=${ports.server}`],
        watch: [ 
            'tmp/server/main.js',
        ],
        execMap: {
            js: 'node --harmony --nolazy',
        },
        script: 'tmp/server/main.js',
        ext: 'ts tsx js html',
    });
    console.log('waiting for webpack bundle')

    new webpackDevServer(webpack(devConfig),devConfig.devServer).listen(ports.hmr ,function(){
        console.log('webpack server run at ' + (ports.hmr));
    });
    gulp.watch(['./src/**/*.ts*'],['compile:server'])
});