import gulp         from 'gulp';
import clean        from 'gulp-clean';
import settings     from '../settings';

gulp.task('clean', () => {
    return gulp.src(settings.baseDist, {read: false})
        .pipe(clean());
});