const fs = require('fs');
const cp = require('child_process');
const inquirer = require('inquirer');
// const colors = require('colors');
const config = require('../../config/config.json');

// CHECK: Do i need a Streamwriter after editing ?

function editFile(filename) {
  // TODO: Add Promise that editor saved file
  const filePath = `${config.mdpfilesPath}${filename}`;
  const script = `open ${filePath}`;
  cp.exec(script);
}

function fetchFiles() { return fs.readdirSync(config.mdpfilesPath); }

function fileInput(filename) {
  let newfilename = filename;
  if (!newfilename.match(/.+\.md/i)) newfilename = `${newfilename}.md`;
  const fileExist = () => !!(fs.readdirSync(config.mdpfilesPath).includes(newfilename));

  if (fileExist() === true) {
    editFile(newfilename);
  } else { console.log(` ${newfilename} does not exist`); }
}

function fileSelector() {
  inquirer.prompt([{
    type: 'list',
    name: 'file',
    message: 'Which file do you want to delete ?',
    choices: fetchFiles(),
  }]).then((answers) => {
    editFile(answers.file);
  });
}

// TODO you need to work with promises
module.exports = (filename) => {
  if (typeof filename === 'undefined') {
    fileSelector();
  } else {
    fileInput(filename);
  }
};
