
const { src, dest } = require('gulp');
const imagemin = require('gulp-imagemin');

const imgmin = () => {
    return  src("./src/images/*.+(png|jpg|gif|svg)")
            .pipe(imagemin())
            .pipe(dest("./dist/images"));
}

exports.imgmin = imgmin;
