# Component-based Development with Drupal 8

## 1 - Building Components
This training is broken down in three parts:  Building Components, Preparing Drupal for Components, and finally, Integrating components with Drupal.

### 1.1 - Generating the styleguide
Before we can build components, we need to generate a living styleguide to host our components.  For the purpose of this training, we will use [KSS Node](https://github.com/kss-node/kss-node) to build our living styleguide.  KSS Node is a methodology for documenting CSS and generating style guides.  Lucky for us, Mediacurrent's theme generator already provides KSS Node fully integrated with our new Drupal theme.

If you already created a new theme or used the provided `badcamp` theme, and compiled the theme, you already have a styleguide in place.  You can view the styleguide by going `http://your-local/themes/custom/badcamp/dist/style-guide/`.  Feel free to take a look around the styleguide, we will get into it in more detail as the training progresses.

### 1.2 - Creating our first component (Speaker)
Inside the `badcamp` folder do one of these two things:
1. If you are using the theme generator:
   * Run `npx -p yo -p generator-mc-d8-theme -c 'yo mc-d8-theme:component "Speaker"'`

A new component, **speaker**, will be created inside `/src/components/`.  Inside the **speaker** component you will notice 3 files: `speaker.json`, `speaker.scss`, and `speaker.twig`.  We will go over these files in more detail later.

2. If you are NOT using the theme generator,  you can create your components by hand.
   * Inside `src/components/` create a new folder called **speaker**.
   * Inside the **speaker** folder, create the 3 files listed above (`speaker.json`,`speaker.scss`, and `speaker.twig`).


### 1.2.1 - Creating data source for our component
In order to see our component in the styleguide, we need to provide stock/dummy content.  Our speaker component looks at the `speaker.json` file for all of its content.  We could actually hard-code our content in the twig template but using **.json** allows us to separate data from presentation.

> **_NOTE_**
> If you used the theme generator to create your **speaker** component, you should notice **speaker.json** already has content.  I'd say copy the code snippet below and replace the current content in the **speaker.json**.  If you did not use the theme generator to create your **speaker** component your **speaker.json** will be empty.  Copy the code below into it.

**speaker.json**
```json
{
  "name": "AmyJune Hineline",
  "image": {
    "src": "http://placehold.it/200x200",
    "alt": "Speaker background image"
  },
  "type": "Community Lead",
  "bio": "I am Drupal Sitebuilder and Community Lead for Hook 42. I have been an active participant in the Drupal community for almost 2 years by contributing to projects and helping with documentation.",
  "items": [
    {
      "icon": "twitter",
      "url": "#"
    },
    {
      "icon": "facebook",
      "url": "#"
    },
    {
      "icon": "instagram",
      "url": "#"
    },
    {
      "icon": "youtube",
      "url": "#"
    }
  ],
  "class": ""
}
```
The code above is a JSON object.  JSON objects are written in `key/value` pairs.  The **key** is a variable we can later pass to Drupal to map data to our component.  More on this later.


### 1.2.2 - Writing Twig Markup
The next step in the process is to write the markup the **speaker** components needs to be rendered.  In addition, we will pass the data from the JSON object we created in the previous step.

**speaker.twig**
```html
{{ attach_library('badcamp/speaker') }}
<article class="speaker {{ class|default('') }}">

  {% if image %}
    <div class="speaker__header">
      <img class="speaker__photo" src="{{ image.src }}" alt="{{ image.alt }}">
    {% if name %}
      <h2 class="speaker__name">{{ name }}</h2>
    {% endif %}
    </div>
  {% endif %}

  {% if type or bio  %}
    <div class="speaker__content">
      {%
        include '@badcamp/eyebrow/eyebrow.twig' with {
          'eyebrow': type,
          'class': 'speaker__eyebrow',
        } only
      %}
      {% if bio %}
        <p class="speaker__bio">{{ bio }}</p>
      {% endif %}
    </div>
  {% endif %}

  {% if items %}
    <div class="speaker__social-icons--wrapper">
      {%
        include '@badcamp/social-icons/social-icons.twig' with {
          'items': items,
          'classes': 'speaker__social-icons',
        } only
      %}
    </div>
  {% endif %}
</article>
```
Using [BEM](https://css-tricks.com/bem-101/) to name our css classes, the speaker component's markup is now in place.  In addition, we are passing the json data using twig syntax.



### 1.2.3 - Writing CSS Styles
The final step in this process is to write the styles to make our component look and feel as shown in our design comps.  Copy all of the code below into your **speaker.scss**

**speaker.scss**
```css
// Speaker
//
// This is the speaker component.
//
// Markup: speaker.twig
//
// Style guide: Components.Speaker

// Import site utilities.
@import '../../global/utils/init';

.speaker {
  border: 1px solid $color-blue;
  max-width: 400px;
  position: relative;
}

.speaker__header {
  background: $color-blue url('../assets/speaker-bg.png') 0 0 no-repeat;
  line-height: 0.8;
  padding: 20px 0;
  position: relative;
}

.speaker__photo {
  border-radius: 50%;
  display: block;
  width: 140px;
  height: 140px;
  margin: 0 auto 20px;
  border: 1px solid $color-gold;
}

.speaker__name {
  @include font-secondary;
  color: $color-white;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.15rem;
  line-height: 1;
  text-align: center;
  width: 100%;
}

.speaker__content {
  margin: 20px;
  min-height: 250px;
  overflow: hidden;
  margin-bottom: 30px;
}

.speaker__eyebrow {
  margin-bottom: 20px;
}

.speaker__social-icons--wrapper {
  background: $color-blue;
  padding: 10px 0;
  height: 45px;
  width: 100%;
  position: absolute;
  bottom: 0;
}

.speaker__social-icons {
  line-height: 1;
  margin: 0 auto;
  justify-content: space-between;
  width: 200px;

  .social-icon--img {
    fill: $color-silver;
  }
}
```

One advantage of component is that because of their unique name within a theme, the CSS styles require little to no nesting.  This makes code more readable and easier to maintain.


### 1.3 - Creating the speaker library
Libraries are the recommended way for adding CSS and JavaScript to pages in Drupal 8.  Although our component is not talking to Drupal yet, we will add the "Speaker" library so it's ready when we need to use it in Drupal.  Also, creating the library now feels natural since we are working with the Speaker component.

* Open your **libraries.yml** file located in your theme (i.e. `badcamp.libraries.yml`).  If your theme name is not badcamp, your libraries.yml file will include your theme's name.

* Since our theme was created using Mediacurrent's Theme Generator, your libraries.yml probably includes examples of how to declare libraries for Drupal to consume.  Take a moment to review the commented code in the libraries file for ideas on how libraries work or visit this page to learn more about [Drupal 8 Libraries](https://www.drupal.org/docs/8/theming-drupal-8/adding-stylesheets-css-and-javascript-js-to-a-drupal-8-theme).

* Add the following code snippet somewhere in your `badcamp.libraries.yml` file to create the Spekaer library

```
speaker:
  css:
    component:
      dist/css/speaker.css: {}
```
 * Since our compiling gulp task compiles all CSS into `dist/css/filename.css`, we are indicating in the Speaker library that any CSS the Speaker component needs will be located in `dist/css/speaker.css`.

 * Should our component need Javascript, we would append to our Speaker library the location of the JavaScript file for our component.

**Example of Speaker library including JavaScript**
```
 speaker:
  css:
    component:
      dist/css/speaker.css: {}
  js:
    js/speaker.js: {}
```


### 1.4 - Compiling Styleguide
Now that the speaker component is finished we need to compile the styleguie.  Run the command below from within the root of your theme (i.e. badcamp).

```
npm run styleguide
```

Let's take a look to make sure our new component looks and behaves as expected

```
http://your-local/themes/custom/badcamp/dist/style-guide/
```

---
Previous exercise:  [New Theme](1-new-theme.md)


Next exercise:  [Prepare Drupal for Integration](3-prepare-drupal.md)





