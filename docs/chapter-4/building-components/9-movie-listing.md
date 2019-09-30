# Movie List

![Card List screenshot](../../.gitbook/assets/card-list%20%281%29.png)

Just when you thought "I got this!", we are now going to build a new component that uses slightly different approach. For the most part, the majority of the components you've built follow the same principles you've been following all along, however, there are other type of components that may deviate from those principles a little. When content needs to be displayed in some kind of list or collection of components, there are a few things we need to do differently.

Let's start with our usual process of creating some files and adding the respective code to each file. We will explain everything once these steps are done.

1. Inside `nitflex_dev_theme/src/_patterns/01-patterns/` create a new directory called **movie-list**
2. Inside the **movie-list** directory create these files: `movie-list.yml`, `movie-list.scss`, and `movie-list.twig`
3. Inside `movie-list.yml` add the following code:

```yaml
list_title:
  title: "Action and Adventure"
  heading_level: 3
items:
  -
    average_rating: 5
    cover_image: "<img src=\"/sites/default/files/action-3.jpg\" alt=\"Alt text\" />"
    heading:
      title: "DrupalCon Seattle 2019"
      url: "#"
      heading_level: 4
      modifier: "movie-card__heading"
    mpaa_rating: "PG-13,"
    promo_text: "Be part of the 12th season this fall,"
    synopsis: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
  -
    average_rating: 5
    cover_image: "<img src=\"/sites/default/files/action-3.jpg\" alt=\"Alt text\" />"
    heading:
      title: "DrupalCon Seattle 2019"
      url: "#"
      heading_level: 4
      modifier: "movie-card__heading"
    mpaa_rating: "PG-13,"
    promo_text: "Be part of the 12th season this fall,"
    synopsis: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
  -
    average_rating: 5
    cover_image: "<img src=\"/sites/default/files/action-3.jpg\" alt=\"Alt text\" />"
    heading:
      title: "DrupalCon Seattle 2019"
      url: "#"
      heading_level: 4
      modifier: "movie-card__heading"
    mpaa_rating: "PG-13,"
    promo_text: "Be part of the 12th season this fall,"
    synopsis: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
  -
    average_rating: 5
    cover_image: "<img src=\"/sites/default/files/action-3.jpg\" alt=\"Alt text\" />"
    heading:
      title: "DrupalCon Seattle 2019"
      url: "#"
      heading_level: 4
      modifier: "movie-card__heading"
    mpaa_rating: "PG-13,"
    promo_text: "Be part of the 12th season this fall,"
    synopsis: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
  -
    average_rating: 5
    cover_image: "<img src=\"/sites/default/files/action-3.jpg\" alt=\"Alt text\" />"
    heading:
      title: "DrupalCon Seattle 2019"
      url: "#"
      heading_level: 4
      modifier: "movie-card__heading"
    mpaa_rating: "PG-13,"
    promo_text: "Be part of the 12th season this fall,"
    synopsis: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
```

Same as in the Card Collection component, we created an `items[ ]` array. The array contains multiple instances of a movie card which we will use to render a collection of movie cards.

* Add the following code snippet into **movie-list.twig**:

```php
{{ attach_library('nitflex_dev_theme/movie-list') }}

<section class="movie-list
  {{- attributes ? ' ' ~ attributes.class -}}"
  {{- attributes ? attributes|without(class) -}}>
  <div class="movie-list__title">
    {%
      include '@patterns/heading/heading.twig' with {
        heading: list_title
      } only
    %}
  </div>
  {% block list %}
    {% include '@patterns/card-collection/card-collection.twig' %}
  {% endblock %}
</section>
```

**Important**

Create the **movie-list** library.

* First, notice we are using the very helpful **include** statement to nest the heading component in order to print a title for each collection.
* Then we have declared `{% block list %}` so we are able to alter how content is rendered when we integrate this component with Drupal.
* Inside the twig block, we are simply including the _card-collection_ component as is, without having to map variables. This is because we provided a list of movie cards for it to use in our `movie-list.yml` file.

### Twig blocks

[Twig blocks](https://twig.symfony.com/doc/2.x/tags/block.html), not the same as Drupal blocks, are a great way to extend twig templates. It can be confusing at first given that all of our lives as Drupal developers we have worked with blocks. However, think of Twig blocks are regions in which you can insert any kind of content.

* Now add the component's styles below into **movie-list.scss**:

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

### Compiling the style-guide        <a id="compiling-the-style-guide"></a>

Now that we have written all the necessary code to build the Movie List component, it's time to see the component in the style-guide. Let's compile our project first.

* In your terminal or command line, navigate to `/themes/custom/nitflex_dev_theme` and run the following command:

```bash
lando npm run build && lando php patternlab/core/console --generate
```

## Viewing the component    <a id="viewing-the-component"></a>

* Open your Drupal site and point to the URL below: [http://nitflex.lndo.site/themes/custom/nitflex\_dev\_theme/dist/style-guide/?p=viewall-patterns-movie-list](http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/dist/style-guide/?p=viewall-patterns-movie-list)

Under the Components category you should see the new Movie List Collection component.

## And with that, We are done building components 🙌 🏆 🍻

