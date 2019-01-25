# Components Variations

Components variations are new instances of a component with small or big changes in look/feel from the original component. Variations are great ways to use an existing component and extend the way it looks or behaves. More on [components variations here](http://bradfrost.com/blog/post/pattern-variations/).

Based on our prototype, we have at least two types of buttons. One with red outline and one with white outline. Text color and background color on hover is also different between the two. We will write the required styles for each button, but we will relay on KSS Node to make variations for us. This is a huge advantage of using tools like KSS Node because it does all the heavy lifting for us. Without KSS Node we would need to create a new version of the button component which would require we duplicate a lot of the code we already wrote, but KSS Node takes the code we already wrote and extends it for the new variation therefore avoiding repeating code. Let's take a look at how this works.

* Let's start by updating the **button.scss** file like this \(Commented area only\):

```css
// Button
//
// This is the button component.
//
// Markup: button.twig
//
// .button--primary - A red version of button.
//
// Classes: kss-bg-dark
//
// Style guide: Components.Button

// Import site utilities.
@import '../../global/utils/init';

.button {
  background-color: $color-black;
  border: 2px solid $color-tundora;
  border-radius: 44px;
  color: $color-white;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px;
  text-decoration: none;
  transition: border 0.125s ease, background-color 0.125s ease;
  white-space: nowrap;

  &:hover,
  &:focus {
    border-color: $color-white;
  }
}
```

Notice at the top of the file above \(commented section\), we added a new line: `// .button--primary - A red version of button.`

What we are doing here is telling KSS Node that we want a new component variation with the class of `.button--primary`. The button--primary will inherit all the attributes and styles from the `.button` component and will create a new variation with the classes `.button .button--primary`.

```css
// Button
//
// This is the button component.
//
// Markup: button.twig
//
// .button--primary - A red version of button.
//
// Classes: kss-bg-dark
//
// Style guide: Components.Button

// Import site utilities.
@import '../../global/utils/init';

.button {
  background: $color-black;
  border: 2px solid $color-tundora;
  border-radius: 44px;
  color: $color-white;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  padding: 14px 40px;
  text-decoration: none;
  transition: border 0.125s ease, background-color 0.125s ease;
  white-space: nowrap;

  &:hover,
  &:focus {
    border-color: $color-white;
  }

  // Updates color and other styles for primary button.
  &.button--primary {
    border-color: $color-bright-red;
​
    &:hover,
    &:focus {
      background: $color-bright-red;
    }
  }
}
```

The new code starts at line **36** \(`&.button--primary`\). This means **.button** and **.button--primary** classes will be together \(i.e. `<a class="button button--primary">...</a>`\), and when they do we are changing background, text and border color to red.

Before we can see the new variation in action, we need to let twig know that there may be times when this component will accept a modifier class to create variations.

```text
{% if button.url %}
  <a href="{{ button.url }}" class="button {{ modifier_class }}{{ classes|default('') }}">
    {{ button.text }}
  </a>
{% else %}
  <button
    type="{{ button.type|default('submit') }}"
    class="button {{ modifier_class }}{{ classes|default('') }}">
    {{ button.text }}
  </button>
{% endif %}
```

Notice we added the `{{ modifier_class }}` variable placeholder within the class attribute. This instructs KSS Node to capture the new class we provided in **button.scss** and place append it to the classes the button already has.

The `{{ modifier_class }}` tag is only for style-guide purposes. It has no effect when we render the component in Drupal. For Drupal we have added `{{ classes|default('') }}.`

## Compiling the style-guide

Now that we have written all the necessary code to create a variation of the Button component, it's time to see the component in the style-guide. Let's compile our project first.

* In your terminal or command line, navigate to `/themes/custom/nitflex_dev_theme` and run the following command:

```bash
lando npm run build
```

## Viewing the Button component

Open your Drupal site and point to the URL below

```text
http://nitflex.lndo.site:8000/themes/custom/nitflex_dev_theme/dist/style-guide/
```

_Depending on your setup, you may not need to enter ":8000". Also if you did not use the provided Lando setup, ensure you are using your own custom URL_.

Under the Components category you should see the new Button component, but this time you will notice there are two components. The second one is the variation we just created.

If you inspect the code, you will see that in addition to the class `button`, the new variation also has the class of `button--primary`.

