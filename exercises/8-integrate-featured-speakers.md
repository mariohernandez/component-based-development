# Component-based Development with Drupal 8

**NOTE**:  This exercise is not complete.  Comeback soon for complete instructiosn on getting this component into Drupal.


## Integrating Featured Speakers

* In Drupal, let's create a new content type, **Featured Speakers**

* Add a _Paragraph Field_ and select **Speaker** as the paragraph to reference

* Select unlimited for the number of values to ensure we are able to add multiple speakers to the page.


```
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
      include '@badcamp/featured-speakers/featured-speakers.twig' with {
        'items': speakers,
      } only
    %}
  </div>
</section>
```

---

Previous exercise:  [Components variations](7-components-variations.md)

[Back to beginning](../README.md)
