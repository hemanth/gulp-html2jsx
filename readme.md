# gulp-react [![Build Status](https://travis-ci.org/hemanth/gulp-html2jsx.svg?branch=master)](https://travis-ci.org/hemanth/gulp-html2jsx)

> Converts HTML to JSX for use with React.

## Install

```sh
$ npm install --save-dev gulp-html2jsx
```


## Usage

```js
var gulp = require('gulp');
var html2jsx = require('gulp-html2jsx');

gulp.task('default', function () {
	return gulp.src('template.html')
		.pipe(html2jsx({/* if any opts */}))
		.pipe(gulp.dest('dist'));
});
```

## API

### html2jsx(options)

__options:__

```js
{
  createClass: true,
  outputClassName: 'AwesomeComponent'
}
```

__Sample:__

```html
<p> Hello </p>
```

Get converted to:

```js
var NewComponent = React.createClass({
  render: function() {
    return (

      <p> Hello </p>
    );
  }
});
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
