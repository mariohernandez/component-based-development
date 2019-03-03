# Content Types

In the previous set of exercises we built all the components our movie site needs. Now we are going to build the content types which will provide the data to feed the components.

## Content models

Below you will see the content models for Movie and Landing Page content types. Using the step by step instructions at the bottom of this page, create both content types using the fields details outlined in the respective content model tables.

{% tabs %}
{% tab title="Movie content type" %}
| Label | Type | Machine name | Allowed \# values |
| :--- | :--- | :--- | :--- |
| Synopsis | Text \(formatted, long, with summary\) | `body` | Limited 1 |
| Cover Image | Image | `field_cover_image` | Limited 1 |
| Avg. viewer rating | List \(Integer\) | `field_average_viewer_rating` | Limited 1 |
| Genre | Entity Reference | `field_genre` | Unlimited |
| MPAA Rating | List \(Text\) | `field_mpaa_rating` | Limited 1 |
| Promo Sentence | Text | `field_promo_sentence` | Limited 1 |

### **Average Viewer Rating** allowed values

```text
1|1 Star
2|2 Stars
3|3 Stars
4|4 Stars
5|5 Stars
```

_Make 3 Stars the default value._

### **Genre settings**

| **Entity to reference** | Referenced type |
| :--- | :--- |
| Taxonomy term | Genre vocabulary |

### **MPAA Rating** allowed values

```text
G|G
PG|PG
PG-13|PG-13
R|R
NC-17|NC-17
```

_Make PG the default value._
{% endtab %}

{% tab title="Landing Page content type" %}
| Label | Type | Machine name | Allowed \# values |
| :--- | :--- | :--- | :--- |
| Featured Movie | Entity Reference | `field_featured_movie` | Limited 1 |
| Movie List | Entity Reference Revisions | `field_movie_list` | Unlimited |

### **Featured Movie &** Movie List settings \(respectively\)

| **Type to reference** | Reference type |
| :--- | :--- |
| Content | Movie |
| Paragraph | Movie Genre List |
{% endtab %}
{% endtabs %}

