# Movie Card Collection

If we look at the project's prototype, we are using a collection of movie cards to display movies in different categories \(i.e. Action, Horror, Comedy, etc.\).

There are two parts to creating the list. First we need to create a collection of movie cards where we simply grab a given number of cards and style them the same way shown in the prototype. Second, we create a list which would filter cards per movie type and include the type title on each collection. Although we could accomplish this with a single component, we are planning on building this list with Drupal Views and as you will see, it is best if we split this process in two parts.

Let's start with our usual process of creating some files and adding the respective code to each file.

1. Inside **nitflex\_dev\_theme/src/_patterns/01-patterns/** create a new directory called **movie-card-collection**
2. Inside the **movie-card-collection** directory create these files: `movie-card-collection.json`, `movie-card-collection.scss`, and `movie-card-collection.twig`
3. Inside `movie-card-collection.json` copy the following code:

```yaml
{
  "items": [
    {
      "cover_image": "<img src=\"/sites/default/files/action-3.jpg\" alt=\"\" />",
      "heading": {
        "title": "Mattis Magna Mollis Pellentesque",
        "url": "#",
        "heading_level": 4,
        "classes": "movie-card__heading"
      },
      "average_rating": "3",
      "mpaa_rating": "G",
      "synopsis": "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."
    },
    {
      "cover_image": "<img src=\"/sites/default/files/action-3.jpg\" alt=\"\" />",
      "heading": {
        "title": "Bibendum Euismod Mollis Quam Egestas",
        "url": "#",
        "heading_level": 4,
        "classes": "movie-card__heading"
      },
      "average_rating": "3",
      "mpaa_rating": "G",
      "synopsis": "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."
    },
    {
      "cover_image": "<img src=\"/sites/default/files/action-3.jpg\" alt=\"\" />",
      "heading": {
        "title": "Mattis Magna Mollis Pellentesque",
        "url": "#",
        "heading_level": 4,
        "classes": "movie-card__heading"
      },
      "average_rating": "3",
      "mpaa_rating": "G",
      "synopsis": "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."
    },
    {
      "cover_image": "<img src=\"/sites/default/files/action-3.jpg\" alt=\"\" />",
      "heading": {
        "title": "Bibendum Euismod Mollis Quam Egestas",
        "url": "#",
        "heading_level": 4,
        "classes": "movie-card__heading"
      },
      "average_rating": "3",
      "mpaa_rating": "G",
      "synopsis": "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."
    }
  ]
}
```

We created an array called **items**. The array contains multiple items each of which has the fields found in a movie card \(heading, synopsis, cover\_image, etc.\).

* Inside `movie-card-collection.twig` copy the following code:

```php
{{ attach_library('nitflex_dev_theme/movie-card-collection') }}

<div class="movie-card-collection
  {{- attributes ? ' ' ~ attributes.class -}}"
  {{- attributes ? attributes|without(class) -}}>
  {% block collection %}
    {% for item in items %}
      {%
        include '@patterns/01-components/movie-card/movie-card.twig' with {
          cover_image: item.cover_image,
          heading: item.heading,
          mpaa_rating: item.mpaa_rating,
          average_rating: item.average_rating,
          synopsis: item.synopsis
        }
      %}
    {% endfor %}
  {% endblock %}
</div>
```

**Important**

Create the **movie-card-collection** library.

We are now introducing the concept of Twig Blocks, \`

\` so we are able to alter how content is rendered when we integrate this component with Drupal.

Inside the block, we loop through the _items_ array and for each item we loop through we include a _movie-card_ component. This means we will end up with as many cards as items in the **items** array.

## Twig blocks

[Twig blocks](https://twig.symfony.com/doc/2.x/tags/block.html), not the same as Drupal blocks, are a great way to extend twig templates. It can be confusing at first given that all of our lives as Drupal developers we have worked with blocks. However, think of Twig blocks are regions in which you can insert any kind of content.

* Now paste the component's styles below into **movie-card-collection.scss**:

```css
// Import site utilities
@import '../../00-global/utils/init';

.movie-card-collection {
  padding: 20px 0;

  @include breakpoint($bp-sm) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .movie-card {
    margin: 0 auto 10px;
    width: 100%;

    @include breakpoint($bp-sm) {
      justify-content: center;
      width: calc(50% - 5px);
    }

    @include breakpoint($bp-lg) {
      justify-content: space-between;
      margin: 0;
      width: calc(20% - 5px);
    }
  }
}
```

## Compiling the style-guide    <a id="compiling-the-style-guide"></a>

Now that we have written all the necessary code to build the Movie Card Collection component, it's time to see the component in the style-guide. Let's compile our project first.

* In your terminal or command line, navigate to `/themes/custom/nitflex_dev_theme` and run the following command:

```bash
lando npm run build && lando php patternlab/core/console --generate
```

## Viewing the Movie Card Collection component    <a id="viewing-the-featured-movie-component"></a>

Open your Drupal site and point to the URL below:

```text
http://nitflex.lndo.site:8000/themes/custom/nitflex_dev_theme/dist/style-guide/
```

_Depending on your setup, you may not need to enter ":8000". Also if you did not use the provided Lando setup, ensure you are using your own custom URL._

Under the Components category you should see the new Movie Card Collection component.
