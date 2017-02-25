import gulp         from 'gulp';
import gulpif       from 'gulp-if';
import plumber      from 'gulp-plumber';
import jade         from 'gulp-jade';
import inheritance  from 'gulp-jade-inheritance';
import cached       from 'gulp-cached';
import filter       from 'gulp-filter';
import rename       from 'gulp-rename';
import prettify     from 'gulp-html-prettify';
import inline       from 'gulp-inline';
import errorHandler from '../utils/errorHandler';
import settings     from '../settings';

let data = {
    jv0: 'javascript:void(0);',
    timestamp: +new Date()
};

gulp.task('markup', () => {
    return gulp
        .src(`${settings.baseSrc}/**/*.jade`)
        .pipe(plumber({errorHandler: errorHandler}))
        .pipe(cached('jade'))
        .pipe(gulpif(global.watch, inheritance({basedir: settings.baseSrc})))
        .pipe(filter((file) => /src[\\\/]pages/.test(file.path)))
        .pipe(jade({data: data}))
        .pipe(prettify({
            brace_style: 'expand',
            indent_size: 1,
            indent_char: '\t',
            indent_inner_html: true,
            preserve_newlines: true
        }))
        .pipe(rename({dirname: '.'}))
        .pipe(inline({
            base: 'static/',
            disabledTypes: ['css', 'img', 'js'],
            ignore: settings.ignoreInline
        }))
        .pipe(gulp.dest(settings.baseDist));
});
