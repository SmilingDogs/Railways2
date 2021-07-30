const { parallel, series } = require("gulp");

const cleanDistTask = require("./gulp-tasks/cleanDist").cleanDist;
const stylesTask = require("./gulp-tasks/styles").styles;
const scriptsTask = require("./gulp-tasks/scripts").scripts;
const serveTask = require("./gulp-tasks/serve").serve;
const watchTask = require("./gulp-tasks/watch").watch;
const imgminTask = require("./gulp-tasks/imgmin").imgmin;



build = series(cleanDistTask, parallel(stylesTask,scriptsTask,imgminTask));
dev = series(build, serveTask, watchTask);

exports.build = build;
exports.dev = dev;
