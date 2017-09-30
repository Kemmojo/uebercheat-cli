/* eslint-disable */
const path = require('path');

require('fs').readdirSync(__dirname).forEach((file) => {
  if (file === 'index.js') return;
  module.exports[path.basename(file, '.js')] = require(path.join(__dirname, file));
});
