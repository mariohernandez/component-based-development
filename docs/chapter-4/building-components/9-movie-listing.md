# Movie List

Just when you thought "I got this!", we are now going to build a new component that uses slightly different approach. For the most part, most component you'll built follow the same principles you've been following all along, however, there are other type of components that may deviate from those principles a little. When content needs to be displayed in some kind of list or collection of components, there are a few things we need to do differently.

Let's start with our usual process of creating some files and adding the respective code to each file. We will explain everything once these steps are done.

1. Inside `nitflex_dev_theme/src/_patterns/01-patterns/` create a new directory called **movie-list**
2. Inside the **movie-list** directory create these files: `movie-list.json`, `movie-list.scss`, and `movie-list.twig`
3. Inside `movie-list.json` copy the following code:

```yaml
{
  "list_title": "Action and Adventure",
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

Same as in the Movie Card Collection component, we created an `items[ ]` array. The array contains multiple instances of a movie card which we will use to render a collection of movie cards.

* Paste the following code snippet into **movie-list.twig**:

```php
{{ attach_library('nitflex_dev_theme/movie-list') }}

<section class="movie-list
  {{- attributes ? ' ' ~ attributes.class -}}"
  {{- attributes ? attributes|without(class) -}}>
  <div class="movie-list__title">
    {%
      include '@patterns/heading/heading.twig' with {
        "heading": {
          "title": list_title,
          "heading_level": '3'
        }
      } only
    %}
  </div>
  {% block list %}
    {% embed '@patterns/movie-card-collection/movie-card-collection.twig' %}
      {% block collection %}
        {% for item in items %}
          {%
            include '@patterns/movie-card/movie-card.twig' with {
              cover_image: item.cover_image,
              heading: item.heading,
              mpaa_rating: item.mpaa_rating,
              average_rating: item.average_rating,
              synopsis: item.synopsis
            }
          %}
        {% endfor %}
      {% endblock %}
    {% endembed %}
  {% endblock %}
</section>
```

**Important**

Create the **movie-list** library.

* First, notice we are using the very helpful **include** statement to nest the heading component in order to print a title for each collection.
* Then we have declared `{% block list %}` so we are able to alter how content is rendered when we integrate this component with Drupal.
* Inside the twig block, we are using an **embed** statements to include the previously built _movie-card-collection_ component.
* Then we use the `{% block collection %}` twig block to insert a movie card per each item found in the **items\[ \]** array. So if the array has 10 items, we will end up with 10 movie cards in the collection.

### Twig blocks

[Twig blocks](https://twig.symfony.com/doc/2.x/tags/block.html), not the same as Drupal blocks, are a great way to extend twig templates. It can be confusing at first given that all of our lives as Drupal developers we have worked with blocks. However, think of Twig blocks are regions in which you can insert any kind of content.

### Embed

This is also a new concept being introduced here and to keep it simple, embeds combines the advantages of _includes_ and _extends_ twig statements into one. They allow us to include an existing component and give us the option to alter the data or how data is printed/rendered. Our own [Eric Huffman](https://www.mediacurrent.com/who-we-are/team/eric-huffman/) has written a [great blog post which explains Twig blocks, Embeds, Includes](https://www.mediacurrent.com/blog/accommodating-drupal-your-components/) and more in detail.

* Now paste the component's styles below into **movie-listig.scss**:

```css
// Import site utilities
@import '../../00-global/utils/init';

.movie-list {
  background-color: $color-black;
  padding: 30px 10px 20px;

  @include breakpoint($bp-md) {
    padding: 50px 5px 40px;
  }
}

.movie-list__title {
  color: $color-white;
  padding: 0 5px;
  text-align: center;
  text-transform: uppercase;

  .heading {
    font-size: 2rem;
    font-weight: $font-weight-bold;
    line-height: 1;
    margin: 0;
  }

  @include breakpoint($bp-lg) {
    text-align: left;
  }
}
```

### Compiling the style-guide    <a id="compiling-the-style-guide"></a>

Now that we have written all the necessary code to build the Movie List component, it's time to see the component in the style-guide. Let's compile our project first.

* In your terminal or command line, navigate to `/themes/custom/nitflex_dev_theme` and run the following command:

```bash
lando npm run build && lando php patternlab/core/console --generate
```

### Viewing the Movie List Collection component    <a id="viewing-the-featured-movie-component"></a>

Open your Drupal site and point to the URL below:

```text
http://nitflex.lndo.site:8000/themes/custom/nitflex_dev_theme/dist/style-guide/
```

_Depending on your setup, you may not need to enter ":8000". Also if you did not use the provided Lando setup, ensure you are using your own custom URL._

Under the Components category you should see the new Movie List Collection component.

## And with that, We are done building components 🔥 🙌 🏆 🍻
