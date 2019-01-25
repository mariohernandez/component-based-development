# Introduction

This is a training workshop intended to teach you everything you need to know to successfully build and integrate components with Drupal 8.

Component based development is typically broken down in 3 parts:

1. Building stand-alone components in Twig using KSS Node.
2. Building Drupal's back-end
3. Integrating components with Drupal.

## Why Components?  <a id="why-components"></a>

Building a website using the component-based approach can dramatically improve collaboration among teams, making code more reusable, flexibility, and long term maintenance of your website becomes easier. We will work on building a living style guide which will become the single source of truth for markup, styles and javascript behaviors.

Components promote re-usability which in turn eliminates code repetition. Think of components as building blocks or legos which you will build once and be able to use them over and over throughout your website.

## Topics this training covers  <a id="topics-this-training-covers"></a>

**Components**: Contrary to the top-to-bottom theming we have been doing for years, components allow us to build and theme our websites by breaking it down into pieces. This presents several advantages over traditional theming including reusability, better CSS structure, limited CSS nesting, less risk of regressions and more.

**Style-guide**: Style-guides are nothing new, they have been around for years, but now they are essential for documenting your component building process and showcasing yoru component's library. In this training we will use [KSS Node](https://github.com/kss-node/kss-node), a modern documentation syntax for CSS, which is intended to be readable by humans and machines. KSS Node allows us to create a living style guide which we will use to catalog components. These components will be the single source truth for markup, styles and javascript behaviors which Drupal will use when rendering our website. There are other style-guide systems you may have heard of such as Pattern Lab, Fractal, Storybook, and others. They all offer the same benefits with sometimes different approaches.

**Twig**: Drupal 8's new templating system is a themer's best friend. Twig’s easy to read and learn syntax can be leveraged to write powerful logic in your theme without resorting to traditional PHP templates.

**BEM and SMACSS**: While building components we are given the opportunity to architecture markup in the best way possible to ensure our components are as flexible and lightweight as possible. Using BEM to name our CSS classes and SMACSS for structuring our theme we can achieve tremendous control and organization of our themes, markup and styles.

**Theme Generator**: Part of this training involves building a Drupal 8 theme. This can be a time consuming process if we had to do by hand, not to mention it could turn into hours of troubleshooting issues. Luckily, Mediacurrent \(the company I work for\), has created a great automation tool called [Theme Generator](https://github.com/mediacurrent/theme_generator_8), which creates a new theme for you in matter of minutes by running a couple of commands. After creating a new theme with the theme generator, you will have an advanced, ready for production theme which includes automated workflows for compiling code, building style-guide, compressing images, and checking for code accuracy and best practices compliance.

It’s worth noting that the scaffold provided by the theme generator can also be used in a non-drupal project.

**NPM, Node and Gulp**: The theme generator is built on Node and offers the latest plugins for today’s front-end applications including: Node Package Manager \(NPM\), Gulp, ESLint, Babel, and many more.

## Who is this training for?  <a id="who-is-this-training-for"></a>

This training is intended for front and back-end developers who are building websites in Drupal 8. A good understanding of HTML, Twig, CSS/Sass and command line is recommended. After this training, you will have a solid understanding of how to build and theme components in a living style guide and be able to integrate those components with Drupal with a single source of truth for markup, styles, and javascript.

## Training requirements  <a id="training-requirements"></a>

* Laptop computer with latest versions of your favorite browser
* Text editor of your choice
* Basic knowledge of HTML and CSS is required
* Good understanding of Twig is helpful but not required

