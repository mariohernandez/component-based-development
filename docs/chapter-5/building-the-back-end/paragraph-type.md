# Paragraph Type

To create the list of movies for each category we will use a paragraph type. The movie collection will in fact be a collection of paragraphs.

Using the table below, create a new paragraph type called **Movie Genre List**.

| Label | Machine name |
| :--- | :--- |
| Movie Genre List | `genre_list` |

Add the following fields and settings to the paragraph type:

| Field label | Machine name | Field type |
| :--- | :--- | :--- |
| List title | `field_list_title` | Text \(Plain\) |
| Movie list view | `field_movie_list` | Views Reference |

For the Movie list view field, set the following configuration:

| Type to reference | Default Value | View Display | Preselect view option |
| :--- | :--- | :--- | :--- |
| View | Movie List view, List via Term ID | Block | Movie list |
