'use strict';

const gm = require('gulp-gm');
const modifyErrorEvent = require('modify-error-event');
const PluginError = require('plugin-error');

module.exports = () => {
  let fileName = '';
  return modifyErrorEvent(gm((file) => {
    fileName = file.source;
    return file.setFormat('jp2');
  }, { imageMagick: true }), (err) => {
    return new PluginError('gulp-jpeg-2000', err, { fileName: fileName });
  });
};
