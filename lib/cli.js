#!/usr/bin/env node

const program = require('commander');
const colors = require('colors');
const api = require('./bin/api');


program
  .version('1.0.0')
  .description('A simple command-line kit for Uebersichts Markdown-Preview');

program
  .command('open')
  .description('Opens the Cheatsheet Widget')
  .action(() => { api.open(); });

program
  .command('close')
  .description('Closes the Cheatsheet Widget')
  .action(() => { api.close(); });

program
  .command('list')
  .description('Lists all available markdownfiles')
  .action(() => { api.list(); });

program
  .command('refresh')
  .description('Refreshes the Markdown Panel')
  .action(() => { api.refresh(); });

program
  .command('use [filename]')
  .description('Use given Mardown file')
  .action((filename) => { api.use(filename); });

program
  .command('create [filename]')
  .description('Create new Markdown file')
  .action((filename) => { api.create(filename); });

program
  .command('delete [filename]')
  .description('Delete Markdown file')
  .action((filename) => { api.delete(filename); });

program
  .command('edit [filename]')
  .description('Edit Markdown file')
  .action((filename) => { api.edit(filename); });

program
  .command('clone <url>')
  .description('Clone a Markdown or HTML-File from given URL')
  .action((url) => { api.clone(url); });


program.parse(process.argv);

function makeRed(txt) { return colors.red(txt); }

if (!process.argv.slice(2).length) { program.outputHelp(makeRed); }
