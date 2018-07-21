# Component-based Development with Drupal 8

**NOTE**:  This exercise is not complete.  Comeback soon for complete instructiosn on getting this component into Drupal.


## Integrating Featured Speakers

### Create new content type

* Create a new content type, **Featured Speakers**

* Click **Manage Fields**

* Add an entity reference field and label it **Featured Speakers**

* Set the field type as **Paragraph** and set it to use _Unlimited_ number of values.

* Select **Speaker** as the paragraph to reference

* Create a new Featured Speakers node by going to **Content | Add Content | Featured Speakers**, and add multiple speakers instances


### Create new custom twig template suggestion

The same as we did on previously to create a custom paragraph template for the Speaker paragraph type, this time we will create one for the content type Featured Speakers.

* Create a new directory as follows: `/themes/custom/shiny/src/templates/content/`
**Note**:  We obtained the template name above by inspecting the Featured Speakers node.  Alternatively, you could had copied the `node.html.twig` template from Drupal core and rename it _node--feature-speakers.html.twig_.


### Customize new twig template

Paste the following code into the new twig template.
```twig
{% if content.field_featured_speakers %}
  {% set speakers = [] %}
  {% for speaker in content.field_featured_speakers['#items'] %}
      {% set photo = speaker.entity.field_speaker_photo|field_value %}
      {% set name = speaker.entity.field_speaker_name.value %}
      {% set bio = speaker.entity.field_speaker_bio.value %}
      {% set speakers = speakers|merge([{'photo': photo, 'name': name, 'bio': bio}]) %}
  {% endfor %}
{% endif %}

<section{{ attributes.addClass(class) }}>
  <div{{ content_attributes }}>
    {%
      include '@shiny/featured-speakers/featured-speakers.twig' with {
        'items': speakers,
      } only
    %}
  </div>
</section>
```

* First we are checking whether there is content in the _field_featured_speakers_ field

* Then we are creating an empty array variable which we will populate later

* We look though the items array (created by multiple speaker instances), and then set a variable with the value of each field inside the Speaker's card

* Lastly, we populate the empty array variable and pass its content to the component's **include** template as _speakers_.

The featured Speaker node is starting to take shape but it does not quite look like the mockup we saw earlier.

### Components variations in Drupal

There are many ways in which we can achieve a component variation but I think the best way and probably recommended is using a **View Mode**.

We will create a view mode, not on the content type, but the Speaker paragraph type.  Reason for doing this is that the paragraph type is the one with all the speaker fields and creating a view mode there will allow us to control which fields we want to limit.

* Click **Structure | Paragraphs Types | Speaker | Manage Display**

* Scroll down and expand **Custom Display Settings**

* Click **Manage view modes**

* Scroll to the Paragraphs section and click **Add new Paragraph view mode**

* For _Name_ type **Featured Speakers**

* Click **Save**


### Configure View Mode

* Click **Structure | Paragraphs Types | Speaker | Manage Display**

* Scroll down and expand _Custom Display Settings_, then check the box next to **Featured Speakers** and click **Save**

* Scroll up and click the **Featured Speakers** view mode

* Move the **Role** and **Social Icons** fields to the _Disabled_ group

* Click **Save**

So we have our view mode in place and we have configured it so the role and social icons fields will not be rendered when using this view mode.  Now let's complete the setup by configuring the Featured Speakers so it uses the new view mode.

### Making use of Featured Speakers View Mode

* Click **Structure | Content Types | Featured Speaker | Manage Display**

* Ensure the format for _Featured Speakers_ field is **Rendered entity**

* Click the cog at the end of the _Featured Speakers_ field and select the **Featured Speakers** view mode from the dropdown, then click **Update**

* Click **Save**


The Featured Speakers page should now be rendered with the limited fields for speakers as well as a new look and feel for each speaker card.


---

Previous exercise:  [Components variations](7-components-variations.md)

[Back to beginning](../README.md)
