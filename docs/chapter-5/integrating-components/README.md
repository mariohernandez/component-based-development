# Integrating components

## Components integration overview

When integrating custom components into Drupal, there are basically two methods to follow. You can look to leverage the [UI Patterns module](https://www.drupal.org/project/ui_patterns), which allows you to map Drupal content \(nodes, blocks, etc.\) to your custom components via Drupal's field and view mode interfaces, or you can use the standard twig template files you're already familiar with to map content to your components. This method is often referred to as using "Presenter" templates. Using Presenter templates is the method we are going to follow.

### Presenter templates

Using Presenter templates essentially means that the twig templates in our theme \(e.g., `node.html.twig`, `block.html.twig`, `field.html.twig`, etc.\) will only serve as a way to tell Drupal which one of our custom components to use, and where to insert the content that a user adds or uploads to the site. You can almost think of them as playing the same role that the `.json` files did when we were building components \(i.e., they provide the content\).

### Best Practices and Considerations  <a id="presenter-templates-best-practices-and-considerations"></a>

#### Passing Field Values To Your Component  <a id="passing-field-values-to-your-component"></a>

In the Presenter template method you'll quickly discover that when passing the value of a field to your component, Drupal does not give us the raw value of that field, we're instead given a [render array](https://www.drupal.org/docs/8/api/render-api/render-arrays), and when that array is rendered, it includes a lot of default markup that will often get in the way. While we may be tempted to just pluck the value that we want from the render array and pass it to our component, it's best to try and let Drupal fully render the field to avoid caching issues.

One of the easiest ways to eliminate the extra markup that comes with a rendered Drupal field is to create a corresponding field template for the field, and modify as needed. Alternatively, we can use contrib modules, such as [Twig Field Value](https://www.drupal.org/project/twig_field_value), which gives us twig filters that safely pluck the value from a field's render array for us.

In addition to letting Drupal fully render fields, it's also best to let Drupal render the standard `content`variable in node, block, and other templates to help with cache invalidation. Although we're only passing the individual fields from the `content` variable to our component \(e.g., `content.field_image`\), we still want to trigger a full render of the `content` variable by either setting a new variable that is all of the rendered content \(i.e., \`

`\), or rendering the`content`variable, and exclude all the fields \(i.e.,`\`\). [Learn more about this situation here](https://www.drupal.org/project/drupal/issues/2660002#comment-12714453).

Lastly, in our components you may recall places where we added logic to make sure markup associated with an element in the component would not be output if the related field was empty. For example, in the Movie Card component, we have:

```php
{% if synopsis %}
  <div class="movie-card__synopsis">
    {{ synopsis }}
  </div>
 {% endif %}
```

In Drupal, fields can sometimes evaluate as not being empty, even though they are. To help ensure the value of a field is truly empty, you can include the `render` and `trim` twig filters on the field when passing it from Drupal to your component. Example:

```php
{{ content.field_image|render|trim is not empty ? content.field_image }}
```

#### Passing Drupal specific variables to components

In Drupal's twig templates you'll often see an `attributes` variable being output within the template. This variable is how core and contrib modules inject their CSS classes, an ID, or data attributes onto template markup. You'll also find `title_prefix` and `title_suffix` variables. These are used by core and contrib modules to inject markup into twig templates. A good example of this is the core Contextual Links module. If you were to remove the `attributes` , `title_prefix` , and `title_suffix` variables from a node template, for example, then the Contextual Links module would no longer have a way to add its drop-down to the display of nodes.

In some cases this may not be an issue for you, but in general it's best to plan to accommodate those Drupal-specific variables in your component markup so that when you integrate Drupal content into your components, other features can be available too.

