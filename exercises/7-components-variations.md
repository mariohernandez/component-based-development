# Component-based Development with Drupal 8

## Creating Components Variations

Component variations is the ability to display a component differently than its original state.  A variation could be as simple as showing text or elements in different color, or more advanced like changing the order or content or content itself.

Let's first create a variation of the Speaker card component in the styleguide then we will go back to Drupal to implement the variation.

Here's what we are after for this variation.
<!-- image here -->

As you can see, we have eliminated some fields and also change the layout of the original component.

**featured-speakers.json**
```
{
  "items": [
    {
      "name": "Jes&#xfa;s M. Olivas",
      "photo": "<img src='../assets/jesus-olivas.jpg' alt='Jesus M. Olivas'>",
      "bio": "Our team has been working with Drupal for almost a decade, currently leading the way on Drupal 8 Development, Consulting & Community."
    },
    {
      "name": "AmyJune Hineline",
      "photo": "<img src='../assets/amyjune.jpg' alt='AmyJune Hineline'>",
      "bio": "I am Drupal Sitebuilder and Community Lead for Hook 42. I have been an active participant in the Drupal community for almost 2 years by contributing to projects and helping with documentation."
    },
    {
      "name": "Carie Fischer",
      "photo": "<img src='../assets/carie.jpg' alt='Carie Fischer'>",
      "bio": "Website developer, graphics guru, lover of all things #a11y...Star Wars fan (by default). accessibility lead & senior front-end dev @hook42inc"
    }
  ]
}
```

**featured-speakers.twig**
```
{{ attach_library('badcamp/featured-speakers') }}

<section class="featured-speakers">
  {% for item in items %}
    {%
      include '@badcamp/speaker/speaker.twig' with {
        'name': item.name,
        'photo': item.photo,
        'bio': item.bio,
        'class': 'featured-speakers__card',
      } only
    %}
  {% endfor %}
</section>
```


**featured-speakers.scss**
```
// Featured Speakers
//
// This is the featured-speakers component.
//
// Markup: featured-speakers.twig
//
// Style guide: Components.Featured Speakers

// Import site utilities.
@import '../../global/utils/init';


.featured-speakers__card {
  display: flex;
  flex-direction: column;

  @media (min-width: 55em) {
    flex-direction: row;
  }

  &.speaker {
    border: 0;
    border-bottom: 1px solid #bbb;
    max-width: inherit;

    &:last-child {
      border: 0;
    }
  }

  .speaker__header {
    background: none;
    flex: 0 0 175px;
    padding-bottom: 0;
  }

  .speaker__photo img {
    border: 5px solid #eee;
  }

  .speaker__content {
    align-items: center;
    display: flex;
    min-height: inherit;
    margin-top: 0;

    @media (min-width: 55em) {
      margin-top: 20px;
    }
  }

  .speaker__name {
    color: #003954;
    font-size: 14px;
    text-transform: uppercase;
  }
}
```

### Compiling Styleguide

```
npm run styleguide
```

#### Preview of the Featured Speakers component
![Featured Speakers Component](assets/featured-speakers.png)



#### View component in styleguide
Let's take a look to make sure our new component looks and behaves as expected

```
http://your-local/themes/custom/badcamp/dist/style-guide/
```

---

Previous exercise:  [Integrate components](6-integrating-components.md)

Next exercise:  [Integrating Featured Speakers](8-integrate-featured-speakers.md)
