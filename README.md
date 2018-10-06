# Component Based Development in Drupal 8
The component based development training is broken down into 2 parts:

1. Building stand-alone components in Twig using KSS Node.

2. Integrating those components with Drupal.

## Local Development Environment Setup 

This repo includes everything you need to set up a [Lando-based](https://docs.devwithlando.io/) local develop environment of Drupal, along with the required front end tools (Node, Gulp, etc.) For best results, follow these steps for completing the setup of your local development environment.

### 1. Install Lando, along wth dependencies (Docker).
Lando is a free, open source, cross-platform, local development environment tool built on Docker container technology. See the documentation [https://docs.devwithlando.io/installation/installing.html](https://docs.devwithlando.io/installation/installing.html)

### 2. Clone this repository to your local system.
`git clone git@github.com:mariohernandez/component-based-development.git`

### 3. After cloning this repo locally, run the following commands from the root level of the repository in your preferred terminal app:
- `lando start`<br />_This will set up Lando, plus install Drupal and required contrib modules._

- `lando drush si -y config_installer --account-name=admin --account-pass=admin --db-url='mysql://drupal8:drupal8@database/drupal8'`<br />_This will do a basic installation of Drupal with some custom configuration._

- `cp -r assets/imgs/. web/sites/default/files/.`<br />_This will copy our sample image assets to the default files directory for your local installation of Drupal._

- `lando db-import drupal8.export.gz`<br />_This will import a custom database that includes placeholder content for the demo site we'll use in the training exercises._

After following these steps, you should have an unstyled site Drupal site available locally at: http://nitflex.lndo.site:8000/.

### Install Front End Tooling
- In your terminal app, navigate to the root level of the `nitflex_dev_theme` (from the root level of the repo run `cd web/themes/custom/nitflex_dev_theme`)
- Run: `lando npm install`. This will install the required front end tools (Node, Gulp, etc.)

### Log into the site and preview preview the final results
- Go to: [http://nitflex.lndo.site:8000/user](http://nitflex.lndo.site:8000/user) and log in with username: `admin`, pw: `admin`.
- Go to: [http://nitflex.lndo.site:8000/admin/appearance](http://nitflex.lndo.site:8000/admin/appearance) and set the default theme to be the **Nitflex** theme. Return to the homepage.
- You should now see a styled version of the site! Switch the site back to the Nitflex **DEV** theme, and let's get crackin' making it look as pretty as the main Nitflex theme! 

**NOTE**:  This is a full class and assistance with your local environment may be limited. We are leveraging Lando to help streamline the setup of a consistent local development environment.

<!--
### Tools

The instructions provided with each tool are optional but recommended.  Feel free to improvise.

* Laptop computer (mac preferred)

* [Homebrew](https://brew.sh/): Package manager for OSx (optional)
 * [NodeJS](https://nodejs.org/en/): For plugins and development tools.  You can [follow these instructions](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x) if you are running MacOS. -->
<!-- * [NPM](https://www.npmjs.com/):  To manage node dependencies/packages -->
<!-- * [Gulp](https://gulpjs.com/): To automate many of the development taks we will perform regularly.  The first command on [these instructions](https://coolestguidesontheplanet.com/installing-gulp-on-osx-10-11-el-capitan/) should get you up and running with Gulp. -->
<!-- * [NVM](https://github.com/creationix/nvm): To manage version of Node across projects. -->
<!-- * [Mediacurrent's theme generator](https://github.com/mediacurrent/theme_generator_8).  We will install this during the training to generate a new base theme. -->

<!-- ### Disable Drupal 8 Caching & enable Twig Debugging
This is necessary to properly debug and inspect twig templates.
* https://www.drupal.org/node/2598914

### Drupal Modules
Install and enable the following modules (including dependencies):
* [Devel and Kint](https://www.drupal.org/project/devel)
* [Paragraphs](https://www.drupal.org/project/paragraphs)
* [Components Libraries](https://www.drupal.org/project/components)
* [UI_Patterns](https://www.drupal.org/project/ui_patterns).  **Do not enable until instructed to**
* [Admin Toolbar](https://www.drupal.org/project/admin_toolbar) (optional)

## Compiling Sass, Javascript and Styleguide
(_First two commands below only need to run once_)

* Navigate to `docroot/themes/custom/shiny` and run the following commands:

```
nvm install
```
This will install the node version declared in `.nvrrc`

```
npm install
```
This will install all theme plugins and dependencies

```
npm run build
```


### Other commands you can run
As you are actively working on your theme, you can run various gulp tasks individually depending on your needs:

```
npm run compile
```
Will compile Sass into CSS


```
npm run watch
```
Will watch for Sass changes and compile them into CSS automatically upon save.


```
npm run styleguide
```
Will rebuild the styleguide.


```
npm run compress
```
Will compress assets to optimize them for web.


#### Theme
If you are having difficulties configuring or getting Mediacurrent's theme generator
you can grab the `shiny` theme in this repo and save it in `docroot/themes/custom/`.


#### Styleguide
To view the styleguide navigate to `http://your-local/themes/custom/shiny/dist/style-guide/` -->
<!-- ### Training Outline

1. [Create new Drupal 8 Theme](exercises/1-new-theme.md)

2. [Building a basic component](exercises/2-building-components.md)

3. [Building Social Icons component](exercises/3-building-components.md)

4. [Building an advanced component](exercises/4-building-components.md)

5. [Preparing Drupal for Component Integration](exercises/5-prepare-drupal.md)

6. [Integrating components with Drupal](exercises/6-integrating-components.md)

7. [Components Variations](exercises/7-components-variations.md)

8. [Integrating Featured Speakers](exercises/8-integrate-featured-speakers.md) (Complete instructions pending)


#### Preview of the Speaker card component

This is an example of the component we will be building and integrating during this training.

![Speaker Card Component](exercises/assets/speaker.png) -->

<!-- ---


First Exercise:  [Create a new theme](exercises/1-new-theme.md) -->

## Workshop exercises:

[Component based development exercises](https://mariohernandez.gitbooks.io/components/content/kss-node/).
