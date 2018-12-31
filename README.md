# [gulp](https://github.com/gulpjs/gulp)-jpeg-2000 [![Build Status](https://travis-ci.org/courtneypattison/gulp-jpeg-2000.svg?branch=master)](https://travis-ci.org/courtneypattison/gulp-jpeg-2000)
> A gulp plugin for converting images to JPEG 2000 (JP2) using [ImageMagick](https://www.imagemagick.org/script/index.php)

## Installation
Install with npm:
```
npm install --save-dev gulp-jpeg-2000
```

### ImageMagick
Make sure you have ImageMagick installed on your system. Test that it is installed by running `convert` in the terminal.

#### macOS
Using [Homebrew](https://brew.sh/):
```
brew install ImageMagick
```

#### Ubuntu
Using apt:
```
apt install ImageMagick
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
    .pipe(gulp.dest('dist'));
}
```

## Testing

1. Install ImageMagick
2. Install dependencies locally `npm install`
3. Install gulp globally `npm install -g gulp`
4. Run `gulp test`

## License

MIT © [Courtney Pattison](https://courtneypattison.com/)