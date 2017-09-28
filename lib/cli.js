#!/usr/bin/env node

const fs = require('fs');
const program = require('commander');
const osascript = require('node-osascript');
const inquirer = require('inquirer');
const colors = require('colors');
const config = require('./config/config.json');


function refreshWidget() { osascript.execute('tell application "Übersicht" to refresh'); }

program
  .version('0.2.0')
  .description('A simple command-line kit for Uebersichts Markdown-Preview');

program
  .command('open')
  .description('Opens the Cheatsheet Widget')
  .action(() => { osascript.execute(`tell application "Übersicht" to set hidden of widget id "${config.widgetId}" to false`); });

program
  .command('close')
  .description('Closes the Cheatsheet Widget')
  .action(() => { osascript.execute(`tell application "Übersicht" to set hidden of widget id "${config.widgetId}" to true`); });

program
  .command('list')
  .description('Lists all available markdownfiles')
  .action(() => {
    const files = fs.readdirSync(config.mdpfilesPath);
    Object.keys(files).forEach((key) => { console.log(files[key]); });
  });

program
  .command('refresh')
  .description('Refreshes the Markdown Panel')
  .action(() => { refreshWidget(); });

// TODO: Implement no argument = show current file
// TODO: Implement -s =  selctor option
program
  .command('use <filename>')
  .description('Use given Mardown file')
  .action((filename) => {
    const fileExist = () => !!(fs.readdirSync(config.mdpfilesPath).includes(filename));

    if (fileExist() === true) {
      fs.writeFileSync(config.selectoreFilePath, filename);
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
      fs.writeFileSync(config.mdpfilesPath + newfilenamemd, `# ${titlename} \n Your new CheatSheet`);
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
    const fileExist = () => !!(fs.readdirSync(config.mdpfilesPath).includes(newfilename));

    if (fileExist() === true) {
      fs.unlink(`${config.mdpfilesPath}${newfilename}`, (err) => {
        if (err) return console.log(err);
        refreshWidget();
        return console.log('file deleted successfully');
      });
    } else { console.log('File does not exist'); }
  });


// TODO: Include functionality to edit a file

// TODO: Include functionality to download a md file fro source


program.parse(process.argv);

function makeRed(txt) { return colors.red(txt); }

if (!process.argv.slice(2).length) {
  program.outputHelp(makeRed);
}
