# Movie Card

The Movie Card component is a more advanced component compared to the ones we've built thus far. Here we will start reusing previously built components by using twig's [Include](https://twig.symfony.com/doc/2.x/tags/include.html) and [Embed](https://twig.symfony.com/doc/2.x/tags/embed.html) statements.

By now you should know the drill, inside **src/components/** create a new directory \(which matches the name of the component\), and inside that directory add some files.

### Component Data

1. Inside **nitflex\_dev\_theme/src/components/** create a new directory called **movie-card**
2. Inside the **movie-card** directory create a new file called **movie-card.yml**.
3. Inside `movie-card.yml` add the following code:

{% embed url="https://gist.github.com/mariohernandez/8cebe40f5cd6c5e274278896adb3c08f" caption="" %}

By looking at the prototype we see that the landing page shows a listing of movies. Given the hierarchy of content we see the page already has a **h1** and **h2** in the featured movie section. Each movie category also uses a heading which will be h3, so using a h4 as the heading\_level for the title of the movie in the card makes sense.

### Component Styles

1. Inside the **movie-card** directory create a new file called **movie-card.scss**.
2. Inside `movie-card.scss` add the following code:

{% embed url="https://gist.github.com/mariohernandez/1ac91281710715139eb8226c18649962" caption="" %}

Quite the styles huh? 😄

1. Inside the **movie-card** directory create a new file called **movie-card.twig**.
2. Add the following code:

{% embed url="https://gist.github.com/mariohernandez/fa3a6a277b15f7d85d1ae6f5bbce2294" caption="" %}

* Notice we are using **include** statements to nest existing components into the movie-card.  This is a simple example of how we can reuse previously built components.
* The image and rest of content has been split into different containers \(`movie-card__cover-image` & `movie-card__content`\). This is always a good practice as it provides flexibility to move multiple content fields around at once should we have the need to do so.
* Also notice we are reusing the heading component and simply changing its heading level and applying a unique class when inside the movie card. This provides context and allows us to style this heading independently of other headings in the page.
* Finally, we are introducing the concept of [Twig Blocks](https://twig.symfony.com/doc/2.x/tags/extends.html), \(not the same as Drupal blocks\), to provide a way to change how content is rendered when we integrate this component with Drupal. More on how Twig Blocks give us more flexibility at time of rendering content later.

## Working with Drupal Libraries

Let's take a break from building components for a moment to learn about Drupal Libraries. Drupal libraries is how we add CSS and Javascript to content in Drupal. Proceed to Drupal Libraries.

