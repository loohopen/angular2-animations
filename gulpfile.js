var gulp = require('gulp'),
    uglify= require('gulp-uglify');
 
gulp.task('jsmin', function () {
    //压缩src/js目录下的所有js文件
    //除了test1.js和test2.js（**匹配src/js的0个或多个子文件夹）
    gulp.src(['dist/vendor.*.js']) 
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});