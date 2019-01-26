Components variations are new instances of a component with small or big changes. Variations are great ways to use an existing component and extend the way it looks or behaves. [More on components variations here](http://bradfrost.com/blog/post/pattern-variations/).

Based on our prototype, we have at least two different buttons. One with red outline and one with white outline. Text color and background color on hover is also different between the two. We will write the required styles for each button, but we will relay on Pattern Lab to make variations for us. This is a huge advantage of using tools like Pattern Lab because it does all the heavy lifting for us. Without Pattern Lab we would need to create a new version of the button component which would require we duplicate a lot of the code we already wrote, but Pattern Lab takes the code we wrote in the previous exercise and extends it for the new variation. Let's take a look at how this works.

1. Inside the **button** directory create a new file called **button~primary.yml**.  (Notice the "`~`" in the file name).

1. Inside `button~primary.yml` copy the following code:

```yaml
button:
  text: "Primary button"
  url: "#"
  type:
  modifier:
    button--primary
```

## How Pattern Lab handles variations
* Pattern lab use [pseudo patterns](https://patternlab.io/docs/pattern-pseudo-patterns.html) to create component variations.  This is accomplished by creating a new data file (.yml), which name includes the name of the variation we want to create (i.e. `button~primary.yml`).

* You may have noticed the file name we just created uses a tilde symbol (`~`).  This tells Pattern Lab we want a variation with the name **Button Primary**.

* The value for **modifier** is what Pattern Lab uses as the component's modifier class.

* If we wanted another variation for a large button for example, we would create a new `.yml` file with the name of our variation (i.e. `button~large.yml`), and the value for **modifier** would be `button--large`.


## Updating the button styles
Now that we have a new button variaton let's add css styles to it.

* Edit the `button.scss` so the styles look like this:
```scss
.button {
  ...

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

The new code starts at `&.button--primary`.  This means .button and .button--primary classes will be together (i.e. <a class="button button--primary">...</a>), and when they do we are changing background, text and border color to red.
Before we can see the new variation in action, we need to let twig know that there may be times when this component will accept a modifier class to create variations.

* Now let's edit the twig file to look like this:
```php
{% if button.url %}
  <a href="{{ button.url }}" class="button{% if button.modifier %} {{ button.modifier }}{% endif %}">
    {{ button.text }}
  </a>
{% elseif button.type %}
  <input
    type="{{ button.type|default('submit') }}"
    class="button{% if button.modifier %} {{ button.modifier }}{% endif %}">
    {{ button.text }}
  </input>
{% else %}
  <button
    class="button{% if button.modifier %} {{ button.modifier }}{% endif %}">
    {{ button.text }}
  </button>
{% endif %}
```
Notice we added the `{{ modifier }}` variable placeholder within the class attribute. This instructs Pattern Lab to capture the value of **modifier** and append it to the classes the button already has.


## Compiling the code
Now that we have written all the necessary code to build the button' variations, it's time to see the component in the style-guide. Let's compile our project first.

* In your command line, navigate to `/themes/custom/nitflex_dev_theme`.

* Run this command:

```bash
lando npm run build
```

**What does this command do?**

_The command above runs all gulp tasks found inside the gulp-tasks directory in the theme.  Keep in mind, we are using the word **lando** because our local environment was built with lando.  Typically the build command would be **npm run build**._


## Viewing the component
* Open your Drupal site and point to the URL below:
[http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/public/](http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/public/)

  Under the Components category you should see the new Heading component.
