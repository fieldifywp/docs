---
title: Embed
description: Embeddable content field.
---

The embed field accepts the following options:

```php
'embedded_content' => [
    'label' => 'Label'
    'placeholder' => 'Placeholder text'
    'width' => '200px'
    'height' => '100px'
]
```

Another example of adding a Download Video field to the Easy Digital Downloads Downloads post type:

```php
'download_video'      => [
    'title'      => esc_html__( 'Download Video', 'arraypress-edd-blocks' ),
    'post_types' => [ 'download' ],
    'context'    => 'side',
    'fields'     => [
        'download_video' => [
            'type'        => 'embed',
            'label'       => esc_html__( 'Video URL', 'arraypress-edd-blocks' ),
            'placeholder' => esc_html__( 'Video URL', 'arraypress-edd-blocks' ),
            'width'       => 250,
            'height'      => 150,
        ],
    ],
],
```