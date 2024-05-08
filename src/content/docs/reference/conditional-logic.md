---
title: Conditional Logic
description: How to add conditional logic to fields in Fieldify.
---

Conditional logic can be added to fields using the `show_if` or `showIf` key in the field settings array. The `show_if` key takes an array of conditions that must be met for the field to be displayed.

Below is an example of how to add conditional logic to a field:

```php
register_custom_meta_box( 'my-meta-box', [
    'title'      => 'My Meta Box',
    'post_types' => [ 'post' ],
    'context'    => 'side',
    'priority'   => 'default',
    'fields'     => [
        'hideContentSetting' => [
            'default' => false,
            'control' => 'toggle',
        ],
        'content' => [
            'label'   => 'Content',
            'control' => 'text',
            'default' => 'My meta box content',
            'show_if' => [
                [
                    'field'    => 'hideContentSetting',
                    'operator' => '!==',
                    'value'    => true,
                ],
            ],
        ],
    ],
] );
```

In this example, the `content` field will only be displayed if the `hideContentSetting` field is not equal to `true`. The `show_if` key takes an array of conditions that must be met for the field to be displayed. Multiple conditions can be added to the `show_if` key to create complex conditional logic.
