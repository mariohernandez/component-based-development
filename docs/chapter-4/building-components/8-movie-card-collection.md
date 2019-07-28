# Movie Card Collection

![Card Collection screenshot](../../.gitbook/assets/card-collection-1.png)

If we look at the project's prototype, we are using a collection of movie cards to display movies in different categories \(i.e. Action, Horror, Comedy, etc.\).

There are two parts to creating the list. First we need to create a collection of movie cards where we simply grab a given number of cards and style them the same way shown in the prototype. Second, we create a list which would filter cards per movie type and include the type title on each collection. Although we could accomplish this with a single component, we are planning on building this list with Drupal Views and as you will see, it is best if we split this process in two parts.

Let's start with our usual process of creating some files and adding the respective code to each file.

1. Inside `nitflex_dev_theme/src/_patterns/01-patterns/` create a new directory called **card-collection**
2. Inside the **card-collection** directory create these files: `card-collection.yml`, `card-collection.scss`, and `card-collection.twig`
3. Inside `card-collection.yml` copy the following code:

```yaml
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
    promo_text: "Be part of th 12th season this fall,"
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
    promo_text: "Be part of th 12th season this fall,"
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
    promo_text: "Be part of th 12th season this fall,"
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
    promo_text: "Be part of th 12th season this fall,"
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
    promo_text: "Be part of th 12th season this fall,"
    synopsis: "Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit."
```

We created an array called **items**. The array contains multiple items each of which has the fields found in a movie card \(heading, synopsis, cover image, etc.\).

* Inside `card-collection.twig` add the following code:

```php
{{ attach_library('nitflex_dev_theme/card-collection') }}

<div class="card-collection
  {{- attributes ? ' ' ~ attributes.class -}}"
  {{- attributes ? attributes|without(class) -}}>
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
</div>
```

**Important**

Create the **card-collection** library.

We are now introducing the concept of \*\*Twig Blocks \(not the same as Drupal blocks\), so we are able to alter how content is rendered when we integrate this component with Drupal.

Inside the block, we loop through the _items_ array and for each item we loop through we include a _movie-card_ component. This means we will end up with as many cards as items in the **items** array.

## Twig blocks

[Twig blocks](https://twig.symfony.com/doc/2.x/tags/block.html), not the same as Drupal blocks, are a great way to extend twig templates. It can be confusing at first given that all of our lives as Drupal developers we have worked with blocks. However, think of Twig blocks as regions in which you can insert any kind of content.

* Now add the component's styles below into **card-collection.scss**:

```css
// Import site utilities.
@import '../../00-global/utils/init';

.card-collection {
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

## Compiling the style-guide        <a id="compiling-the-style-guide"></a>

Now that we have written all the necessary code to build the Movie Card Collection component, it's time to see the component in the style-guide. Let's compile our project first.

* In your terminal or command line, navigate to `/themes/custom/nitflex_dev_theme` and run the following command:

```bash
lando npm run build && lando php patternlab/core/console --generate
```

## Viewing the component    <a id="viewing-the-component"></a>

* Open your Drupal site and point to the URL below: [http://nitflex.lndo.site/themes/custom/nitflex\_dev\_theme/dist/style-guide/?p=viewall-patterns-card-collection](http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/dist/style-guide/?p=viewall-patterns-card-collection)

Under the Components category you should see the new Movie Card Collection component.

