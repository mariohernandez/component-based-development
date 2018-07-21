# Component-based Development with Drupal 8

## 1 - Building Components
This training is broken down in three parts:  Building Components, Preparing Drupal for Components, and finally, Integrating components with Drupal.

### 1.1 - Generating the styleguide
Before we can build components, we need to generate a living styleguide to host our components.  For the purpose of this training, we will use [KSS Node](https://github.com/kss-node/kss-node) to build our living styleguide.  KSS Node is a methodology for documenting CSS and generating styleguides.  Fortunately, Mediacurrent's theme generator already provides KSS Node fully integrated with our new Drupal theme.

If you already created a new theme or used the provided `shiny` theme, and compiled the theme, you already have a styleguide in place.  You can view the styleguide by going `http://your-local/themes/custom/shiny/dist/style-guide/`.  Feel free to take a look around the styleguide, we will get into it in more detail as the training progresses.

## 1.2 Creating a basic component (Eyebrow)

Before we dive into the more advanced stuff, let's start by creating a super simple component.  The component name is **Eyebrow** and this is a component you would normally use to label or categorize content.

A typical component would have 3 files: `component-name.json`, `component-name.scss`, and `component-name.twig`.  Later we will use Mediacurrent's theme generator to build our components but for the purpose of better understanding the components concept, let's crete the Eyebrow component by hand


### Component data

1. Inside **/themes/custom/shiny/src/components/** create a new directory called **eyebrow**.

2. Inside `eyebrow/` create a new file called `eyebrow.json`.

3. Inside `eyebrow.json` paste the code snippet below:

```json
{
  "eyebrow": "Community Lead",
  "classes": ""
}
```
**IMPORTANT**:  JSON is very strict about indentation and data format.  Notice how the last item on each group does not have an ending _comma_ (`,`).  Also, the very last item in the entire object does not have an endin comma.


We just created a JSON object with a key of **eyebrow** and value of **Community Lead**.  We will get deeper into JSON objects when we build more advanced components.

The **classes** variable above is a placeholder so we can pass a modifier class when we make use of this component.  Modifier classes allow us to create variations of components without havign to recreate the component and repeat ourselves.  These classes are used by CSS to make changes to the look and feel of a component.  More on this later.


### Component markup

1. Inside `eyebrow/` create a new file called `eyebrow.twig`.

2. Inside `eyebrow.twig` paste the code snippet below:

```
<p class="eyebrow {{ classes|default('') }}">{{ eyebrow }}</p>
```

The twig template allows us to write the markup we deem most appropriate for our components.  In addition, we are passing data from the JSON object into Twig.

Notice the ``{{ classes }}`` placeholder?  This will allow us to pass any css class we want when we nest this component with others.  If no class is passed, the placeholder defaults to empty.  More on this later.


### Component styles

1. Inside `eyebrow/` create a new file called `eyebrow.scss`.

2. Inside `eyebrow.scss` paste the code snippet below:


```scss
// Eyebrow
//
// This is the eyebrow component.
//
// Markup: eyebrow.twig
//
// Style guide: Components.Eyebrow

// Import site utilities.
@import '../../global/utils/init';

.eyebrow {
  border-bottom: 2px solid #DAA520;
  color: #DAA520;
  display: inline-block;
  font-size: 0.9rem;
  letter-spacing: 0.15rem;
  line-height: 1;
  text-transform: uppercase;
  padding-bottom: 2px;
  white-space: nowrap;
}
```

Above are the styles that give the Eyebrow component a more appealing look.  Notice the commented code at the top of the file (code that starts with `//`).  Those comments are what KSS Node uses to generate the component in the styleguide.  In fact, let's compile the styleguide now to see the eyebrow component in action.

### Compiling styleguide

1. Inside `shiny`, run this command

```
npm run build
```

2. Now let's take a look at the styleguide by going

```
http://your-local/themes/custom/shiny/dist/style-guide/
```

3. Expand the **Components** category on the styleguide located on the left side of the screen and you shouls see among others, the Eyebrow component.


---
Previous exercise:  [Create a new theme](1-new-theme.md)


Next exercise:  [Building more components](3-building-components.md)
