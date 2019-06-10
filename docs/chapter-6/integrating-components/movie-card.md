# Movie Card

When we built the Movie card component the intention was to use it to display an individual movie node. The movie content type has the same data structure as the movie card and now we are going to integrate the two so each movie node is rendered as a card in the movie listing page.

Before we can begin integrating the movie card however, we need to prepare a few things in Drupal. If we look at the project's prototype we see that the movie nodes are displayed in different ways. In the listing page each node is displayed with minimum content/fields, whereas the full node displays all the fields in the content type. This means we need to create a couple of view modes which will allow us to filter the fields we want to display depending on where things are being displayed.

## View modes

View modes are great ways to display content in different ways by managing whether fields of an entity are to be shown or hidden.

By default Drupal comes with a hand-full of view modes. We are interested in using the Full/Default and Teaser view modes. By using view modes we let Drupal add all the logic for how to show/hide your content fields.

A typical view mode to display a minimal version of your nodes is the **Teaser** view mode. This is perfect to only show the fields we want using the Movie card component.

{% hint style="info" %}
_**Note:** The Teaser view mode is already setup for this project, but for the purpose of the training here are the steps to setting it up from scratch._
{% endhint %}

1. If you haven't already, login to the site with admin access
2. Click **Structure** \| **Content Types** \| **Movie**
3. Click the **Manage Display** tab
4. Click the **Default** view mode and scroll down the page
5. Expand the **CUSTOM DISPLAY SETTINGS** field-set
6. Check the **Teaser** view mode and click **Save**. _You should now see Teaser in addition to Default as view modes_.

   > **NOTE**: _The Default view mode is typically left unchanged and used as template for additional view modes you may want to create in the future_.

7. Click the **Teaser** view mode
8. Drag the following fields up outside the **Disabled** section: _Cover Image_, _Synopsis_, _Average Viewer Rating_, _MPAA Rating_, _Flag: Favorites_. All other remaining fields should be moved under **Disabled**.
9. For each of the fields outside the **Disabled** section, change the label dropdown to **Hidden**.
10. Click **Save**.

So we just indicated to Drupal which fields we want to display when using the **Teaser** view mode and which we want to hide.

## Updating Twig templates for Movie Card

By default Drupal uses specific templates for rendering different kind of entities/content. For example, to render a node \(regardless of what type of node\), Drupal uses `node.html.twig`, to render a page it uses `page.html.twig`, and so on. This means if we want to change how nodes or pages display we can change those templates. However, any changes we make to those templates will apply to all content that uses them. This may not be what we want. In addition, the golden rule in Drupal is _"Never hack core"_. If we change node.html.twig or page.html.twig in Drupal core, we are breaking the golden rule. That's where template suggestion come in.

## Template Suggestions

[Template suggestions](https://www.drupal.org/docs/8/theming/twig/working-with-twig-templates) are copies of the original core templates. Template suggestions are saved in your theme's `/templates` directory. This is where Drupal knows to look for twig templates when rendering content. If it finds twig templates it uses those over the ones in core when rendering content.

## Naming template suggestions

If you have been using Drupal for a while you may be well familiar with where to get templates from or what to name them. However there is an easy way to do this and that's called _turning on Twig debugging_. Lucky for us the `nitflex_dev_theme` already has twig debugging on and we will make use of it now.

1. In your browser go to `http://nitflex.lndo.site/homepage`
2. Right-click on one of the small movie cards and select **Inspect** or **Inspect Element** \(depending on your browser\), from the context menu. You should now see the code inspector which shows all the markup that makes up the movie node. If you scroll up/down within the code inspector you will notice green text. This is twig debugging in action.

![node template suggestion](../../.gitbook/assets/node-2.png)

If you look at the screenshot above, you will see a few things that are extremely helpful for creating the right template suggestions.

* The last line of the green text \(`BEGIN OUTPUT...`\) shows where the template being used to render the movie node is located and what its name is. **Note:** The screenshot above demonstrates how to find the template within the Drupal core theme. The node template we want has already been placed into the correct location for the `nitflex_dev_theme` theme, so you should see a path to that theme.
* Just above that line, there is a list of files all of which begin with **node--**. This list is what we mean when we say _Template suggestions_.
* The file name with an **"x"** to the left of it is the template Drupal is currently using to render the movie node.

## Creating new template suggestions

{% hint style="info" %}
_**Note:** The template suggestions we need have already been placed into the /templates directory for_ `nitflex_dev_theme` _theme, the steps below are for training purposes only._
{% endhint %}

1. Within the `src/templates/` directory create a new directory named `movie-card`.
2. Navigate to the path of the Drupal core theme shown in the twig debug comment to locate the node template \(e.g, `core/themes/stable/templates/content/node.html.twig`\).
3. Copy the _node.html.twig_ template into `src/templates/movie-card`

With the debugging information above we have all we need to create our first template suggestion for the movie nodes.

{% hint style="info" %}
**TIP**: Typically, Drupal templates follow a file structure that includes putting node templates into a `content` directory, field templates into a `field` directory, etc. In our theme we're putting our custom Drupal templates into directories that reflect which component they're associated with to make it easier to identify what Drupal templates go with what component. Note that we do have a `src/templates/drupal` directory, but this is used for storing template files that apply globally to the theme. Inside the `src/templates/drupal` directory you will find the standard file structure for Drupal theme template files.
{% endhint %}

1. Rename the newly copied template `node--movie--teaser.html.twig`. How do we know to use this name you may ask? If you look at the screenshot above, you see that the list of template suggestions shows teaser being one of them. This means that every time the Movie node is rendered in teaser view, this custom template will be used and not Drupal's core one.
2. Clear the site's caches via the Admin Menu when logged into the site, or run `lando drush cr` in the terminal.
3. Reload the homepage again and inspect the code one more time.

![Movie template suggestion using teaser view mode](../../.gitbook/assets/node-teaser%20%282%29.png)

Notice there is an **"x"** next to `node--movie--teaser.html.twig`, which means Drupal is now using our custom twig template suggestion. Also notice the path of the template. It's our own theme's template directory.

{% hint style="info" %}
**TIP**: If I know I will be creating multiple template suggestions of the same kind \(i.e. node\), I would normally leave the unchanged copy of node.html.twig in my theme and make copies of it every time I need a new template. This way I don't have to copy the same template over and over again from Drupal core \(I'm lazy\).
{% endhint %}

## Integrating the Movie content type

We are now finally at a point where we can integrate the Movie card component with the Movie content type using the newly created template suggestion.

1. Open `/src/templates/movie-card/node--movie--teaser.html.twig` in your text editor
2. Remove all code in the file but leave all comments. It is good to leave the comments untouched as they provide helpful information regarding available variables and other useful Drupal-specific details.
3. Add the following code at the bottom of the template:

```php
{% set rendered_content = content|render %}
{%
   set heading = {
     title: label,
     url: url,
     heading_level: '4',
     attributes: title_attributes
 }
%}
{% embed '@patterns/movie-card/movie-card.twig' with
  {
    attributes: attributes,
    title_prefix: title_prefix,
    title_suffix: title_suffix,
    heading: heading,
    cover_image: content.field_main_image|render|trim is not empty ? content.field_main_image,
    mpaa_rating: content.field_mpaa_rating|render|trim is not empty ? content.field_mpaa_rating,
    average_rating: content.field_average_viewer_rating|field_value,
    synopsis: content.body|render|trim is not empty ? content.body,
    flag: content.flag_favorites
  } only
%}

  {% block favorites_toggle %}
    {{ flag }}
  {% endblock %}
{% endembed %}
```

Let's go over what we are doing here:

* First, as mentioned in [best practices in Chapter 3](../../chapter-3/best-practices.md), we're triggering a full render of the content variable.
* Next, we are setting up a variable that will include the values for the **heading** of the movie card that are based on variables Drupal provides. If you notice starting around line 18 in the comments of our template file, the _label_ variable is the Node's title, and the _url_ variable is the node's URL. In addition, notice that the _heading_ variable we created is modeled after the _**heading**_ component's [YAML object](https://mariohernandez.gitbook.io/components/~/drafts/-L_4qJ97wL1R7eH6ZDkg/primary/chapter-4/building-components/2-heading#improving-the-heading-component).
* Next we use an `embed` twig statement to integrate the Movie card component. In the embed we are mapping all the Movie card fields with Drupal's data. We also pass in Drupal-specific items such as _title\_prefix_, _title\_suffix_, _attributes_, etc.
* Notice how with the average viewer rating field we are making use of the `field_value` filter that's provided by the [Twig Field Value](https://www.drupal.org/project/twig_field_value) module to pass in the raw value of that field. This is because in our template for the Average Viewer Rating component we're expecting a simple number for a data attribute, so if it were to include any markup it would break our component!
* Finally we make use of the `favorites_toggle` twig block tag that we set up in the movie card component to swap out what is output in that area of the component. We're instead letting Drupal render the flag field as provided by the flag module. It's like we're telling Drupal "Use **our** component with your field values, except for the add-to-favorites button -- take care of that one for us, would ya?"

### Clear Drupal's caches.

* Use the admin menu to flush all caches
* Or run this command:

```bash
lando drush cr
```

### Twig Embed

This is also a new concept being introduced here and to keep it simple: embeds combines the advantages of _includes_ and _extends_ twig statements into one. They allow us to include an existing component and give us the option to alter the data or how data is printed/rendered. Our own [Eric Huffman](https://www.mediacurrent.com/who-we-are/team/eric-huffman/) has written a [great blog post which explains Twig blocks, Embeds, Includes](https://www.mediacurrent.com/blog/accommodating-drupal-your-components/) and more in detail.

{% hint style="info" %}
**INFO**: Learn more about [Twig's embed](https://twig.symfony.com/doc/2.x/tags/embed.html) statements to extend and include twig templates.
{% endhint %}

If you refresh the homepage you will notice the movie cards now are inheriting the styles we wrote when we created the component.

