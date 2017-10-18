# Component-based Development with Drupal 8

## Integrating Featured Speakers

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
