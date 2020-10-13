const gulp = require("gulp");
const pug = require("gulp-pug");
const sass = require("gulp-sass");
const uglify = require("gulp-uglify-es").default;
const babel = require("gulp-babel");

sass.compiler = require("node-sass");

exports.default = () => {
    gulp.watch("./**/*.pug", compilePug);
    gulp.watch("./sass/*.scss", compileSass);
    gulp.watch("./js/*.js", compileJs);
}

const compilePug = () => {
    return gulp.src("./*.pug")
        .pipe(pug())
        .pipe(gulp.dest("./docs/"));
}

const compileSass = () => {
    return gulp.src(["./sass/index.scss", "./sass/docs.scss"])
        .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
        .pipe(gulp.dest("./docs/assets/styles/"));
}

const compileJs = () => {
    return gulp.src("./js/*.js")
        .pipe(babel({ presets: ["@babel/env"] }))
        .pipe(uglify())
        .pipe(gulp.dest("./docs/assets/scripts/"));
}