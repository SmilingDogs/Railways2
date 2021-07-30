const { src, dest } = require("gulp");
const sass = require("gulp-sass");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const concat = require('gulp-concat');
//const browserSync = require("./serve").browserSync;
const browserSync = require('browser-sync').create();


const styles = () => { // берем исходные файлы scss
	return src("./src/scss/main.scss")
		//компилируем из scss  в css (преобразуем)
		.pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
		//добавляем префикcы
		.pipe(autoprefixer({overrideBrowserslist: ['last 2 versions'],
            cascade: false
		}))
		//Минификация CSS файла
		.pipe(cleanCSS({ compatibility: 'ie8'}))
		// сводим их в единый файл css
		.pipe(concat('styles.min.css'))

		//отправляем результаты всех модификаций в папку dist
		.pipe(dest("./dist/css/"))
		//следим за изменениями в
		.pipe(browserSync.stream());
}

exports.styles = styles;
