---
title: Repeater
description: Repeater field.
---

The repeater control allows you to create a set of sub-fields which can be repeated as needed. Repeater controls allow advanced layouts and are useful for creating flexible content.

```php
'faqs' => [
    'type'      => 'repeater',
    'label'     => esc_html__( 'FAQ', 'fieldify' ),
    'sortable'  => true,
    'add'       => esc_html__( 'Add New FAQ', 'fieldify' ),
    'remove'    => esc_html__( 'Remove FAQ', 'fieldify' ),
    'subfields' => [
        'question' => [
            'type'        => 'text',
            'placeholder' => esc_html__( 'Question', 'fieldify' ),
        ],
        'answer'   => [
            'type'        => 'textarea',
            'placeholder' => esc_html__( 'Answer', 'fieldify' ),
            'rows'        => 3,
        ],
    ],
],
```

## Subfields

Subfields accept the same configuration options as regular fields. You can add any field type as a subfield, including another repeater field.
