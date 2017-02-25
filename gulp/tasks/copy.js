import gulp         from 'gulp';
import settings     from '../settings';

gulp.task('copy', () => {
    return gulp.src(settings.src.fonts + '/**')
        .pipe(gulp.dest(settings.dist.fonts));
});
