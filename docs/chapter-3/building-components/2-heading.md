# Heading

Now that we have some basic idea of the various pieces for building a component, let's build another one which will follow the same principles as **Eyebrow**, but it includes logic and conditions.

1. Inside **nitflex\_dev\_theme/src/components/** create a new directory called **heading**.
2. Inside the **heading** directory create a new file called **heading.json**.
3. Inside `heading.json` copy the following code:

```yaml
{
  "title": "I love movies"
}
```

We just created a JSON object for the heading with a key of **title** and value of **I love movies**.

1. Inside the heading directory create a new file called **heading.twig**.
2. Inside `heading.twig` copy the following code:

```php
<h1 class="heading">{{ title }}</h1>
```

We created a **H1** heading in which we pass the value of `title` from the JSON object.

1. Inside the heading directory create a new file called **heading.scss**.
2. Inside `heading.scss` copy this code:

{% code-tabs %}
{% code-tabs-item title="heading.scss" %}
```scss
// Heading
//
// This is the heading component.
//
// Markup: heading.twig
//
// Style guide: Components.Heading

// Import site utilities.
@import '../../global/utils/init';

.heading {
  font-weight: bold;
  line-height: 1.3;
}
```

Just like we did with the Eyebrow component, the comments in the SCSS file allows KSS Node to create this component in the style-guide.

## Improving the heading component

The heading component looks good and it will work great as long as we always want to use a H1. However, the component is pretty static and it does not offer much flexibility. What if we wanted to use a h2 or h3, etc.? Then the heading component would probably not work because we have no way of changing the heading level from h1 to any other level.

Let's rework the heading component so we make it more dynamic and we have the ability to choose a different heading level when is time to use it.

### Rewriting the JSON object  <a id="rewriting-the-json-object"></a>

Update `heading.json` to look like this:

```yaml
{
  "heading": {
    "title": "I love movies",
    "url": "#",
    "heading_level": "",
    "classes": ""
  }
}
```

In addition to the `title` key, we've added `url`, `heading_level`, and `classes`. These three new keys will make the component more dynamic.

* The **url** key, if present, will allow us to wrap the title in an `<a>` tag, otherwise the title will be printed as plain text.
* The **heading\_level** is something we will use later as we start nesting the heading component into other components. This will allows us to change the headings from say h1 to h2 if we need to. More on this later.
* Finally, the **classes** key is a placeholder so we can pass a modifier CSS class when we make use of this component. The modifier class will make it possible for us to apply different styles to headings.

### Rewriting the Twig code

Update your twig file code to look like this:

```php
<h{{ heading.heading_level|default('2') }} class="heading {{ heading.classes ? ' ' ~ heading.classes }}
  {{- heading.attributes ? heading.attributes.class -}}"
  {{- heading.attributes ? heading.attributes|without(class) -}}>
  {% if heading.url %}
    <a href="{{ heading.url }}">{{ heading.title }}</a>
  {% else %}
    {{ heading.title }}
  {% endif %}
</h{{ heading.heading_level|default('2') }}>
```

Let's break things down to explain what's happening here since the twig code has significantly changed:

* We've assigned a default value of 2 to the heading level variable. This value can be changed per use case if needed.
* We are passing the "classes" variable so we can apply custom css classes when we use the heading.
* In addition, we are preparing for when we integrate this component with Drupal by applying the attributes array which will provide us with Drupal's specific functionality. More on this later.
* Finally, as previously mentioned, if a url is present when populating the heading field, we wrap the title in a `<a>` tag, otherwise print the title as plain text.

## Compiling the code  <a id="compiling-the-code"></a>

Now that we have written all the necessary code to build the Heading component, it's time to see the component in the style-guide. Let's compile our project first.

1. In your command line, navigate to `/themes/custom/nitflex_dev_theme`
2. Run this command:

   ```bash
   lando npm run build
   ```

### What does the command do?  <a id="what-does-the-command-do"></a>

The command above runs all gulp tasks found inside the **gulp-tasks** directory in the theme. Keep in mind, we are using the word **lando** because our local environment was built with lando. Typically the build command would be `npm run build.`

## Viewing the component  <a id="viewing-the-eyebrow-component"></a>

Open your Drupal site and point to the URL below:

```text
http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/dist/style-guide/
```

_Depending on your setup, you may not need to enter ":8000". Also if you did not use the provided Lando setup, ensure you are using your own custom URL._

Under the Components category you should see the new Heading component.
