'use strict';

const cp = require('child_process');
const expect = require('chai').expect;
const fileType = require('file-type');
const jp2 = require('../index');
const pj = require('path').join;
const PluginError = require('plugin-error');
const sinon = require('sinon');
const Vinyl = require('vinyl');
const vinylFile = require('vinyl-file');

const PLUGIN_NAME = 'gulp-jpeg-2000';

describe(PLUGIN_NAME, () => {
  const convertVersion = `Version: ImageMagick 7.0.8-22 Q16 x86_64 2018-12-31 https://imagemagick.org
                          Copyright: © 1999-2019 ImageMagick Studio LLC
                          License: https://imagemagick.org/script/license.php
                          Features: Cipher DPC HDRI Modules
                          Delegates (built-in): bzlib freetype jng jp2 jpeg lcms ltdl lzma png tiff webp xml zlib;`;
  const execStub = sinon.stub(cp, 'exec');
  const notInstalledError = new PluginError(PLUGIN_NAME, 'ImageMagick is not installed or an incompatible version is installed! Installation instructions: https://github.com/courtneypattison/gulp-jpeg-2000', { showProperties: false });

  it('return a null file when passed null file', (done) => {
    execStub.yields(null, convertVersion);
    const stream = jp2();
    const vinyl = new Vinyl();

    stream.write(vinyl);
    stream.once('data', (file) => {
      expect(file).to.deep.equal(vinyl);
      done();
    });
  });

  it('convert to jp2 when valid file contents', (done) => {
    execStub.yields(null, convertVersion);
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
    execStub.yields(null, convertVersion);
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
    execStub.yields(null, convertVersion);
    const stream = jp2();
    const vinyl = new Vinyl({ contents: Buffer.from('cat') });

    stream.write(vinyl);
    stream.once('error', (error) => {
      expect(error.plugin).to.equal('gulp-jpeg-2000');
      done();
    });
  });

  it('error when corrupt image', (done) => {
    execStub.yields(null, convertVersion);
    const stream = jp2();
    const vinyl = vinylFile.readSync(pj(__dirname, 'fixtures/corruptcat.jpg'));

    stream.write(vinyl);
    stream.once('error', (error) => {
      expect(error);
      done();
    });
  });

  it('error when call exec', (done) => {
    execStub.yields('error');
    try {
      const stream = jp2();
    } catch (error) {
      expect(error.message).to.equal(notInstalledError.message);
      done();
    }
  });

  it('error when ImageMagick not installed', (done) => {
    execStub.yields(null, 'bash: convert: command not found');
    try {
      const stream = jp2();
    } catch (error) {
      expect(error.message).to.equal(notInstalledError.message);
      done();
    }
  });
});
