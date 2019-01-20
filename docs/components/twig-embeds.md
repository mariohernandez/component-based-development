---
layout: default
title: Twig Embeds
parent: Components
nav_order: 4
---

# Twig Embeds
{:.no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

The challenge we face is having control of the markup while adhering to Drupal's best practices for rendering content.  When the time to integrate a component with Drupal comes, often times using `include` statements will do the job, but there are times when we want to modify content or markup before Drupal renders it and include statements don't allow for this.  We could use the extend statements but these could also be limiting.  In these situations the best option is to use Twig's `embed` statements, which combines both, include and extend functionality.  Let's see an example.

```php
<article class="card
  {{ attributes ? attributes.class }}"
  {{ attributes ? attributes|without(class) }}>
  {{ title_prefix }}
  {{ title_suffix }}
  ...
  {% block card_content %}
    {{ card_content }}
  {% endblock %}
</article>
```

We've declared a [twig block](https://twig.symfony.com/doc/2.x/tags/extends.html) (not the same as Drupal's blocks), in which we are passing the card_content variable to print some content.  The block on its own does nothing.  Content will be rendered normally even if we do nothing with the block.  The advantages of the twig block come when it's time to integrate the card component with Drupal.

```php
{% embed '@components/card/card.twig' with {
    attributes: attributes,
    title_prefix: title_prefix,
    title_suffix: title_suffix,
    heading: heading,
    cover_image: content.field_main_image|render|trim is not empty ? content.field_main_image,
    card_content: content.card_content
  } only
%}
  {% block card_content %}
    <h3>This is a custom title</h3>
    {{ card_content }}
  {% endblock %}
{% endembed %}
```

This is a simple example of how we can use twig blocks to alter or update content within a block before rendering.  In this example we've added a new title above the `card_content` which the original component did not provide.  There are so many other things we can do when we wrap things in twig blocks which gives us tremendous flexibility and control.
