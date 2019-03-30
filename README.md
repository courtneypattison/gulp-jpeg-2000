# [gulp](https://github.com/gulpjs/gulp)-jpeg-2000 [![Build Status](https://travis-ci.org/courtneypattison/gulp-jpeg-2000.svg?branch=master)](https://travis-ci.org/courtneypattison/gulp-jpeg-2000) [![Coverage Status](https://coveralls.io/repos/github/courtneypattison/gulp-jpeg-2000/badge.svg?branch=master)](https://coveralls.io/github/courtneypattison/gulp-jpeg-2000?branch=master)
> A gulp plugin for converting images to JPEG 2000 (JP2) using [ImageMagick](https://www.imagemagick.org/script/index.php)

## Installation
Install with npm:
```
npm install --save-dev gulp-jpeg-2000
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
```
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
