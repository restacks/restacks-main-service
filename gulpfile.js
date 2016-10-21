var gulp = require('gulp');
var ts = require('gulp-typescript');
var nodemon = require('gulp-nodemon');


gulp.task('dev:server', function(){
    return gulp.src(['./src/client/**/*.ts*', './src/common/**/*.ts*'])
})

gulp.task('serve',['dev:server'], function () {
    nodemon({
        args: [],
        watch: [
            'tmp/server/main.js',
        ],
        execMap: {
            js: 'node --harmony --nolazy',
        },
        script: 'tmp/server/main.js',
        ext: 'ts tsx js html',
    })
});