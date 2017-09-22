#!/usr/bin/env node
const program = require('commander');
const osascript = require('node-osascript');

const widgetDirectoryPath = "";

program
  .version('0.0.1')
  .description('A simple command-line kit for Uebersichts Markdown-Preview');

program
  .command('open')
  .description('Opens the Cheatsheet Widget')
  .action( () => {
    osascript.execute('tell application "Übersicht" to set hidden of widget id "cheatsheet-widget-index-coffee" to false');
  });

program
  .command('close')
  .description('Closes the Cheatsheet Widget')
  .action( () => {
    osascript.execute('tell application "Übersicht" to set hidden of widget id "cheatsheet-widget-index-coffee" to true');
  });

program
  .command('list')
  .description('Lists all available markdownfiles')
  .action( () => {
    console.log('Should list all markdown files');
  });

program
  .command('refresh')
  .description('Refreshes the Markdown Panel')
  .action( () => {
    osascript.execute('tell application "Übersicht" to refresh widget id "cheatsheet-widget-index-coffee"');
  });

program
  .command('use <file>')
  .description('Use given file')
  .action( () => {
    console.log('Use File');
    // TODO: Change selected File
    osascript.execute('tell application "Übersicht" to refresh widget id "cheatsheet-widget-index-coffee"');
  });

program
  .command('create [file]')
  .description('Create new Markdown file')
  .action( () => {
    console.log('Use File');

  });

program
  .command('delete <file>')
  .description('Delete Markdown file')
  .action( () => {
    console.log('Use File');

  });



program.parse(process.argv);
