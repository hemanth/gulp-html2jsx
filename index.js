'use strict';
var path = require('path');
var gutil = require('gulp-util');
var through = require('through2');
var HTMLtoJSX = require('htmltojsx');

module.exports = function (opts) {
	return through.obj(function (file, enc, cb) {
		if (file.isNull()) {
			cb(null, file);
			return;
		}

		if (file.isStream()) {
			cb(new gutil.PluginError('gulp-html2jsx', 'Streaming not supported'));
			return;
		}

		try {
			file.contents = new Buffer(new HTMLtoJSX(opts).convert(file.contents.toString()));
			file.path = gutil.replaceExtension(file.path, '.jsx');
			this.push(file);
		} catch (err) {
			this.emit('error', new gutil.PluginError('gulp-html2jsx', err, {
				fileName: file.path
			}));
		}
		cb();
	});
};
