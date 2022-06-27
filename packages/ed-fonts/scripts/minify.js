const gulp = require("gulp");
const fontmin = require("gulp-fontmin");

const runFontMinify = () => {
  return gulp
    .src(["./src/fonts/**/*.ttf"], { debug: true, sourcemaps: true, stat: true})
    .pipe(fontmin())
    .pipe(gulp.dest("./src/fonts"));
}

async function gulpTaskRunner(task) {
  return new Promise(function (resolve, reject) {
    gulp.series(task, (done) => {
      resolve();
      done();
    })();
  });
}

async function app() {
  console.log("start");
  await gulpTaskRunner(runFontMinify);
  console.log("end");
}

app();
