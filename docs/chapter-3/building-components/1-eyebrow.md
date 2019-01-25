# Eyebrow

Before we dive into the more advance stuff, let's start by creating a super simple component. The component name is **Eyebrow**, and this is a component you would normally use to label or tag content, or to print a simple line of plain text.

## Component's data

1. Inside **nitflex\_dev\_theme/src/components/** create a new directory called **eyebrow**
2. Inside the **eyebrow** directory create a new file called **eyebrow.json**.
3. Inside `eyebrow.json` copy the following code:

```yaml
{
  "text": "Action and Adventure"
}
```

We just created a JSON object with a key of **text** and value of **Action and Adventure**. We will get deeper into JSON objects when we build more advance components.

{% hint style="info" %}
### Things you should know about JSON code format

JSON code format requirements are very specific and strict. Code indentation needs to be consistent, use underscores in multi-word key names instead of hyphens, and ensure the last item does not contain a trailing comma.
{% endhint %}

## Component's markup

1. Inside the **eyebrow** directory create a new file called **eyebrow.twig**.
2. Inside `eyebrow.twig` copy the following code:

```twig
<p class="eyebrow">{{ text }}</p>
```

With Twig we not only write the custom markup we need, but we are also able to pass data from the JSON object we created above. Although we can technically write the data directly in the twig template, it is best to use JSON as the source of data as this will become handy once we start nesting and integrating components. More on this later.

## Component's styles

1. Inside the **eyebrow** directory create a new file called **eyebrow.scss**.
2. Inside `eyebrow.scss` copy this code:

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
​
.eyebrow {
  display: inline-block;
  letter-spacing: 0.15rem;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
}
```

### What are those comments in the SCSS file?

In addition to the component's styles, you may have noticed the commented code at the top of the file. These comments are what KSS Node uses to build the component in the style-guide. You can learn more about how [KSS Node works here](https://github.com/kss-node/kss-node).

### Basics of KSS from file above

* First line of commented code is reserved for the component name, followed by an empty line.
* Next line is a description of the component. This can be as brief or long as you would like and can include plain text as well as html markup. This is followed by an empty line.
* The **Markup** tag accepts a path to a file where the component markup exists \(i.e. eyebrow.twig\), or you can literally write the component markup inline \(i.e. `<p class="eyebrow">Eyebrow text</p>`\). Also followed by an empty line.
* Finally, **Style guide** indicates where in the style-guide page the component will appear. In the example above the component will appear under the **Components** section and it will be labeled as _Eyebrow_. Think of this line as categories for style guide where you can categorize your components \(i.e. components, utils, typography, etc.\).

## Compiling the code

Now that we have written all the necessary code to build the Eyebrow component, it's time to see the component in the style-guide. Let's compile our project first.

1. In your command line, navigate to `/themes/custom/nitflex_dev_theme`
2. Run this command:

   ```bash
   lando npm run build
   ```

### What does the command do?

The command above runs all gulp tasks found inside the **gulp-tasks** directory in the theme. Keep in mind, we are using the word **lando** because our local environment was built with lando. Typically the build command would be `npm run build.`

## Viewing the component  <a id="viewing-the-eyebrow-component"></a>

Open your Drupal site and point to the URL below:

```text
http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/dist/style-guide/
```

_Depending on your setup, you may not need to enter ":8000". Also if you did not use the provided Lando setup, ensure you are using your own custom URL._

Under the Components category you should see the new Eyebrow component.
