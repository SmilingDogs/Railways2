const { src, dest } = require("gulp");
const concat = require('gulp-concat');
const browserSync = require('browser-sync').create();
const minifyJS = require('gulp-js-minify');

const scripts = () => {
	return src("./src/js/*.js")
	.pipe(concat('scripts.min.js'))
	.pipe(minifyJS())
	.pipe(dest("./dist/js/"))
	.pipe(browserSync.stream());
}

exports.scripts = scripts;
