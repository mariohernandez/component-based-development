# Component-based Development with Drupal 8

## 1 - Building Components (continued...)
This training is broken down in three parts:  Building Components, Preparing Drupal for Components, and finally, Integrating components with Drupal.


### 1.1 Creating the social media icons component

Let's now build the social media icons component.  Breaking things down into smaller components allows us to make components more reusable.

* Inside **/themes/custom/badcamp/src/components/** create a new directory and call it `social-icons`, as before, create the following 3 files inside of it: `social-icons.json`, `social-icons.scss`, and `social-icons.twig`.

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

**IMPORTANT**:  JSON is very strict about indentation and data format.  Notice how the last item on each group does not have an ending _comma_ (`,`).  Also, the very last item in the entire object does not have an endin comma.


* Inside `social-icons.twig` copy the following code:

```php
{% import '@badcamp/icons/icons.twig' as icons %}
{{ attach_library('badcamp/social-icons') }}

<ul class="social-icons {{ class|default('') }}">
  {% for item in items %}
    <li class="social-icons__item">
      <a href="{{ item.url }}" class="social-icons__link">
        {{ icons.get(item.icon, 'icon social-icons--icon') }}
      </a>
    </li>
  {% endfor %}
</ul>
```

Using twig we are creating an unordered list in which each list item will be a social media icon.  We loop through the array in the JSON object and print an icon for each item in the array.  As we loop we add custom classes to each list item so we can properly address theming of the list.

One key item to notice is that we are attaching a library (`{{ attach_library('badcamp/social-icon') }}`.  Libraries is the recommended way for adding CSS and Javascript to Drupal pages.  More on libraries later.

We are also importing a custom macro to be able to print each social media icon as SVG files.  We will discuss this macro later on.


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
}

.social-icons--icon {
  width: 24px;
  height: 24px;
}
```

As we did with the eyebrow component, we have written css styles to make the icons looks nicer.  Again, the commented code in the sass file is what KSS Node will use to create/render our social icons component.

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
Previous exercise:  [Building basic components](2-building-components.md)


Next exercise:  [Building advanced components](4-building-components.md)
