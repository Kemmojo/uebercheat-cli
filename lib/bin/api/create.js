const fs = require('fs');
const inquirer = require('inquirer');
const config = require('../../config/config.json');
const apiRefresh = require('./refresh.js');

function createFile(newfilename) {
  const titlename = newfilename;
  let newfilenamemd = newfilename;

  if (!newfilenamemd.match(/.+\.md/i)) newfilenamemd = `${newfilenamemd}.md`;
  fs.writeFileSync(config.mdpfilesPath + newfilenamemd, `# ${titlename} \n Your new CheatSheet`);
  console.log(`Created ${newfilenamemd} successfully`);
  apiRefresh();
}

module.exports = (filename) => {
  if (typeof filename === 'undefined') {
    inquirer.prompt([{
      message: 'What will be the filename fill ?',
      type: 'input',
      name: 'inq_filename',
    }]).then((answers) => {
      createFile(answers.inq_filename);
    });
  } else {
    createFile(filename);
  }
};
