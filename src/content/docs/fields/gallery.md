---
title: Gallery
description: Image gallery field.
---

The gallery field accepts the following options:

```php
'myGallery' => [
    'type' => 'gallery',
    'label' => 'My Gallery',
    'add' => 'Add images',
    'remove' => 'Remove image',
    'size' => 'thumbnail',
    'columns' => 4,
    'icon_size' => 16,
]
```

## Example

Here is how you would add an image gallery meta box to an Easy Digital Downloads download:

```php
'download_gallery'    => [
    'title'      => esc_html__( 'Download Gallery', 'arraypress-edd-blocks' ),
    'post_types' => [ 'download' ],
    'context'    => 'side',
    'fields'     => [
        'download_gallery' => [
            'type'      => 'gallery',
            'sortable'  => true,
            'columns'   => 3,
            'icon_size' => 14,
        ],
    ],
],
``` 