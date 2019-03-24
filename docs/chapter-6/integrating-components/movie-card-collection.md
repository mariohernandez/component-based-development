# Movie Card Collection

In the past two integration exercises we have integrated components with data that is coming from a content type. This time we are going to integrate the movie card collection component with data that is coming from a Drupal view. The process is a little different as Drupal's view offer their own twig templates and the data they produce is usually a collection of fields or list of fields.

## Views template suggestions

Whether data for a component comes from a content type, paragraph, block or a view, we still need to be able to override Drupal's templates in order to integrate the components, which means we need to create custom twig template suggestions.

Views template suggestions are not as straight forward as the ones we have worked with thus far. Here is some info on [views template suggestion](https://api.drupal.org/api/drupal/core!modules!views!views.theme.inc/group/views_templates/8.2.x) you should get acquainted with.

One key piece of information in the views article above is this:

> For each view, there will be a minimum of **two templates** used. The first is used for all views: `views-view.html.twig`. The second template is determined by the style selected for the view \(i.e. unformatted, fields, etc.\), for which a template suggestion would look like `views-view-unformatted.html.twig`. Note that certain aspects of the view can also change which style is used; for example, arguments which provide a summary view might change the style to one of the special summary styles.

## Discovering the right views template to override

The process for discovering the templates Drupal's views are using is the same as what we've done so far, twig debugging. So repeat the same process as follows:

1. Go to the site's homepage \(/homepage\), where the movie list is displayed
2. Right-click on any of the movies within the list and select **Inspect** or **Inspect Element** depending on your browser.
3. Within the code inspector, scroll up until you find template suggestions starting with **views-view--**. Example:

![Views template suggestions](../../.gitbook/assets/views-1.png)

As we read in the excerpt above, there are usually two views templates using when rendering content, the first one I'd like to think of as the wrapper for the view and the second one wraps the content or content rows, and its name is based on the display format used when creating the view \(i.e. unformatted\). This is what we are seeing in the screenshot above.

## Creating Views template suggestions

**Note:** The screenshot above demonstrates how to find the template within the Drupal core theme. The views templates we want have already been placed into our theme's /templates directory, so you should see a path to that theme. If you were doing this on your own, you would follow the next steps. Otherwise, proceed to step 5 below.

1. Copy the `views-view.html.twig` and `views-view-unformatted.html.twig` files from `/core/themes/stable/templates/views/`, and place them into **/web/themes/custom/nitflex\_dev\_theme/src/templates/card-collection/**
2. We need to rename the templates as follows:
   * `views-view--movie-list.html.twig` and `views-view-unformatted--movie-list.html.twig`
   * If you are wondering where **movie-list** comes from, that's the name of the view we created \(machine name `movie_list`\).
   * You can find a View's machine name on the main views admin page \(/admin/structure/views\)
3. Clear the site's caches via the Admin Menu when logged into the site, or run `lando drush cr` in the terminal.
4. If you reload the homepage, you will not see any visual changes on the content but if you inspect the page again you will notice that Drupal is now using the newly created template suggestions.
5. In your editor open **views-view--movie-list.html.twig** and add the following code overriding the existing code in the template \(except for the comments as we would like to keep the comments intact\):

```php
{%
  set classes = [
    dom_id ? 'js-view-dom-id-' ~ dom_id,
  ]
%}
{% set attributes = attributes.addClass(classes) %}
{% embed '@patterns/card-collection/card-collection.twig' %}
  {% block collection %}
    {{ rows }}
  {% endblock %}
{% endembed %}
```

1. * First, we're keeping the `dom-id` class that views adds, and updating the `attributes`variable for the view to include that class. This will help keep classes intact that views and/or other modules may rely on.
   * Next, we're using the twig embed tag again to map the content of this view to our **Movie Card Collection** component, and passing in Drupal attributes so that they'll be output with our component's markup.
   * For the twig block we named `collection` in the **Movie Card Collection** component, we output the `rows` variable that views provides, which is basically the content of this view, plus the `title_prefix` and `title_suffix` variables.
2. In your editor open **views-view-unformatted--movie-listing.html.twig** and add the following code overriding the existing code in the template \(except for the comments as we would like to keep the comments intact\):

```php
{% for row in rows %}
  {{- row.content -}}
{% endfor %}
```

* There is very little going on here. We've stripped most of the code from the original template, but why? Well, if you look at the **movie card collection** component, you will see that we already have everything we need as far as Drupal requirements for rendering content and Drupal specific attributes. So in this template we are simply cleaning up the code to avoid printing any extra stuff we don't need.
* As you may recall, in the **movie card collection** component, the data for individual **movie cards** is stored in an `items[ ]` array in the component's `.yml` file. We loop through that array, and for each item we do an `include` of a **movie-card** and pass in the data from the item we're currently iterating over. This gives us a list of movie cards inside our markup for the **movie card collection** component.
* Views is essentially doing the same thing. The `movie_listing` view is set up to show a list of movie nodes displayed in the teaser view mode. Since we already integrated the **movie-card** with the teaser view of movie nodes, the end result is the same: a simple list of movie cards.

### Clear Drupal's caches.

* Use the admin menu to flush all caches
* Or run this command:

```bash
lando drush cr
```

Now if you reload the homepage you should see the movie card collections in place. There is one more thing to do for the listing of movies and we will do that next.
