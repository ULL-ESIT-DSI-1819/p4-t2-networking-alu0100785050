var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function(done) {
    console.log("Gulpfile ejecutándose");
    done();
});

gulp.task("nc", shell.task("nc localhost 60300"));

gulp.task("nc -U", shell.task("nc -U /tmp/watcher.sock"));

gulp.task("node", shell.task("node net-watcher-json-client.js"));
