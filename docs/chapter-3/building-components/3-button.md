# Button

So you get the idea, inside the Components directory we create a new directory that matches the name of the component we want to create and then create a few files inside that directory. Let's repeat this process for the Button component.

1. Inside **nitflex\_dev\_theme/src/components/** create a new directory called **button**.
2. Inside the button directory create a new file called **button.json**.
3. Inside `button.json` copy the following code:

```yaml
button:
  modifier: ~
  text: "Watch now"
  type: ~
  url: "#"
```

4. Inside the button directory create a new file called **button.twig**.
5. Inside `button.twig` copy the following code:

```php
{% if button.url %}
  <a href="{{ button.url }}" class="button">
    {{ button.text }}
  </a>
{% else %}
  <button
    type="{{ button.type|default('submit') }}"
    class="button">
    {{ button.text }}
  </button>
{% endif %}
```

We've added some logic to the button to ensure we render the right HTML element based on the data we receive. For example, if a URL is passed, we use a `<a>` with the class of **button**, otherwise we use a `<button>` tag. This is important in many ways; we always want to make sure we use proper semantic markup for accessibility and for the task at hand. A &lt;a&gt; tag will allow us to be directed to another page or a section within the same page, whereas a button will allow us to perform an action such as submit content or anything else where a click event is needed.

1. Inside the button directory create a new file called **button.scss**.+
2. Inside `button.scss` copy the following code:

```scss
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

## Compiling the style-guide

Now that we have written all the necessary code to build the Button component, it's time to see the component in the style-guide. Let's compile our project first.

* In your terminal or command line, navigate to `/themes/custom/nitflex_dev_theme` and run the following command:

```bash
lando npm run build
```

## Viewing the Button component

Open your Drupal site and point to the URL below:

```text
http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/public/
```

_Depending on your setup, you may not need to enter ":8000". Also if you did not use the provided Lando setup, ensure you are using your own custom URL._

Under the Components category you should see the new Button component.
