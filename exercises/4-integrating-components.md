# Component-based Development with Drupal 8

## 3 - Integrate Components with Drupal

We are now ready to integrate the Speaker component with Drupal so it inherits all the markup and styles we wrote on the first step of this process.

### 3.1 Inspecting the Speaker Node
Let's take a look at the Basic page node we created previously now that we have enabled the Badcamp theme.
As you can see, the node renders but it lacks all the styles and markup we created when we built the Speaker component.  The reason for this is that Drupal still does not know about the Speaker component.  In this section we will take all the steps needed to make Drupal aware of our component and make the necessary configuration updates to complete the component integration.

* While displaying the Speaker node, right-click on it and choose **Inspect** or **Inspect element** from your browser's dialog box

* If you are looking at the _Elements_ tab within the browser's code inspector, you will see all the markup drupal is printing to render the component.  In addition, you will notice several lines of green information which normally you don't see.  The green text is Twig debbuging information which is possible to see when we configured twig debugging in the previous section.

* Having access to Twig's debugging information allows us to easily identify which templates Drupal is using to render our content.

* I am particularly interested in the block of code that looks like this:
![Twig debugging info](/assets/debug.png)

* Notice the template named `paragraph.html.twig`.  The **X** next to it indicates this is the paragraph template Drupal is using to render our component.
Also notice the path I have outlined in red.  This is telling us where that template is coming from in the event we want to override it.


### 3.2 Creating a custom twig template suggestion

As we saw above, Drupal is using `paragraph.html.twig` to render the Speaker component.  The problem is that the default paragraph template will not work to render the component properly becaue it lacks th markup necessary to structure the component.

Luckily for us, we can customize the paragraph template to control how the Speaker component is rendered. Although we can easily navigate to the path shown in the debugging screenshot above, it is not recommended to override Core or Module's templates.  Instead, we are going to create a copy of the paragraph twig template inside our theme.

#### 3.2.1 Copy and rename Paragraph template into Badcamp theme

* Navigate to `/modules/contrib/paragraphs/templates/

* Copy `paragraph.html.twig` into `/themes/custom/badcamp/src/templates/paragraphs`.  **Note**: The `paragraphs` folder in the path is not required, but it's a great way to organize your templates if you intend to have many of them in your theme.

* Rename the template `paragraph--speaker.hteml.twig`.  If you are wondering why that name or how do we know we can use that name, take another look at the debugging screenshot and you will notice that in addition to providing the current template name being used to render the component, Drupal also offers suggestions for template names that would be more specific to the content we are working with.  In our case, the `paragraph--speaker.html.twig` template, will ensure it only affects the Speaker content and not other paragraph types we may create later on.

* Clear Drupal's cache to ensure Drupal recognizes the new twig template we just created

* If you inspect your code again, you should see our newly created paragraph template being used to render the Speaker component:
![Twig debugging info](/assets/debug2.png)



---

Previous exercise:  [Prepare Drupal for Components Integration](3-prepare-drupal.md)

[Back to beginning](../README.md)
