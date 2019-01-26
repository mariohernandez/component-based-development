Now that we have some basic idea of the various pieces for building a component, let's build another one which will follow the same process as Eyebrow, but it includes logic and conditions.

## Component's data
1. Inside `nitflex_dev_theme/src/components`/ create a new directory called **heading**.

2. Inside the _heading_ directory create a new file called **heading.yml**.

3. Inside _heading.yml_ copy the following code:

```yaml
title: "DrupalCon Seattle 2019"
```

We just created key/value pair for the heading with a key of **title** and **value** of _DrupalCon Seattle 2019_.


1. Inside the **heading** directory create a new file called **heading.twig**.

1. Inside `heading.twig` copy the following code:
```php
<h1 class="heading">{{ title }}</h1>
```
We created a **h1** heading in which we pass the value of title from the YAML file.

1. Inside the **heading** directory create a new file called **heading.scss**.

1. Inside `heading.scss` copy this code:
```scss
// Import site utilities.
@import '../../global/utils/init';

.heading {
  font-weight: bold;
  line-height: 1.3;
}
```

## Improving the heading component
The heading component looks good and it will work great as long as we always want to use a H1. However, the component is pretty static and it does not offer much flexibility. What if we wanted to use a h2 or h3, etc.? Then the heading component would probably not work because we have no way of changing the heading level from h1 to any other level.
Let's re-work the heading component so we make it more dynamic and we have the ability to choose a different heading level when is time to use it.

### Update `heading.yml` to look like this:
```yaml
heading:
  title: "DrupalCon Seattle 2019"
  url: "#"
  heading_level:
  modifier:
```
We just created an object for the button with key/value **title**, **url**, **heading_level**, and **modifier**.

* The **url** key, if present, will allow us to wrap the title in an `<a>` tag, otherwise the title will be printed as plain text.
* The **heading_level** is something we will use later as we start nesting the heading component into other components. This will allows us to change the headings from say h1 to h2 if we need to.
* Finally, the **modifier** key allows us to pass a modifier CSS class when we make use of this component. The modifier class will make it possible for us to style the heading differently.

### Update the twig code to look like this:

```php
<h{{ heading.heading_level|default('2') }} class="heading {{ heading.modifier ? ' ' ~ heading.modifier }}
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

* We've assigned a default value of 2 (h2) to the heading level variable. This value can be changed per use case if needed.
* We are passing the `modifier` variable so we can apply custom css modifier when we use the heading.
* In addition, we are preparing for when we integrate this component with Drupal by applying the attributes array which will provide us with Drupal's specific functionality. More on this later.
* Finally, as previously mentioned, if a url is present when populating the heading field, we wrap the title in a `<a>` tag, otherwise print the title as plain text.

## Compiling the code
Now that we have written all the necessary code to build the component, it's time to see the component in the style-guide. Let's compile our project first.

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
