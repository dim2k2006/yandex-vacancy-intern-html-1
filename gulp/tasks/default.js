import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => (
    runSequence(
        'clean',
        'copy',
        'images',
        'styles',
        'scripts',
        'markup',
        'connect',
        'watch'
    )
));
