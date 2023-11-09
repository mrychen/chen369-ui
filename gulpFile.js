const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass')) //sccc->css
const minifyCSS = require('gulp-minify-css'); //css的带阿米压缩

// 启动一个名字，并命名为sass任务
gulp.task('sass', async function () {
    return gulp.src('components/css/*.scss') //将sass转成css
        .pipe(sass()).pipe(minifyCSS()) //压缩
        .pipe(gulp.dest('dist/css')) //输出到打包目录
})