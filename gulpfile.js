
const {
    src , dest , watch
} = require('gulp');
const sass = require("gulp-sass");



var paths = {
    styles: {

        src:["scss/backStage/backstageAll.scss"] ,

        dest: "css/backstage/"
    }
 
};

function style() {
    return src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(dest(paths.styles.dest));
}
exports.default = function watchs(){
    watch(["scss/page/backstage/*.scss"], style)
}

var paths2 = {
    styles: {

        src:["scss/page/*/*.scss","!scss/page/backstage/*"] ,

        dest: "css/"
    }
 
};

function frontStyle(){
    return src(paths2.styles.src)
    .pipe(sass())
    .on('error', sass.logError)
    .pipe(dest(paths2.styles.dest))
}

exports.front = function watchs(){
    watch(["scss/page/*/*.scss","!scss/page/backstage/*"], frontStyle)
}