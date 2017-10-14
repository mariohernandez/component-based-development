# Component-based Development with Drupal 8

## 2 - Prepare Drupal for Components Integration
Now that our components are built, we can move on to Drupal to build the infrastructure necessary to integrate our components.

### Enable Modules
Enable the following modules and their dependencies (if any):
* Devel and Kint
* Paragraphs


### Create Paragraph Types (Entities)
We will use the paragraphs module to integrate our components into Drupal by creating custom paragraph types.  However, components can be integrated using other entities types such as custom blocks, custom content types, etc.


* Create a **Speaker** paragraph type
  * Login to your drupal site with administrator previleges
  * Click **Structure | Paragraphs types**
  * Click the **Add Paragraphs type** blue button

* Add the following fields and properties to the Speaker paragraph type:

Field label | Field type      | Field machine name     | Notes
----------- | --------------- | ---------------------- | ----------------
Image       | image           | field_speaker_image    | Limited 1
Name        | plain text      | field_speaker_name     |
Role        | plain text      | field_speaker_role     |
Bio         | text long       | field_speaker_bio      |
Social Icon | link            | field_speaker_social   | Unlimited



### Add the Speaker paragraph type as an entity reference field to Basic Page Content type

Paragraphs on their own are useless.  In order to make use of our Speaker paragraph type we need to add it as an entity reference field to a content type or custom block.  For the purpose of this training, we will use the **Basic Page** content type.

1. Click **Structure | Content Types**

2. Click **Basic Page**

3. Click the **Manage Fields** button

4. Click the **Add field** blue button

5. From the _Add a new field_ dropdown, select **Paragraph**

6. In the label field type **Speaker** and click **Save and continue**

7. Leave _Type of item to reference_ as **Paragraph**

8. Change the _Allowed number of values_ to **Limited 1**

9. Click **Save field settings**

10. Under the _Reference Type_ fieldset, check the box next to **Speaker** and click **Save Settings**


### Create a new node of type Basic Page

Now that we have added the Speaker paragraph type to the Basic Page content type, let's create a new node of type Basic Page and populate all the fields available.

Our component is rendered however we still need to do a little more work so Drupal knows we have a component available we want to use.


### Enable Components Libraries Module

In order for Drupal to be able to use the Speaker component we created, we need to enable the _Components Libraries_ module, which allows us to create a namespace for our theme.  Using a namespace makes it easier to reference twig templates that are not in the default **/templates** directory Drupal typically looks for twig templates in.

Our theme namespace typically matches the name of our theme.  In our case, the namespace will be `@badcamp`.  More on this later.

Go ahead and enable the _Components Libraries_ mdoule.


### 2.1 - Enable Twig debugging and disable Drupal's cache

While integrating components we work with Drupal twig templates to manipulate markup and Kint to print variables we need to pass to our component.  Before we start we need to disable CSS and JavaScript aggregation which Drupals comes with it turned on by default.  We also need to enable twig debugging.  More on this later, for now follow these steps:


### 2.1.1 Disable Drupal CSS/JS Aggregation

* Click **Configuration | Performance**

* Clear the _Aggregate CSS files_ and _Aggregate JavaScript files_ checkboxes

* Click **Save Configuration**


### 2.1.2 Disable Drupal Caching and enable twig debuggin

Follow the instructions on this article to [disable drupal caching and enable twig debugging](https://www.drupal.org/node/2598914).


### 2.1.3 - Enable the custom theme (i.e. Badcamp)

Enable the Badcamp theme before proceeding.

* Click **Appearance**

* Click on **Install and set as default** next to the Badcamp theme (or, your own custom theme)


---

Previous exercise:  [Building components](2-building-components.md)

Next exercise:  [Integrate Components](4-integrating-components.md)
