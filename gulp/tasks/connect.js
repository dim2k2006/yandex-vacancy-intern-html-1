import gulp        from 'gulp';
import browserSync from 'browser-sync';
import gutil       from 'gulp-util';
import setting     from '../settings';

gulp.task('connect', () => (
    browserSync.init({
        files: [`${setting.baseDist}/**/*`],
        open: !!gutil.env.open,
        reloadOnRestart: true,
        port: gutil.env.port || 3000,
        server: {
            baseDir: setting.baseDist,
            directory: true
        },
        tunnel: !!gutil.env.tunnel
    })
));