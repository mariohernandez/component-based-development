# Component-based Development with Drupal 8

## Building Components
This training is broken down in three parts:  Building Components, Preparing Drupal for Components, and finally, Integrating components with Drupal.

### Generating the styleguide
Before we can build components, we need to generate a living styleguide to host our components.  For the purpose of this training, we will use [KSS Node](https://github.com/kss-node/kss-node) to build our living styleguide.  KSS Node is a methodology for documenting CSS and generating style guides.  Lucky for us, Mediacurrent's theme generator already provides KSS Node fully integrated with our new Drupal theme.

If you arelady created a new theme or used the provided `component_training` theme, and compiled the theme, you already have a styleguide in place.  You can view the styleguide by going `http://d8.local/themes/custom/component_training/dist/style-guide/index.html`.  Feel free to take a look around the styleguide, but we will get into it in more detail as the training progresses.

### Creating our first component
Inside the `component_training` folder do one of these two things:
1. If you are using the theme generator:
  * Run `npx -p yo -p generator-mc-d8-theme -c 'yo mc-d8-theme:component "Card"'`

A new component (Card), will be created inside `/src/components/`.  Inside the Card component you will notice 3 files: `card.json`, `card.scss`, and `card.twig`.

2. If you are NOT using the theme generator,  you can create your components by hand.
  * Inside `src/components/` create a new folder called `card`
  * Inside the `card` folder, create the 3 files listed above (`card.json`,`card.scss`, and `card.twig`).
