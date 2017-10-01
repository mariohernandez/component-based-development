# Component Based Development in Drupal 8
The component based development training focuses on 3 areas:
1. Building components in Twig using a living styleguide.
2. Prepping Drupal environment for component integration.
3. Integrate components with Drupal.

These three areas are covered in my blog series "[Integrating Components with Drupal](https://www.mediacurrent.com/blog/integrating-components-drupal-8-part-1)".
The training will use many of the techniques and approaches on the blog series with updates based on latest best practices.

## Local environment setup

Your local environment needs to be configured with the tools below to be able to follow along.  Please ensure your environment is fully configured prior to starting the training to make our time more productive.
**NOTE**:  Help with your local environment setup will be extremely limited.

### Tools
The insturctions provided with each tool are optional but recommended.  Feel free to improvise.
* Laptop computer (mac preferred)
* [Homebrew](https://brew.sh/): Package manager for OSx (optional)
* [NodeJS](https://nodejs.org/en/): For plugins and development tools
* [NPM](https://www.npmjs.com/):  To manage node dependencies/packages
* [Gulp](https://gulpjs.com/): To automate many of the development taks we will perform
 regularly.
[NVM](https://github.com/creationix/nvm): To manage version of Node across projects.
* [Mediacurrent's theme generator](https://github.com/mediacurrent/theme_generator_8).  We will install this during the training to generate a new base theme.

### Disable Drupal 8 Caching & enable Twig Debugging
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
(_Steps 2 and 3 only need to run once_)

1. Navigate to `docroot/themes/custom/theme-name`

2. Run `npm install` to install all theme plugins and dependencies

3. Run `nvm install` to install version of node located in `.nvmrc`

4. Run `npm run build` to fully compile all theme's code


### Other commands you can run
```
npm run compile
```

```
npm run watch
```

```
npm run styleguide
```

```
npm run compress
```

#### Theme
If you are having difficulties configuring or getting the Mediacurrent theme generator
you can grab the `badcamp` theme in this repo and save it in `docroot/themes/custom/`.
<!-- ![Featured Sponsors Component](/badcamp.png "Featured Sponsors Component") -->


#### Styleguide
To view the styleguide navigate to `http://your-local/themes/custom/theme-name/dist/style-guide/`
