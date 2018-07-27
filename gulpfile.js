var gulp = require("gulp"),
  sass = require("gulp-sass"),
  concat = require("gulp-concat"),
  cssnano = require("gulp-cssnano"),
  rename = require("gulp-rename"),
  autoprefixer = require("gulp-autoprefixer");

var source = "./",
  dist = "./dist/";

/* scss */
gulp.task("scss", function() {
  return gulp
    .src([source + "scss/main.scss"])
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer(["last 15 versions"], {
        cascade: true
      })
    )
    .pipe(gulp.dest(dist + "css/"));
});

/* mincss */
gulp.task("mincss", ["scss"], function() {
  return gulp
    .src([dist + "css/main.css"])
    .pipe(cssnano())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest(dist + "css/"));
});

gulp.task("watch", ["mincss"], function() {
  gulp.watch([source + "scss/**/*.scss"], ["scss"]);
});
