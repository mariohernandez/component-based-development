# 00-Requirements

# Component-based Development with Drupal 8
This is a guide that outlines the process of development wth components in Drupal 8.

The requirements below will ensure you get the most out of the training.

## Requirements
- Terminal
- Node, NVM & NPM
- Gulp
- KSS Node

### Terminal
Please ensure you have a Terminal (MAC) or Command Prompt (Windows) available to use.  During this training we will use the terminal window to work with `NPM`, `Gulp` and `Git`.

### Composer
Composer (https://getcomposer.org/) is a dependency manager for PHP that allows us to perform a multitude of tasks; everything from creating a Drupal project to declaring libraries and even installing contributed modules, just to name a few. The advantage of using Composer is that it allows us to quickly install and update dependencies by simply running a few commands from a terminal window.


> **MAC** users will need to follow the installation directions found at [https://getcomposer.org/download/](https://getcomposer.org/download/). Take a look at the **Getting Started** documentation that corresponds to OSX.  Once Composer is locally installed, follow these [directions](https://getcomposer.org/doc/00-intro.md#globally) to make Composer globally accessible our operating system.

> **Windows** users can skip manually installing Composer, Acquia Dev Desktop installs it as part of the setup within the tools folder.

To verify Composer is working we should be able to open a terminal window and enter the following command to see a list of the available Composer commands:

```
  composer
```

> **Windows** users: If you receive a `Could not open input file: composer.phar` error, you will need to make an edit to the `composer.bat` file installed with Acquia Dev Desktop.  You will need to have administrative rights to the folder and file.  This file is located in the Acquia Dev Desktop tools folder (e.g., C:\ProgramFiles\DevDesktop\tools\composer.bat ) .  Based on your Windows version this path may vary.
>
> Open `composer.bat` in a text editor and add double quotes around the path to PHP, making sure to change the version of php to 7_0, and add double quotes around the path to `composer.phar` and include the full path to it.  Example:
>
> **@SET PATH=C:\Program Files\DevDesktop\php5_4;%PATH%php.exe composer.phar %***
>
> would become
>
> **@SET PATH="C:\Program Files\DevDesktop\php7_0";%PATH%php.exe** **“****C:\Program Files\DevDesktop\tools\composer.phar****”** **%***
>
> Save the file and then open the console from within Acquia Dev Desktop.  You can now run the `composer` command within the console window to see a list of available Composer commands.

### Node & NPM
[Node](https://nodejs.org/en/) is a cross platform runtime environment for creating server side and networking applications. Javascript running outside the browser. [NPM](https://www.npmjs.com/) is the package manager for JavaScript used to install, share, and distribute code and is used to manage dependencies in projects.

> We will be using NPM to manage dependencies when working with themes in Drupal 8.

We can install `Node JS` and `NPM` globally by following the directions on the [download](https://nodejs.org/en/download/) page and using one of the current LTS installers for our current operating system.  Installing `Node JS` will automatically install `NPM` as well.

We can validate that both are installed by running the following commands in the terminal window:

```
  node -v
  npm -v
```

### Grunt
[Grunt](https://gruntjs.com/) is a JavaScript task runner that allows us to perform repetitive tasks like minification, compilation, unit testing, linting and more. We use `Grunt` to compile Sass, Pattern Lab and watch for file changes during development.

We can use `npm` to globally install `grunt` by using the following command in the terminal window:

```
  npm install -g grunt-cli
```

### Git
[Git](https://git-scm.com/) is probably the most popular open source software available to manage source code. Git allows us to distribute code to ourselves or other developers and provides a robust mechanism for tracking changes, creating branches, and staging changes to software, or in our case, web projects.

We can install `Git` by following the directions on the [download](https://git-scm.com/downloads) page and using on the installers for our current operating system.

> **Windows** users: select the option to enable symlinks during installation of Git.

We can validate that `Git` is installed properly by running the following command in the terminal window:

```
  which git
```

> Git for Windows provides a BASH emulation used to run Git from the command line. `*NIX` users should feel right at home, as the BASH emulation behaves just like the `git` command in LINUX and UNIX environments.

### Cloning the training files
Now that we have all the necessary requirements out of the way we can proceed to cloning a copy of the training files located within the Master branch. We will be using the `Terminal` window and `Git` during different exercises to make sure everyone is at the same starting point.

Begin by opening a terminal window and navigating to a location on our laptop where we will be working from. The location does not matter but for sake of demonstration, I will be using a folder called **Sandbox**. To change into this directory we will enter the following command within the terminal window:

```
  cd Sandbox
```

Now that we have changed into the Sandbox directory we can clone the Master branch by entering the following command within the terminal window:

```
  git clone https://github.com/forumone/component-based-theming.git
```

To verify that our newly cloned folder exists we can enter the following command within the terminal window to list the contents of our Sandbox:

```
  ls
```

> **Windows** users: If you’re not using Git Bash you may need to use the `dir` command instead of `ls`.

Finally we will want to change into the component-based-theming folder by entering the following command within the terminal window:

```
  cd component-based-theming
```

## Using Composer to install Drupal
Currently we have the skeleton of a Drupal 8 project.  The main reason for using a Composer based workflow recommended by Drupal is to ensure that our codebase or repository contains minimal artifacts or files.  In fact if we take a quick look at the folder structure we will see the following:

- **config/sync** : Configuration files that we can use to manage Drupal instances
- **db** : Database snapshots that we will use throughout the training
- **drush**: A command line tool we will use to clear cache and other tasks with Drupal
- **scripts/composer**: Composer scripts that run to automate various tasks
- **web**: Drupal’s web root where we will find all it’s files including the Theme directory

Also if we look we will see a file called `composer.json` which is often referred to as a package.  The `composer.json` file allows us to manage Drupal core, Modules and dependencies, patches that a module may need and various other settings.  It is the `composer.json` file that allows us to distribute a Drupal project to team members that will ensure every Drupal instance is identical.

To complete the scaffolding of our Drupal 8 project we will need to open a terminal window and run the following command:

```
  composer install
```

Once composer is done running, we now have a fully installed Drupal 8 project.

> **Windows** users:  filenames in Windows can only be so long, so if you hit an error regarding ‘invalid_module_name_over_the_maximum_allowed_character_length’, you will want to move your Sandbox folder to a lower level directory (e.g., C:\Sandbox).

## Importing our project into Acquia Dev Desktop
Now that we have a Drupal 8 project we can use Acquia Dev Desktop to import an existing Drupal 8 site into our self-contained environment by following these steps:

**Step One**
Open Acquia Dev Desktop

- Select the + sign located in the bottom left of the UI
- Select **Import local Drupal site.**

**Step Two**
Complete the following fields to import our Drupal instance:

- Local codebase folder: This should point to the `/web` root of our cloned project
- Local site name: **pwc**
- Use PHP**: 7.0.14 or higher**
- Database: Start with MySQL database dump file
- Dump file: Browse to the `/db` folder within our cloned project and select `pwc.sql`
- Select the OK button
- Select Yes from the Warning dialog box

> You may be prompted to enter your admin credentials to complete the process.

**Step Three**
We can now preview our Drupal 8 website by either selecting the URL next to Local site within Acquia Dev Desktop or by opening a browser and navigating to http://pwc.dd:8083/user and logging in with the following credentials:

- username: **admin**
- password: **admin**

## Congratulations
We now have a Drupal 8 project titled Pacific Whale Conservancy that we will be using throughout the remaining training.  This Drupal 8 instance is configured with the latest best practices in mind for site building.  This includes use of the Media module, Paragraphs, various Twig modules and the Component and UI Libraries modules.

This training does not cover site building but we will briefly discuss various decision made when implementing a component-based theme using Twig and Pattern Lab.
