---
title: Text
description: Text input field.
---

The text field is a standard input field that allows users to enter text. It is used for single-line text input.

```php
'title' => [
    'type'        => 'text',
    'panel'       => 'site_identity',
    'option'      => 'site',
    'label'       => esc_html__( 'Site Title', 'blockify-pro' ),
    'value'       => get_option( 'blogname' ),
    'description' => esc_html__( 'Enter your site title.', 'blockify-pro' ),
],
```

## Input types

Input type can be provided using the `inputType` key. The default input type is `text`. Supported input types include all valid HTML5 input types:

- `text`
- `email`
- `url`
- `tel`
- `date`
- `time`
- `password`
- `file`
