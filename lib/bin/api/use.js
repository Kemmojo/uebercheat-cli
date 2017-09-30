
const fs = require('fs');
const inquirer = require('inquirer');
const colors = require('colors');
const config = require('../../config/config.json');
const apiRefresh = require('./refresh.js');

function useFile(filename) {
  fs.writeFileSync(config.selectoreFilePath, filename);
  console.log('Changed CheatSheet');
  apiRefresh();
}

function fetchFiles() { return fs.readdirSync(config.mdpfilesPath); }

function fileSelector() {
  console.log(`Current File: ${colors.red(fs.readFileSync(config.selectoreFilePath))}`);
  inquirer.prompt([{
    type: 'list',
    name: 'file',
    message: 'Which file do you want to use ?',
    choices: fetchFiles(),
  }]).then((answers) => {
    useFile(answers.file);
  });
}

function fileInput(filename) {
  let newfilename = filename;
  if (!newfilename.match(/.+\.md/i)) newfilename = `${newfilename}.md`;
  const fileExist = () => !!(fs.readdirSync(config.mdpfilesPath).includes(newfilename));

  if (fileExist() === true) {
    useFile(newfilename);
  } else {
    console.log('File does not exist');
    fileSelector();
  }
}

module.exports = (filename) => {
  if (typeof filename === 'undefined') {
    fileSelector();
  } else {
    fileInput(filename);
  }
};
