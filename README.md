# [gulp](https://github.com/gulpjs/gulp)-jpeg-2000 ![Travis (.org)](https://img.shields.io/travis/courtneypattison/gulp-jpeg-2000.svg) ![Coveralls github](https://img.shields.io/coveralls/github/courtneypattison/gulp-jpeg-2000.svg) ![npm](https://img.shields.io/npm/v/gulp-jpeg-2000.svg)
> A gulp plugin for converting images to JPEG 2000 (JP2) using [ImageMagick](https://www.imagemagick.org/script/index.php)

## Installation
Install with [yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/):
```
$ yarn add gulp-jpeg-2000 -D
```
```
$ npm i gulp-jpeg-2000 -D
```

### ImageMagick
Make sure you have ImageMagick installed on your system.

#### macOS
Using [Homebrew](https://brew.sh/):
```
brew install imagemagick
```

#### Ubuntu
Using apt:
```
apt install imagemagick
```

#### Windows
[Download](https://www.imagemagick.org/script/download.php)

## Example
```.js
var gulp = require('gulp');
var jp2 = require('gulp-jpeg-2000');

function convertJP2() {
  return gulp.src('src/images/**/*.{jpg,jpeg,png}')
    .pipe(jp2())
    .pipe(gulp.dest('dist/images'));
}
```

## License

MIT © [Courtney Pattison](https://courtneypattison.com/)
