---
title: Code
description: Code input field.
---

Code input fields can be created with the following configuration:

```php
'additionalCss'      => [
    'type'        => 'code',
    'language'    => 'css',
    'panel'       => 'custom_code',
    'value'       => $options['additionalCss'] ?? '',
    'label'       => esc_html__( 'Additional CSS', 'fieldify' ),
    'description' => esc_html__( 'Add additional CSS to your site.', 'fieldify' ),
    'placeholder' => '',
    'rows'        => 12,
    'permission'  => 'administrator',
]
```