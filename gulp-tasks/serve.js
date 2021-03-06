const browserSync = require("browser-sync").create();

const serve = (cb) => {
	browserSync.init({
		server: {baseDir: "./",},
		port: 5500,
		open: true,
		browser: "chrome",
	});

	cb();
};

exports.browserSync = browserSync;
exports.serve = serve;
