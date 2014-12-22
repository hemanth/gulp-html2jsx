'use strict';
var assert = require('assert');
var gutil = require('gulp-util');
var HTMLtoJSX = require('./');

it('should precompile HTML to JSX.', function (cb) {
	var stream = HTMLtoJSX();

	stream.on('data', function (file) {
		assert.equal(file.relative, 'fixture.jsx');
		assert(file.contents.toString().indexOf('createClass') != -1);
		cb();
	});

	stream.write(new gutil.File({
		path: 'fixture.html',
		contents: new Buffer('<p>Hello</p>')
	}));
});



it('should precompile HTML to JSX with opts.', function (cb) {
	var stream = HTMLtoJSX({
		createClass: true,
		outputClassName: 'AwesomeComponent'
	});

	stream.on('data', function (file) {
		assert.equal(file.relative, 'fixture.jsx');
		assert(file.contents.toString().indexOf('AwesomeComponent') != -1);
		cb();
	});

	stream.write(new gutil.File({
		path: 'fixture.html',
		contents: new Buffer('<p>Hello</p>')
	}));
});
