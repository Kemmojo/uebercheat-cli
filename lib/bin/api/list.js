const config = require('../../config/config.json');
const fs = require('fs');

module.exports = () => {
  const files = fs.readdirSync(config.mdpfilesPath);
  Object.keys(files).forEach((key) => { console.log(files[key]); });
};
