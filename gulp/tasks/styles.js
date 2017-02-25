import gulp         from 'gulp';
import plumber      from 'gulp-plumber';
import sass         from 'gulp-sass';
import sassGlob     from 'gulp-sass-glob';
import postcss      from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import cmq          from 'gulp-combine-mq';
import minifyCss    from 'gulp-minify-css';
import rename       from 'gulp-rename';
import sourcemaps   from 'gulp-sourcemaps';
import errorHandler from '../utils/errorHandler';
import settings     from '../settings';
import { browsers } from '../../package.json';

gulp.task('styles', () => {
    return gulp.src(settings.src.styles + '/main.scss')
        .pipe(sourcemaps.init())
        .pipe(plumber({errorHandler: errorHandler}))
        .pipe(sassGlob())
        .pipe(sass())
        .pipe(postcss([
            autoprefixer({
                browsers: [
                    'Android >= ' + browsers.android,
                    'Chrome >= ' + browsers.chrome,
                    'Firefox >= ' + browsers.firefox,
                    'Explorer >= ' + browsers.ie,
                    'iOS >= ' + browsers.ios,
                    'Opera >= ' + browsers.opera,
                    'Safari >= ' + browsers.safari
                ]
            })
        ]))
        .pipe(cmq({beautify: false}))
        .pipe(minifyCss())
        .pipe(rename({suffix: '.min'}))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(settings.dist.styles))
});