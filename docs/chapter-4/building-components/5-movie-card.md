# Movie Card

![Movie card screenshot](../../.gitbook/assets/card%20%281%29.png)

The Movie Card component is a more advanced component compared to the ones we've built thus far. Here we will start reusing previously built components by using twig's [Include](https://twig.symfony.com/doc/2.x/tags/include.html) and [Embed](https://twig.symfony.com/doc/2.x/tags/embed.html) statements.

By now you should know the drill, inside **src/\_patterns/01-patterns/** create a new directory \(which matches the name of the component\), and inside that directory add some files.

## Component Data

1. Inside `nitflex_dev_theme/src/_patterns/01-patterns/` create a new directory called **movie-card**
2. Inside the **movie-card** directory create a new file called **movie-card.yml**.
3. Inside `movie-card.yml` add the following code:

```yaml
cover_image: "<img src=\"/sites/default/files/action-3.jpg\" alt=\"Alt text\" />"
heading:
  title: "I love this movie"
  url: "#"
  heading_level: 4
  modifier: "movie-card__heading"
average_rating: "3"
mpaa_rating: "PG-13"
synopsis: "Aenean lacinia bibendum nulla sed consectetur. Maecenas sed diam eget risus varius blandit sit amet non magna."
```

By looking at the prototype we see that the landing page shows a listing of movies. Given the hierarchy of content we see the page already has a **h1** and **h2** in the featured movie section. Each movie category also uses a heading which will be h3, so using a h4 as the **heading\_level** for the title of the movie in the card makes sense.

## Component's markup

1. Inside the **movie-card** directory create a new file called **movie-card.twig**.
2. Add the following code:

```php
<article class="movie-card
  {{- attributes ? attributes.class -}}"
  {{- attributes ? attributes|without(class) -}}>
  {{ title_prefix }}
  {{ title_suffix }}
  {% if cover_image %}
    <div class="movie-card__cover-image">
      {{ cover_image }}
    </div>
  {% endif %}
  <div class="movie-card__content">
    {% if heading %}
      {%
        include '@patterns/heading/heading.twig' with {
          heading: heading
        } only
      %}
    {% endif %}
    <div class="movie-card__favorites-toggle">
      {% block favorites_toggle %}
        {%
          include '@patterns/add-to-favorites/add-to-favorites.twig' with {
            url: '#',
          } only
        %}
      {% endblock %}
    </div>
    {% if mpaa_rating %}
      <div class="movie-card__mpaa-rating">
        {% include '@patterns/mpaa-rating/mpaa-rating.twig' with {
            rating: mpaa_rating
          } only
        %}
      </div>
    {% endif %}
    {% if average_rating %}
      <div class="movie-card__average-rating">
        {% include '@patterns/average-rating/average-rating.twig' with {
            count: average_rating
          } only
        %}
      </div>
    {% endif %}
    {% if synopsis %}
      <div class="movie-card__synopsis">
        {{ synopsis }}
      </div>
    {% endif %}
  </div>
</article>
```

* Notice we are using **include** statements to nest existing components into the movie-card.  This is a simple example of how we can reuse previously built components.
* The image and rest of content has been split into different containers \(`movie-card__cover-image` & `movie-card__content`\). This is always a good practice as it provides flexibility to move multiple content fields around at once should we have the need to do so.
* Also notice we are reusing the heading component and simply changing its heading level and applying a unique class when inside the movie card. This provides context and allows us to style this heading independently of other headings in the page.
* Finally, we are introducing the concept of [Twig Blocks](https://twig.symfony.com/doc/2.x/tags/extends.html), \(not the same as Drupal blocks\), to provide a way to change how content is rendered when we integrate this component with Drupal. More on how Twig Blocks give us more flexibility at time of rendering content later.

## Component Styles

1. Inside the **movie-card** directory create a new file called **movie-card.scss**.
2. Inside `movie-card.scss` add the following code:

```css
// Import site utilities
@import '../../00-global/utils/init';

.movie-card {
  background: $color-black;
  color: $color-white;
  height: 250px;
  max-width: 420px;
  overflow: hidden;
  position: relative;
  transition: transform 1s ease-in-out;

  a {
    color: $color-white;
    text-decoration: none;
  }

  // By defalt image overlay is not visible until
  // hover is active.
  &::after {
    background: transparent;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  }

  &:hover,
  &:focus {

    .movie-card__cover-image img {
      height: 110%;
    }

    // Dark overlay.
    &::after {
      background: rgba($color-black, 0.5);
    }

    // On hover the text content fades into view.
    .movie-card__content {
      margin-top: 0;
      opacity: 1;
    }
  }
}

.movie-card__cover-image {
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;

  img {
    @include center-align(absolute);
    display: block;
    max-width: none;
    transition: height 0.25s ease-in-out;
    height: 100%;
    width: auto;
  }
}

.movie-card__heading {
  font-size: 2.2rem;
  font-weight: $font-weight-regular;
  margin: 0 0 12px;
  line-height: 1;
  width: 100%;
}

.movie-card__favorites-toggle,
.movie-card__mpaa-rating {
  margin-right: 10px;
}

.movie-card__mpaa-rating {

  .mpaa-rating {
    border-color: $color-white;
    color: $color-white;
  }
}

.movie-card__average-rating {
  align-items: center;
  display: flex;
  padding: 6px 0;
}

.movie-card__synopsis {
  font-size: 1.4rem;
  padding: 8px 0;

  @include breakpoint($bp-sm) {
    font-size: 1.6rem;
  }
}

.movie-card__content {
  @include vertical-align(absolute);
  display: flex;
  flex-wrap: wrap;
  font-size: 14px;
  font-weight: 300;
  left: 20px;
  margin-top: 200px;
  right: 20px;
  transition: margin 0.5s ease 0.125s, opacity 0.5s ease 0.25s;
  overflow: hidden;
  opacity: 0;
  z-index: 2;
}
```

Quite the styles huh? 😄

## Viewing the component  <a id="viewing-the-component"></a>

* Open your Drupal site and point to the URL below: [http://nitflex.lndo.site/themes/custom/nitflex\_dev\_theme/dist/style-guide/?p=viewall-patterns-movie-card](http://nitflex.lndo.site/themes/custom/nitflex_dev_theme/dist/style-guide/?p=viewall-patterns-movie-card)

  Under the Components category you should see the new Movie Card component.

## Working with Drupal Libraries

Let's take a break from building components for a moment to learn about Drupal Libraries. Drupal libraries is how we add CSS and Javascript to content in Drupal. Proceed to Drupal Libraries.

