#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const osascript = require('node-osascript');
const inquirer = require('inquirer');


const widgetId = 'cheatsheet-widget-index-coffee';

const widgetsDirPath = '/Users/kemojo/Documents/UebersichtWidgets/';
const mdpDirName = 'cheatsheet.widget/';
const mdpfilesDir = 'markdown-files/';

const selectorFileName = 'selectorFile.txt';

const mdpfilesPath = widgetsDirPath + mdpDirName + mdpfilesDir;
const selectoreFilePath = widgetsDirPath + mdpDirName + selectorFileName;


function refreshWidget() {
  osascript.execute('tell application "Übersicht" to refresh');
}

program
  .version('0.1.0')
  .description('A simple command-line kit for Uebersichts Markdown-Preview');

program
  .command('open')
  .description('Opens the Cheatsheet Widget')
  .action(() => {
    osascript.execute(`tell application "Übersicht" to set hidden of widget id "${widgetId}" to false`);
  });

program
  .command('close')
  .description('Closes the Cheatsheet Widget')
  .action(() => {
    osascript.execute(`tell application "Übersicht" to set hidden of widget id "${widgetId}" to true`);
  });

program
  .command('list')
  .description('Lists all available markdownfiles')
  .action(() => {
    console.log(fs.readdirSync(mdpfilesPath));
  });

program
  .command('refresh')
  .description('Refreshes the Markdown Panel')
  .action(() => {
    refreshWidget();
  });

// TODO: Implement no argument = show current file
// TODO: Implement -s =  selctor option
program
  .command('use <filename>')
  .description('Use given Mardown file')
  .action((filename) => {
    const fileExist = () => !!(fs.readdirSync(mdpfilesPath).includes(filename));


    if (fileExist() === true) {
      fs.writeFileSync(selectoreFilePath, filename);
      refreshWidget();
      console.log('Changed CheatSheet');
    } else { console.log('File does not exist'); }
  });

program
  .command('create [filename]')
  .description('Create new Markdown file')
  .action((filename) => {
    function createFile(newfilename) {
      const titlename = newfilename;
      let newfilenamemd = newfilename;

      if (!newfilenamemd.match(/.+\.md/i)) newfilenamemd = `${newfilenamemd}.md`;
      fs.writeFileSync(mdpfilesPath + newfilenamemd, `# ${titlename} \n Your new CheatSheet`);
      console.log(`File ${newfilenamemd} created`);
      refreshWidget();
    }

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
  });

// TODO: Implement -s =  selctor function
program
  .command('delete <filename>')
  .description('Delete Markdown file')
  .action((filename) => {
    let newfilename = filename;
    if (!newfilename.match(/.+\.md/i)) newfilename = `${newfilename}.md`;
    const fileExist = () => !!(fs.readdirSync(mdpfilesPath).includes(newfilename));

    if (fileExist() === true) {
      fs.unlink(mdpfilesPath + newfilename, (err) => {
        if (err) return console.log(err);
        refreshWidget();
        return console.log('file deleted successfully');
      });
    } else { console.log('File does not exist'); }
  });


// TODO: Include functionality to edit a file

// TODO: Include functionality to download a md file fro source


program.parse(process.argv);

// rl.close();
