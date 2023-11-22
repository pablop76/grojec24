const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
// const sourcemaps = require("gulp-sourcemaps");
const autoprefixer = require("gulp-autoprefixer");
const browserSync = require("browser-sync").create();
const fileInclude = require("gulp-file-include");

const server = function (cb) {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
    notify: false, //reszta opcji z dokumentacji browsersync
    //host: "192.168.0.24",
    //port: 3000,
    open: true,
    //browser: "google chrome" //https://stackoverflow.com/questions/24686585/gulp-browser-sync-open-chrome-only
  });

  cb();
};

const css = function () {
  return (
    gulp
      .src("src/scss/style.scss")
      // .pipe(sourcemaps.init())
      .pipe(
        sass({
          outputStyle: "expanded", //styl kodu - expanded, compressed
        }).on("error", sass.logError)
      )
      .pipe(autoprefixer())
      // .pipe(sourcemaps.write())
      .pipe(gulp.dest("dist/css"))
  );
};

const js = function () {
  return gulp.src("src/js/*.js").pipe(gulp.dest("dist/js"));
};

const image = () => gulp.src("src/images/*").pipe(gulp.dest("dist/images"));

const html = function (cb) {
  return gulp
    .src("src/html/*.html")
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("dist"));
};

const htmlReload = function (cb) {
  browserSync.reload();
  cb();
};

const watch = function (cb) {
  gulp.watch("src/scss/**/*.scss", gulp.series(css, htmlReload));
  gulp.watch("src/html/**/*.html", gulp.series(html, htmlReload));
  gulp.watch("src/js/**/*.js", gulp.series(js, htmlReload));
  gulp.watch("src/images/*", gulp.series(image, htmlReload));
  cb();
};

exports.default = gulp.series(css, html, js, image, server, watch);
exports.css = css;
exports.js = js;
exports.image = image;
