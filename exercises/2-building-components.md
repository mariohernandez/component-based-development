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


#### 1.2.1 - Creating data source for our component
In order to see our component in the styleguide, we need to provide stock/dummy content.  Our speaker component looks at the `speaker.json` file for all of its content.  We could actually hard-code our content in the twig template but using **.json** allows us to separate data from presentation.

> **_NOTE_**
> If you used the theme generator to create your **speaker** component, you should notice **speaker.json** already has content.  I'd say copy the code snippet below and replace the current content in the **speaker.json**.  If you did not use the theme generator to create your **speaker** component your **speaker.json** will be empty.  Copy the code below into it.

**speaker.json**
```json
{
  "image": {
    "src": "http://placehold.it/400x300",
    "alt": "Component alt text"
  },
  "title": "Title for our component",
  "teaser": "Maecenas sed diam eget risus varius blandit sit amet non magna. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
  "cta": {
    "text": "Learn more",
    "url": "#"
  }
}
```
The code above is a JSON object.  JSON objects are written in `key/value` pairs.  The **key** is a variable we can later pass to Drupal to map data to our component.  More on this later.


#### 1.2.2 - Writing Twig Markup
The next step in the process is to write the markup the **speaker** components needs to be rendered.  In addition, we will pass the data from the JSON object we created in the previous step.

**speaker.twig**
```html
<article class="speaker {{ class='default('') }}">
  <div class="speaker__image">
    <img src="{{ image.src }}" alt="{{ image.alt }}">
  </div>
  <div class="speaker__title">{{ title }}</div>
  <div class="speaker__teaser">{{ teaser }}</div>
  <div class="speaker__cta">
    <a class="cta__cta--link" href="{{ cta.url }}">{{ cta.text }}</a>
  </div>
</article>
```
Using [BEM](https://css-tricks.com/bem-101/) to name our css classes, the speaker component's markup is now in place.  In addition, we are passing the json data using twig syntax.



#### 1.2.3 - Writing CSS Styles
The final step in this process is to write the styles to make our component look and feel as shown in our design comps.

**speaker.twig**
```css
.speaker {
  border: 1px solid #333;
}
```

#### 1.2.4 - Compiling Styleguide
Now that the speaker component is finished we need to compile the styleguie.

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





