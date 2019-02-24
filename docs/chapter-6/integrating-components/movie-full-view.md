# Movie full view

Now that all components to that make the homepage have been integrated, let's finalize things by integrating the movie full node. For this we'll actually make use of the **Featured Movie** component for the upper part of the page, but leave out the synopsis text, and instead have that show up below. Let's get started.

We are going to follow the exact same steps for using view modes as we did when we integrated the [**Movie Card**](https://mariohernandez.gitbooks.io/components-training/content/chapter5/integrate/movie.html) and [**Featured Movie**](https://mariohernandez.gitbooks.io/components-training/content/chapter5/integrate/featured-movie.html). However, this time we're going to use the **Full content** view mode. Like the **Teaser** view mode, this is one that Drupal provides by default. It has already been enabled, but if you were enabling it on your own you would follow these steps:

1. If you haven't already, login to the site with admin access
2. Click **Structure** \| **Content Types** \| **Movie**
3. Click the **Manage Display** tab
4. Click the **Default** view mode and scroll down the page
5. Expand the **CUSTOM DISPLAY SETTINGS** fieldset
6. Check the **Full content** view mode and click **Save**.
7. Click the **Full content** view mode link.
8. Drag the following fields up outside the **Disabled** section: _Cover Image_, _Promo Sentence_ _Synopsis_, _Average Viewer Rating_, _MPAA Rating_, _Flag: Favorites_. All other remaining fields should be moved under **Disabled**.
9. For each of the fields outside the **Disabled** section, change the label dropdown to **Hidden**.
10. Click **Save**.

So we just indicated to Drupal which fields we want to display when using the **Full content** view mode and which we want to hide.

## Template suggestions

The template suggestion for the **Full content** view mode of the movie content type has already been created for you \(see: `nitflex_dev_theme/src/templates/movie/node--movie--full.html.twig`\). But if you were doing this on your own, follow the same steps that we took for creating the template suggestion for the Teaser view mode in the [Movie card](movie-card.md#template-suggestions) integration instructions, but this time the template suggestion should be **node--movie--full.html.twig**.

## Integrating the full view of a movie

We are now ready to integrate the full view of a movie:

1. Open `node--movie--full.html.twig` in your text editor
2. Remove all code in the file but leave all comments.
3. Paste the following code at the bottom of the template

{% code-tabs %}
{% code-tabs-item title="node--movie--full.html.twig" %}
```php
{% set rendered_content = content|render %}

<article{{ attributes.addClass('movie') }}>
  {{ title_prefix }}
  {{ title_suffix }}
  <div class="movie__hero">
    {%
      set heading = {
        title: label,
        url: url,
        heading_level: '1',
        attributes: title_attributes,
      }
    %}
    {%
      set watch_button = {
        url: url,
        text: 'Watch now'|t,
      }
    %}
    {% embed '@patterns/featured-movie/featured-movie.twig' with {
        attributes: attributes,
        title_prefix: title_prefix,
        title_suffix: title_suffix,
        heading: heading,
        cover_image: content.field_main_image|render|trim is not empty ? content.field_main_image,
        mpaa_rating: content.field_mpaa_rating|render|trim is not empty ? content.field_mpaa_rating,
        promo_text: content.field_promo_sentence|render|trim is not empty ? content.field_promo_sentence,
        average_rating: content.field_average_viewer_rating|field_value,
        flag: content.flag_favorites
      } only
    %}
      {% block favorites_toggle %}
        {{ flag }}
      {% endblock %}
    {% endembed %}
  </div>
  <div class="movie__synopsis body-text">
    {{ content.body }}
  </div>
</article>
```
{% endcode-tabs-item %}
{% endcode-tabs %}

Let's go over what we are doing here:

* First, as mentioned in the introduction to Chapter 5, we're triggering a full render of the content variable.
* Next, we are keeping the `<article>` element as the outer wrapper for the full view of a movie, plus the `attributes` Drupal provides, but we're using the `addClass()` method to add our class to the ones that Drupal will output. You can learn more about this method, and others that are available for the `attributes` variable on the [Drupal 8 theming guide](https://www.drupal.org/docs/8/theming-drupal-8/using-attributes-in-templates). Note that we're also keeping the `title_prefix` and `title_suffix` variables.
* The next part should be familiar to you. We're basically repeating what we did for the **Featured Movie** component, but note that we're _not_ including the synopsis text this time when we embed the component. This is because for the full view display of a movie the synopsis text field is set up to display the full text, and not a summary, so we output that after the embed of the featured movie component.

And that's it! We already did the heavy lifting in the **Featured Movie** component, so integrating the full view was a breeze. Final steps:

* Clear the site's caches via the Admin Menu when logged into the site, or run `lando drush cr` in the terminal.
* From the homepage, click the title of any movie listed \(or the Watch Now button on the featured movie.\) The full view of the movie should display just like a Featured Movie at the top of the page, with the full synopsis text below.

