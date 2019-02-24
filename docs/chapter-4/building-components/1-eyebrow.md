# Eyebrow

Before we dive into the more advance stuff, let's start by creating a super simple component. The component name is **Eyebrow**, and this is a component you would normally use to label or tag content, or to print a simple line of plain text.

## Component's data

1. Inside `nitflex_dev_theme/src/_patterns/01-patterns/` create a new directory called **eyebrow**.
2. Inside the _eyebrow_ directory create a new file called **eyebrow.yml**.
3. Inside _eyebrow.yml_ add the following code:

```yaml
text: "Action and Adventure"
```

We just created a key/value pair in YAML format. This will serve as the Eyebrow's data or stock content.

## Component's markup

1. Inside the _eyebrow_ directory create a new file called **eyebrow.twig**.
2. Inside _eyebrow.twig_ add the following code:

```php
<p class="eyebrow">{{ text }}</p>
```

With Twig we not only write the custom markup we need, but we are also able to pass data from the YAML file we created above. Although we can technically write the data directly in the twig template, it is best to use YAML as the source of data. This will prove helpful once we start nesting and integrating components. More on this later.

## Component's styles

1. Inside the _eyebrow_ directory create a new file called **eyebrow.scss**.
2. Inside _eyebrow.scss_ add this code:

```css
// Import site utilities
@import '../../00-global/utils/init';
​
.eyebrow {
  display: inline-block;
  letter-spacing: 0.15rem;
  line-height: 1;
  text-transform: uppercase;
  white-space: nowrap;
}
```

## Compiling the code

Now that we have written all the necessary code to build the component, it's time to see the component in the style-guide. Let's compile our project first.

* In your command line, navigate to `/themes/custom/nitflex_dev_theme`.
* Run this command:

```bash
lando npm run build && lando php patternlab/core/console --generate
```

**What does this command do?**

_The command above runs all gulp tasks found inside the gulp-tasks directory. Keep in mind, we are using the word **lando** because our local environment was built with lando. Typically the build command would be **npm run build**. In addition,_ `lando php patternlab/core/console --generate` _compiles the style-guide so the component we just built can be visible in Pattern lab._

## Viewing the component

* Open your Drupal site and point to the URL below:

  [http://nitflex.lndo.site/themes/custom/nitflex\_dev\_theme/dist/style-guide/](http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/public/)

Under the Components category you should see the new Eyebrow component.

