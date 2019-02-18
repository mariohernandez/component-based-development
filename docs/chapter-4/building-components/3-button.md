# Button

So you get the idea, inside the **01-components** directory we create a new directory that matches the name of the component we want to create and then create a few files inside that directory. Let's repeat this process for the Button component.

## Component's data

1. Inside `nitflex_dev_theme/src/_patterns/01-components/` create a new directory called **button**.
2. Inside the _button_ directory create a new file called **button.yml**.
3. Inside _button.yml_ add the following code:

```yaml
button:
  modifier:
  text: "Watch now"
  type:
  url: "#"
```

We just created an object for the button with key/value **text**, **url**, **type**, and **modifier**.

1. Inside the **button** directory create a new file called **button.twig**.
2. Inside `button.twig` add the following code:

```php
{% if button.url %}
  <a href="{{ button.url }}" class="button">
    {{ button.text }}
  </a>
{% elseif button.type %}
  <input
    type="{{ button.type|default('submit') }}"
    class="button"
    value="{{ button.text }}" />
{% else %}
  <button
    class="button">
    {{ button.text }}
  </button>
{% endif %}
```

We've added some logic to the button to ensure we render the right HTML element based on the data we receive. For example, if an URL is passed, we use an `<a>` with the class of **button**. If we have a value for **type** we render an `<input>` element and pass the type provided, otherwise we use a `<button>` tag. This is important in many ways; we always want to make sure we use proper semantic markup for accessibility and for the task at hand. An `<a>` tag will allow us to be directed to another page or a section within the same page, whereas a `<button>` or `<input>` element will allow us to perform an action such as submit content.

1. Inside the **button** directory create a new file called **button.scss**.
2. Inside `button.scss` add this code:

```scss
// Import site utilities
@import '../../00-global/utils/init';

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

## Compiling the code

Now that we have written all the necessary code to build the component, it's time to see the component in the style-guide. Let's compile our project first.

* In your command line, navigate to `/themes/custom/nitflex_dev_theme`.
* Run this command:

```bash
lando npm run build && lando php patternlab/core/console --generate
```

**What does this command do?**

_The command above runs all gulp tasks found inside the gulp-tasks directory in the theme. Keep in mind, we are using the word **lando** because our local environment was built with lando. Typically the build command would be **npm run build**._

## Viewing the component

* Open your Drupal site and point to the URL below: [http://nitflex.lndo.site/themes/custom/nitflex\_dev\_theme/public/](http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/public/)

  Under the Components category you should see the new Heading component.
