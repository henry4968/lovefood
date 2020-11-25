
const {
    src , dest , watch
} = require('gulp');
const sass = require("gulp-sass");



var paths = {
    styles: {

        src: "scss/backstage/*.scss",

        dest: "css/_backstage/"
    }
 
};

function style() {
    return src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(dest(paths.styles.dest));
}
exports.default = function watchs(){
    watch(['scss/page/backstage/*.scss'], style)
}