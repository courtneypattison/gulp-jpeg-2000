[![Build Status][travis-img]][travis-url] [![Coverage Status][coveralls-img]][coveralls-url] [![NPM Version][npm-img]][npm-url]
# [gulp][gulp-url]-jpeg-2000
> A gulp plugin for converting images to JPEG 2000 (JP2) using [ImageMagick][imagemagick-url]

## Installation
Install with [yarn][yarn-url] or [npm][npm-home-url]:
```
$ yarn add gulp-jpeg-2000 -D
```
```
$ npm i gulp-jpeg-2000 -D
```

### ImageMagick
Make sure you have ImageMagick installed on your system.

#### macOS
Using [Homebrew][brew-url]:
```
$ brew install imagemagick
```

#### Ubuntu
Using apt:
```
$ apt install imagemagick
```

#### Windows
[Download ImageMagick][imagemagick-download-url]

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

[brew-url]: https://brew.sh/

[coveralls-img]: https://img.shields.io/coveralls/github/courtneypattison/gulp-jpeg-2000.svg
[coveralls-url]: https://coveralls.io/github/courtneypattison/gulp-jpeg-2000

[imagemagick-url]: https://www.imagemagick.org
[imagemagick-download-url]: https://www.imagemagick.org/script/download.php

[gulp-url]: https://github.com/gulpjs/gulp

[npm-home-url]: https://www.npmjs.com/

[npm-img]: https://img.shields.io/npm/v/gulp-jpeg-2000.svg
[npm-url]: https://www.npmjs.com/package/gulp-jpeg-2000

[travis-img]: https://img.shields.io/travis/courtneypattison/gulp-jpeg-2000.svg
[travis-url]: https://travis-ci.org/courtneypattison/gulp-jpeg-2000

[yarn-url]: https://yarnpkg.com/
