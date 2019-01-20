---
layout: default
title: Components Architecture
parent: Components
nav_order: 1
---

# Components Architecture
{:.no_toc}

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

Components are typically saved in a project's theme and although they will work regardless of where in your theme they are stored, it is recommended to group them in folders. This not only provides organization as your catalog of components grows, but it also makes each component completely reusable and even portable as all the pieces of a component are encapsulated in a single folder.
Here's a typical architecture of a component. Your particular workflow may vary.

```
+-- ..
|-- Parent folder
|
|-- components
|   |-- button
|       |-- button.js
|       |-- buttons.md
|       |-- button.twig
|       |-- button.scss
|       +-- button.es6.yml
|
+-- ..
```

A component is typically broken down in four parts:

**Markup**:
Markup for a component is written using Twig, Drupal's new templating engine. Naming convention for a component twig template looks like this: card.twig (where card is the name of the component).

**Data**:
For the purpose of the style-guide, we need dummy or stock data, which is normally provided in YAML format.

**Styles**:
These are written in CSS or Sass.

**Behavior/animation**:
The component's behaviors are usually handled with JavaScript.

**Annotations (Optional)**:
Annotations are used to document the details of a component and are typically written in markdown format.  This is extremely useful to developers because it outlines technical details of a pattern such as variable names, attributes, data structure, etc.


**NOTE**: Not every component will need a javascript file.
