var gulp = require("gulp");
var sass = require("gulp-sass");

function watch(){
    gulp.watch(['scss/page/backstage/*.scss',], style)
}

var paths = {
    styles: {

        src: "scss/backstage/*.scss",

        dest: "css/backstage/"
    }
 
};

function style() {

    watch();

    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest(paths.styles.dest));
}
exports.default = style;