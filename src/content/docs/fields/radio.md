---
title: Radio
description: Radio input field.
---

Checkbox fields can be created with the following configuration:

```php
'myField' => [
    'type'    => 'radio',
    'buttons' => true, // Renders a button group for the UI.
    'label'   => 'Radio Field',
    'help'    => 'This is a radio field.'
    'default' => 'option1',
    'options' => [
        [
            'value' => 'option1',
            'label' => 'Option 1',
        ],
        [
            'value' => 'option2',
            'label' => 'Option 2',
        ]       
    ],
],
```