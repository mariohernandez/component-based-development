# Image Styles

## Create the following **Image Styles**:

| Name | Machine name | Dimensions | Effect |
| :--- | :--- | :--- | :--- |
| 16:9 285x160 | `16_9_285x160` | 285 x 160 | Scale and Crop |
| 16:9 450x253 | `16_9_450x253` | 450 x 253 | Scale and Crop |
| 16:9 570x320 | `16_9_570x320` | 570 x 320 | Scale and Crop |
| 16:9 900x506 | `16_9_900x506` | 900 x 506 | Scale and Crop |
| 16:9 1200x675 | `16_9_1200x675` | 1200 x 675 | Scale and Crop |
| 16:9 2200x1238 | `16_9_2200x1238` | 2200 x 1238 | Scale and Crop |

## Create the following **Responsive Image Styles**:

| Name | Machine name | Breakpoint Group | Fallback Image |
| :--- | :--- | :--- | :--- |
| Movie Card | `movie_card` | Responsive Image | 16:9 450x253 |
| Hero | `hero` | Responsive Image | 16:9 1200x675 |

## Apply the following configuration under **1X Viewport Sizing**

| **Movie Card** |  |
| :--- | :--- |


| Type | _Select multiple image styles and use the sizes attribute_. |
| :--- | :--- |


| Sizes | `(min-width: 768px) 50vw, (min-width: 1040px) 33vw, (min-width: 1200px) 25vw, 100vw` |
| :--- | :--- |


<table>
  <thead>
    <tr>
      <th style="text-align:left">Image Styles</th>
      <th style="text-align:left">
        <p><em>16:9 1200x675</em></p>
        <p><em>16:9 2200x1238</em></p>
        <p><em>16:9 285x160</em></p>
        <p><em>16:9 450x253</em></p>
        <p><em>16:9 570x320</em></p>
        <p><em>16:9 900x506</em></p>
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

<table>
  <thead>
    <tr>
      <th style="text-align:left">Fallback Image Style</th>
      <th style="text-align:left">
        <em>16:9 450x253</em>
      </th>
    </tr>
  </thead>
  <tbody></tbody>
</table>

{% hint style="info" %}
The beauty of these image styles is that they are aspect ratio-based rather than specific image dimensions. When possible, this is recommended as this makes the image styles more reusable and therefore reduces the number of image styles to be created and maintained.
{% endhint %}

