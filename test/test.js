'use strict';

const expect = require('chai').expect;
const fileType = require('file-type');
const jp2 = require('../index');
const pj = require('path').join;
const Vinyl = require('vinyl');
const vinylFile = require('vinyl-file');

describe('gulp-jpeg-2000', async () => {
  it('return a null file when passed null file', (done) => {
    const stream = jp2();
    const vinyl = new Vinyl();

    stream.write(vinyl);
    stream.once('data', (file) => {
      expect(file).to.deep.equal(vinyl);
      done();
    });
  });

  it('convert to jp2 when valid file contents', (done) => {
    const stream = jp2();
    const vinyl = vinylFile.readSync(pj(__dirname, 'fixtures/cat.jpg'));

    stream.write(vinyl);
    stream.once('data', (file) => {
      expect(fileType(file.contents).mime).to.equal('image/jp2');
      expect(fileType(file.contents).ext).to.equal('jp2');
      done();
    });
  });

  it('error with filename when invalid file contents', (done) => {
    const stream = jp2();
    const vinyl = new Vinyl({
      path: 'cat.txt',
      contents: Buffer.from('cat')
    });

    stream.write(vinyl);
    stream.once('error', (error) => {
      expect(error.fileName).to.equal('cat.txt');
      done();
    });
  });

  it('error with plugin name when invalid file contents', (done) => {
    const stream = jp2();
    const vinyl = new Vinyl({ contents: Buffer.from('cat') });

    stream.write(vinyl);
    stream.once('error', (error) => {
      expect(error.plugin).to.equal('gulp-jpeg-2000');
      done();
    });
  });

  it('error when corrupt image', (done) => {
    const stream = jp2();
    const vinyl = vinylFile.readSync(pj(__dirname, 'fixtures/corruptcat.jpg'));

    stream.write(vinyl);
    stream.once('error', (error) => {
      expect(error);
      done();
    });
  });

});
