/* eslint-disable no-unused-vars */
const fs = require('fs');
const npv = require('node-pv');
const request = require('request');
const rp = require('request-promise');
const validUrl = require('valid-url');
const toMarkdown = require('to-markdown');
const config = require('../../config/config.json');
const apiRefresh = require('./refresh.js');


function createFilename(url) {
  const newfilename = url.split('/');
  return `${newfilename[3]}-${newfilename[4]}.md`;
}

function cloneMarkdown(url, header) {
  const filename = createFilename(url);
  const filePath = `${config.mdpfilesPath}${filename}`;
  const pv = npv({ size: header['content-length'], name: 'Download: ' });
  pv.on('info', str => process.stderr.write(str));
  rp(url)
    .pipe(pv)
    .pipe(fs.createWriteStream(filePath));
  apiRefresh();
}

// function cloneHTML(url, header) {
//   const filename = 'HelloToo.md';
//   const filePath = `${config.mdpfilesPath}${filename}`;
//   const pv = npv({ size: header['content-length'], name: 'Download: ' });
//   pv.on('info', str => process.stderr.write(str));
//   rp(url)
//     .pipe(pv)
//     .pipe(fs.createWriteStream(filePath));
//   const newhtmlFile = JSON.stringify(fs.readFileSync(filePath));
//   const newhtmlFileToMD = toMarkdown(newhtmlFile);
//   console.log(newhtmlFileToMD);
//   apiRefresh();
// }

function checkURLFormat(url) {
  rp.head(url).then((header) => {
    const contentType = header['content-type'];
    if (url.match(/.+\.md/i)) {
      cloneMarkdown(url, header);
    } else if (contentType === 'application/json' || url.match(/.+\.json/i)) {
      console.log('Cannot clone json yet');
    } else if (contentType === 'image/jpeg') {
      console.log('Cannot clone images yet');
    } else {
      console.log('Cannot clone Plain Text or HTML yet');
      // cloneHTML(url, header);
    }
  });
}

function checkURL(url) {
  if (validUrl.isUri(url)) {
    checkURLFormat(url);
  } else { console.log('Invalid URL'); }
}

module.exports = (url) => { checkURL(url); };
