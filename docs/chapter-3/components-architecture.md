# Components architecture

Components are typically saved in a project's theme and although they will work regardless of where in your theme they are stored, It is recommended to group them in folders. This not only provides organization as your catalog of components grows, but it also makes each component completely reusable and even portable as all the pieces of a component are encapsulated in a single folder.

Here's a typical architecture of a component. Your particular workflow may vary.

```text
├─ theme-name/
│  ├── src/
│    ├── components/
│      ├── card/
│        ├── card.scss
│        ├── card.es6.js
│        ├── card.json
│        └── card.twig
```

A component is typically broken down in four parts:

1. **Markup:** Markup for a component is written using Twig, Drupal's new templating engine. Naming convention for a component twig template looks like this: **card.twig** \(where **card** is the name of the component\).
2. **Data:** For the purpose of the style-guide, we need dummy or stock data, which is normally provided in **JSON** format. 
3. **Styles:** These are written in CSS or Sass.
4. **Behavior/animation:** The component's behaviors are usually handled with JavaScript.

{% hint style="info" %}
_Not every component will need a javascript file_.
{% endhint %}

