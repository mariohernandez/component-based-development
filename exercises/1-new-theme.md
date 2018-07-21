# Component-based Development with Drupal 8

## New Drupal 8 Theme
Creating a new Drupal theme or updating an existing one is one of the first things we need to do to begin building components.
In this training we will use [Mediacurrent's Theme Generator](https://github.com/mediacurrent/theme_generator_8) to create a new theme.  Follow the instructions on the theme generator project to get your theme setup.

## Using included theme
Alternatively, you can use the `shiny` theme which is included with this project.
* Copy the `shiny` folder into `docroot/themes/custom/`
* Follow instructions below

### Compiling the theme for first time
After you create your theme, navigate to your new theme's folder (if not already there), and execute the following commands to compile Sass, Javascript and Styleguide.

```
nvm install
```
This command will install the version of nodejs specified in `.nvmrc`, which is a hidden file located in the root of your theme.

```
nvm use
```
After the project's version of NVM has been installed, this command sets your project to use that version.  This is extremely helpful because this ensures everyone in your team uses the same version of nodejs.

```
npm install
```
This command will install all node dependencies specified in `package.json`.

```
npm run build
```
This command builds your styleguide.  You need to run this command when making changes to JSON or Twig.

### Other theme commands
There are other commands we can run if we are only interested in executing a specific task such as Sass compile, JS Compile, Styleguide or assets compressions:

`npm run watch`: Will watch for any Sass and JS changes and will auto compile them.

`npm run compile`: Will compile Sass and JS.

`npm run styleguide`: Will compile only styleguide updates.

`npm run compress`: Will compress image, icons and other assets.


### View Styleguide.

```
http://your-local/themes/custom/shiny/dist/style-guide/
```

[Back to beginning](../README.md)


Next exercise:  [Building a basic component](2-building-components.md)
