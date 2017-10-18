# Component-based Development with Drupal 8

## 1 - Building Components
This training is broken down in three parts:  Building Components, Preparing Drupal for Components, and finally, Integrating components with Drupal.

### 1.1 - Generating the styleguide
Before we can build components, we need to generate a living styleguide to host our components.  For the purpose of this training, we will use [KSS Node](https://github.com/kss-node/kss-node) to build our living styleguide.  KSS Node is a methodology for documenting CSS and generating styleguides.  Fortunately, Mediacurrent's theme generator already provides KSS Node fully integrated with our new Drupal theme.

If you already created a new theme or used the provided `badcamp` theme, and compiled the theme, you already have a styleguide in place.  You can view the styleguide by going `http://your-local/themes/custom/badcamp/dist/style-guide/`.  Feel free to take a look around the styleguide, we will get into it in more detail as the training progresses.

## 1.2 Creating a basic component (Eyebrow)

Before we dive into the more advance stuff, let's start by creating a super simple component.  The component name is **Eyebrow** and this is a component you would normally use to label or categorize content.

A typical component would have 3 files: `component-name.json`, `component-name.scss`, and `component-name.twig`.  Later we will use Mediacurrent's theme generator to build our components but for the purpose of understanding things better, let's crete the Eyebrow component by hand

* Inside **/themes/custom/badcamp/src/components/** create a new directory called **eyebrow**, then create the files we mentioned above, but use `eyebrow` as the component name.  So you shoud end up with `eyebrow.json`, `eyebrow.scss`, and `eyebrow.twig`.

* Inside `eyebrow.json` copy the following code:

```
{
  "eyebrow": "Community Lead",
  "class": ""
}
```

We just created a JSON object with a variable of **eyebrow** and value of **Community Lead**.  We will get deeper into JSON objects when we build more advance components.

The **class** variable above is a placeholder so we can pass a modifier class when we make use of this component.  Modifier classes allow us to create variations of components without havign to recreate the component again.  These classes are used by CSS to make changes to the look and feel of a component.  More on this later.


* Inside `eyebrow.twig` copy the following code:

```
<h3 class="eyebrow">{{ eyebrow }}</h3>
```

The twig template allows us to write the markup we deem most appropriate for our components.  In addition, we are passing data from the JSON object into Twig.

* Inside `eyebrow.scss` copy this code:

```
// Eyebrow
//
// This is the eyebrow component.
//
// Markup: eyebrow.twig
//
// Style guide: Components.eyebrow

// Import site utilities.
@import '../../global/utils/init';

.eyebrow {
  border-bottom: 2px solid #DAA520;
  color: $color-gold;
  display: inline-block;
  font-size: 0.9rem;
  letter-spacing: 0.15rem;
  line-height: 1;
  text-transform: uppercase;
  padding-bottom: 2px;
  white-space: nowrap;
}
```

Above are the styles that give the Eyebrow component a more appealing look.  Notice the commented code at the top of the file.  Those comments are what KSS Node uses to generate the component in the styleguide.  In fact, let's compile the styleguide now to see the outcome of our component.

* Inside `badcamp`, run this command

```
npm run styleguide
```

Now let's take a look at the styleguide by going

```
http://your-local/themes/custom/badcamp/dist/style-guide/
```


---
Previous exercise:  [Create a new theme](1-new-theme.md)


Next exercise:  [Building more components](3-building-components.md)
