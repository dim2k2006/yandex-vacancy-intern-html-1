import gulp       from 'gulp';
import minifyCss  from 'gulp-minify-css';
import concatCss  from 'gulp-concat-css';
import settings   from '../settings';
import vendor     from '../../package.json';

gulp.task('styles-dependencies', () => {
    gulp.src(vendor.vendorStyles.path, {base: './src/bower_components/'})
        .pipe(concatCss('vendor.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(settings.dist.styles));
});