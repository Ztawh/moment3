// Hämtar diverse paket
const {src, dest, watch, series, parallel} = require("gulp");
const concat = require("gulp-concat");
const terser = require("gulp-terser").default;
const imagemin = require("gulp-imagemin");
const browserSync = require("browser-sync").create();
const sourcemaps = require("gulp-sourcemaps");
const sass = require('gulp-sass')(require('sass'));

// Sökvägar
const files = {
    htmlPath: "src/**/*.html",
    cssPath: "src/**/*.css",
    jsPath: "src/**/*.js",
    imgPath: "src/images/*",
    sassPath: "src/**/*.scss"
};

//HTML-task, kopierar filer
function copyHTML() {
    return src(files.htmlPath).pipe(dest("pub"));
};

//JS-task. Minifiera och konkatenera
function jsTask() {
    return src(files.jsPath)
    .pipe(concat("supermain.js"))
    .pipe(terser())
    .pipe(dest("pub/js"));
};

//Scss-task.
function sassTask(){
    return src(files.sassPath)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: "compressed"}).on("error", sass.logError))
    .pipe(sourcemaps.write())
    .pipe(dest("pub/css"))
    .pipe(browserSync.stream());
}

//Image-task. 
function imgTask(){
    return src(files.imgPath)
    .pipe(imagemin())
    .pipe(dest("pub/images"));
};

//Watch-task
function watchTask(){
    browserSync.init({
        server: "./pub"
    });
    return watch([files.htmlPath, files.jsPath, files.imgPath, files.sassPath], parallel(copyHTML, jsTask, imgTask, sassTask)).on("change", browserSync.reload);
};

// Kör samtliga funktioner vid start av gulp. 
exports.default = series (
    parallel(copyHTML, jsTask, imgTask, sassTask),
    watchTask
);