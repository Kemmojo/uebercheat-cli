## Instruction

Ever found yourself trying to remember how this one particular library function was called, maybe because you were working on a complex project and the function is what makes your life a lot easier and now you feed google with some weird searchterms, hoping you might get the old result which brought the information.

Truth to be told, there are a lot of helpful tools and websites like Stackoverflow, obiously google or Kite, which help you find the right tools for you needs, or eventually the function you search for. But sometimes you just want to skip the process of searching and just look at a specific resource, review what you needed, implement it in your code and rock on. 

Now Uebersicht is, what i call, a widget-displayer-layer for mac, it gives you a panel which reads html and displays widget-content as a layer between your background and the mounted layer for the desctop icons on your desktop.
Markdown-Preview is a widget for uebersicht, which enables you to print different markdown files to that uebersicht-widget-layer.

I used the Uebersicht Markdown-Preview for a long time now, what i did was collecting and writing a lot of markdown files, based on certain topics on coding, because if you like me and listen to or watch a lot tutorials or read articels and take notes from them, because i dont want to search for specific information again and again, then you gonna end up with a messy mountain of information, not beeing formatted or structured. Now try to find fundamentals, principles or certain details in there. Maybe you will, you know, chaos structured by geniuses, but i like to keep things clean and even findable for others as fast as possible.

All good, now you know why to use tools like that, but one thing i missed with these was Speed. Sometimes i needed to switch between files, sometimes i know which file i was needing, sometimes not, the point is, there were actually 2 ways to do that, but non of them were immediately executable, neither human friendly.

Well, in order to change the currently viewed file, you need to advice the widget to change it, by changing the value in a file, let´s call it "view-current-markdown", which holds the filename to be monitorized. 
There are two ways, either you do it manually by editing the file, or there is a workflow for the alfred application, which you need to pay money for. 

Now, if you like me and find yourself more often playing with the terminal of choice, a tool to handle your Markdown-Preview-Layer and your markdownfiles, wouldn't just speed up your programming process, it gives you a great way to review what you´ve written and by that learn coding quicker. A standart cli was born.

Now all blabla´s away, let´s dive in. :)

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
