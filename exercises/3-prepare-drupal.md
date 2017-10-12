# Component-based Development with Drupal 8

## 2 - Prepare Drupal for Components Integration
Now that our components are built, we can move on to Drupal to build the infrastructure necessary to integrate our components.

### Enable Modules
Enable the following modules and their dependencies (if any):
* Devel and Kint
* Paragraphs


### Create Paragraph Types (Entities)

Create a **Card** paragraph type with the following fields:

Field label | Field type      | Field machine name  | Notes
----------- | --------------- | ------------------- | ----------------
Image       | image           | field_card_image    | Configure with responsive image style "**card**"
Title       | plain text      | field_card_title    |
Body        | text long       | field_card_body     |
Learn more  | link            | field_card_cta      |

Create a **Social Media Icons** paragraph type with the following fields:

Field label | Field type      | Field machine name  | Notes
----------- | --------------- | ------------------- | ----------------
Social Icon | link            | field_social_icon   | Make link text required


---

Previous exercise:  [Building components](2-building-components.md)

Next exercise:  [Integrate Components](4-integrating-components.md)
