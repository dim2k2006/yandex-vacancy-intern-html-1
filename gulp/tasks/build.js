import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', () => (
    runSequence(
        'clean',
        'copy',
        'images',
        'styles',
        'markup'
    )
));
