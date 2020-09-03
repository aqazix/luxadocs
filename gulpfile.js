const gulp = require("gulp");
const htmlmin = require("gulp-htmlmin");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");

sass.compiler = require("node-sass");

exports.default = () => {
    gulp.watch("./*.html", minifyHtml);
    gulp.watch("./assets/sass/*.scss", compileSass);
    gulp.watch("./assets/js/*.js", minifyJs);
}

const minifyHtml = () => {
    return gulp.src("./*.html")
        .pipe(htmlmin({ collapseWhitespace: true, removeComments: true }))
        .pipe(gulp.dest("./docs/"));
}

const compileSass = () => {
    return gulp.src("./assets/sass/*.scss")
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("./docs/"));
}

const minifyJs = () => {
    return gulp.src("./assets/js/*.js")
        .pipe(babel({ presets: ["@babel/env"] }))
        .pipe(uglify())
        .pipe(gulp.dest("./docs/"));
}