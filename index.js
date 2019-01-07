'use strict';

const cp = require('child_process');
const gm = require('gulp-gm');
const modifyErrorEvent = require('modify-error-event');
const PluginError = require('plugin-error');

const PLUGIN_NAME = 'gulp-jpeg-2000';

module.exports = () => {
  cp.exec('convert -version', (error, stdout) => {
    if (error || !stdout || stdout.toString().toLowerCase().indexOf('imagemagick') === -1) {
      throw new PluginError(PLUGIN_NAME, 'ImageMagick is not installed! Installation instructions: https://github.com/courtneypattison/gulp-jpeg-2000', { showProperties: false });
    }
  });

  let fileName = '';
  return modifyErrorEvent(gm((file) => {
    fileName = file.source;
    return file.setFormat('jp2');
  }, { imageMagick: true }), (err) => {
    return new PluginError(PLUGIN_NAME, err, { fileName: fileName });
  });
};
