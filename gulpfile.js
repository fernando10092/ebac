// Importe o Gulp
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

// Compilação do SASS - npm run gulp sass
function compileSass() {
    return gulp.src('./sources/styles/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('./build/styles'));
}

// Compressão de css - npm run gulp compressCss
function compressCss() {
    return gulp.src('./sources/styles/teste.css')
        .pipe(sass({ outputStyle: "compressed" }))
        .pipe(gulp.dest('./build/styles'));
}

// Compressão de scripts - npm run gulp javascript
function compressJavascript() {
    return gulp.src('./sources/scripts/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./build/scripts'));
}

// Compressão de imagens- npm run gulp compressImages
function compressImages() {
    return gulp.src('./sources/imagens_aula/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/imagens_aula'));
}

// Exporte as tarefas
exports.sass = compileSass;
exports.compressCss = compressCss;
exports.javascript = compressJavascript;
exports.compressImages = compressImages;
