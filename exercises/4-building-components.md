# Component-based Development with Drupal 8

## 1 - Building Components
This training is broken down in three parts:  Building Components, Preparing Drupal for Components, and finally, Integrating components with Drupal.


### 1.1 Creating social media icons component

Let's now build the social media icons component.  Breaking things down into smaller components allows us to make components more reusable.

* Inside the **badcamp/src/components/** directory, create a new directory and call it `social-icons`, then create the following 3 files inside of it: `social-icons.json`, `social-icons.scss`, and `social-icons.twig`.

* Inside `social-icons.json` copy the following code:

```
{
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

We just created a JSON object with an array of icons.  Each icon accepts two parameters, **icon**, which represent the name of the icon/social media channel (twitter, facebook, etc.), and **url**, which is the url to the social media channel for a given person.

* Inside `social-icons.twig` copy the following code:

```php
{% import '@badcamp/icons/icons.twig' as icons %}
{{ attach_library('badcamp/social-icons') }}

<ul class="social-icons {{ class|default('') }}">
  {% for item in items %}
    {% if loop.first %}
      {% set item_class = 'social-icons__item social-icons__item--first' %}
    {% elseif loop.last %}
      {% set item_class = 'social-icons__item social-icons__item--last' %}
    {% else %}
      {% set item_class = 'social-icons__item' %}
    {% endif %}

    <li class="{{ item_class }}">
      <a href="{{ item.url }}" class="social-icons__link">
        {{ icons.get(item.icon, 'social-icon--img') }}
      </a>
    </li>
  {% endfor %}
</ul>
```

Using twig we are creating an unordered list in which each list item will be a social media icon.  We will look through the array in the JSON file and print an icon for each item in the array.  While we loop through the array we are adding some custom classes to each list item so we can properly address theming of the list.

One key item to notice is that we are importing the icons macro.  This is a custom macro we have created in order to easily print icons as SVG files.  We will discuss this macro in more details during training.

* Inside `social-icons.scss` copy this code:

```
// Social Icons
//
// This is the social-icons component. It's an example.
//
// Markup: social-icons.twig
//
// Style guide: Components.Social Icons

// Import site utilities.
@import '../../global/utils/init';

.social-icons {
  display: flex;
}

.social-icons__item {
  margin: 0 1rem;

  &--first {
    margin-left: 0;
  }
}

.social-icon--img {
  width: 24px;
  height: 24px;
}
```

As we did with the eyebrow component, we have written css styles to make the icons looks nicer.  Again, the commented code in the sass file is what KSS node will use to create/render our social icons component.

Let's compile the styleguide again to create the social icons component.

* Inside `badcamp`, run this command

```
npm run styleguide
```

Now let's take a look at the styleguide by going

```
http://your-local/themes/custom/badcamp/dist/style-guide/
```


---
Previous exercise:  [Building advanced components](3-building-components.md)


Next exercise:  [Prepare Drupal for integration](5-prepare-drupal.md)
