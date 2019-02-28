var gulp = require('gulp');
var shell = require('gulp-shell');

gulp.task('default', function(done) {
    console.log("Gulpfile ejecutándose");
    done();
});

gulp.task("get", shell.task("curl http://localhost:8000/file.txt"));

gulp.task("put", shell.task("curl -X PUT -d hello http://localhost:8000/file.txt"));

gulp.task("delete", shell.task("curl -X DELETE http://localhost:8000/file.txt"));

gulp.task("mkcol", shell.task("curl -X MKCOL http://localhost:8000/file.txt"));

gulp.task("doc", shell.task("documentation serve file-system-promises.js -f md"));

gulp.task("repl", shell.task("curl http://localhost:8000/../"));