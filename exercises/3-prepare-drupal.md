# Component-based Development with Drupal 8

## 2 - Prepare Drupal for Components Integration
Now that our components are built, we can move on to Drupal to build the infrastructure necessary to integrate our components.

### Enable Modules
Enable the following modules and their dependencies (if any):
* Devel and Kint
* Paragraphs


### Create Paragraph Types (Entities)

Create a **Speaker** paragraph type with the following fields:

Field label | Field type      | Field machine name     | Notes
----------- | --------------- | ---------------------- | ----------------
Image       | image           | field_speaker_image    | Image style "**speaker**"
Name        | plain text      | field_speaker_name     |
Role        | plain text      | field_speaker_role     |
Bio         | text long       | field_speaker_bio      |
Social Icon | link            | field_speaker_social   | Unlimited


---

Previous exercise:  [Building components](2-building-components.md)

Next exercise:  [Integrate Components](4-integrating-components.md)
