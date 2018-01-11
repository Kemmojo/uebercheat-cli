const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const config = require('../../config/config.json');
const apiRefresh = require('./refresh.js');

// TODO: Move files to Trash instead of deleting them permanently

function deleteFile(filename) {
  fs.unlink(`${config.mdpfilesPath}${filename}`, (err) => {
    if (err) return console.log(err);
    apiRefresh();
    return console.log(`Deleted ${colors.red(filename)} successfully`);
  });
}

function fetchFiles() { return fs.readdirSync(config.mdpfilesPath); }

function fileInput(filename) {
  let newfilename = filename;
  if (!newfilename.match(/.+\.md/i)) newfilename = `${newfilename}.md`;
  const fileExist = () => !!(fs.readdirSync(config.mdpfilesPath).includes(newfilename));

  if (fileExist() === true) {
    deleteFile(newfilename);
  } else { console.log(` ${newfilename} does not exist`); }
}

function fileSelector() {
  inquirer.prompt([{
    type: 'list',
    name: 'file',
    message: 'Which file do you want to edit ?',
    choices: fetchFiles(),
  }]).then((answers) => {
    deleteFile(answers.file);
  });
}

module.exports = (filename) => {
  if (typeof filename === 'undefined') {
    fileSelector();
  } else {
    fileInput(filename);
  }
};
