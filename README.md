# Commandline line Interface for Uebersicht Markdown Preview(Cheatsheet)

This is a simple collection of standard tools for the [Uebersicht](http://tracesof.net/uebersicht/ "Home of Uebersicht") cheatsheet [widget](http://tracesof.net/uebersicht-widgets/#markdown_cheat_sheet "Markdown Preview Widget").

## Instruction

Ever found yourself trying to remember how this one particular system function was called, maybe because you are working on a complex project and the function is which makes your life easier and now you feed google with some weird searchterms, hoping you get the old result which brought the information.

Truth to be told, there are a lot of helpful tools and websites like Stackoverflow or Kite, which help you find the right tools for you needs. But sometimes you just want to skip the process of searching and just look at a specific resource, see what you need, implement it in your code and rock on. This is where Uebersichts Markdown-Preview Widget comes in handy. It shows you a non-interactional Panel on your Desktop like a background image, which monitors markdown files like README.md´s on Github.

Now this is great for reviewing purposes, but what makes it really amazing is that you can switch between multiple markdownfiles.

You may ask "So, why the commandline kit ?", well, in order to change the currently viewed file, you need the advice the widget to change it, by giving the variable which holds the file to be monitorized, the file name you want to be displayed in the panel. There are two ways, either you do it manually in the code, or there is a workflow for the alfred application. Now, if you like me and find yourself more often playing with the terminal of choice, a tool to handle your Markdown-Preview panel and your markdownfiles, wouldn't just speed up your programming process, it gives you a great way to learn coding quicker.

Now all blabla´s away, let´s dive in. :)

Note to me - beautify this instruction.

## In Production ( ToDo )

- Add automatic identification to global variables

## Dependencies

- NodeJS
- [Uebersicht](http://tracesof.net/uebersicht/ "Home of Uebersicht")
- [Markdown-Preview](http://tracesof.net/uebersicht-widgets/#markdown_cheat_sheet "Markdown Preview Widget").

## Installation

```zsh
git clone https://github.com/Kemmojo/uebercheat-cli.git
cd uebercheat-cli
npm install -g
```

**Note:** Currently standard paths do not exist, in order to make **uebercheat-cli** and **Markdown Preview** work correctly, adjustments to the `config.json` and **Markdown Preview** are neccessary.

Simply adjust the Paths to your System and you should be good to go.

## Usage

### uebercheat open

`uebercheat open` -> Opens Markdown Preview on your Desktop

### uebercheat close

`uebercheat close` -> Opens Markdown Preview on your Desktop

### uebercheat refresh

`uebercheat refresh` -> **Currently** Refreshes **Übersicht**

### uebercheat list

`uebercheat list` -> Lists all your available Sheets in your defined Sheets directory

### uebercheat use

- `uebercheat use **sheetname**` -> Opens given Sheet in Markdown Preview
- `uebercheat use` -> Opens Dialog to use given Sheets in your defined Sheets directory

### uebercheat create

- `uebercheat create **sheetname**` -> Create Sheet with given name
- `uebercheat create` -> Opens Dialog to create a Sheet in your defined Sheets directory

### uebercheat edit

- `uebercheat edit **sheetname**` -> Edits given Sheet in default Editor
- `uebercheat edit` -> Opens Dialog to edit a Sheet in your defined Sheets directory with your default Editor

### uebercheat delete

- `uebercheat delete **sheetname**` -> Delets Sheet in your defined Sheets directory
- `uebercheat delete` -> Opens Dialog to delete a Sheet in your defined Sheets directory

### uebercheat clone

`uebercheat clone **MarkdownURL**` -> Downloads a Markdown file into your defined Sheets directory
