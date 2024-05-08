---
title: Image
description: Image field.
---

The image field allows you to upload an image.

```php
'my_image' => [
    'type' => 'image',
    'label' => 'Image',
    'description' => 'Upload an image.',
    'size' => 'thumbnail',
    'clickable' => true,
    'add' => 'Add Image',
    'remove' => 'Remove Image',
    'default' => 123, // Media ID.
],
```

An example of adding a site icon field with admin permissions:

```php
'site_icon'          => [
    'type'        => 'image',
    'panel'       => 'site_identity',
    'option'      => 'site',
    'label'       => esc_html__( 'Site Icon', 'blockify-pro' ),
    'value'       => get_option( 'site_icon' ),
    'description' => esc_html__( 'Site Icons are what you see in browser tabs, bookmark bars, and within the WordPress mobile apps. Upload one here! Site Icons should be square and at least 512 × 512 pixels.', 'blockify-pro' ),
    'permission'  => $admin_role,
],
```