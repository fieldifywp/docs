---
title: Select
description: Select dropdown field.
---

The select control has a wide range of customization options. The select control can be configured to allow for single or multiple selections, as well as the ability to search for options.

```php
'dropdown'           => [
    'type'    => 'string',
    'label'   => __( 'Dropdown', 'text-domain' ),
    'creatable' => true, // Will allow the user to create new options by typing.
    'searchable' => true,
    'multiple' => true,
    'placeholder' => 'Select an option',
    'allowReset' => true,
    'endpoint' => 'https://api.example.com/data',
    'options' => [
        [
            'value' => 'option1',
            'label' => 'Option 1',
        ],
        [
            'value' => 'option2',
            'label' => 'Option 2',
        ],
        [
            'value' => 'option3',
            'label' => 'Option 3',
        ],
    ],
    'optgroups' => [
        [
            'label' => 'Group 1',
            'options' => [
                [
                    'value' => 'option4',
                    'label' => 'Option 4',
                ],
                [
                    'value' => 'option5',
                    'label' => 'Option 5',
                ],
            ],
        ],
        [
            'label' => 'Group 2',
            'options' => [
                [
                    'value' => 'option6',
                    'label' => 'Option 6',
                ],
                [
                    'value' => 'option7',
                    'label' => 'Option 7',
                ],
            ],
        ],
    ],
],
```

## Optgroups

If the `optgroups` key is present in the options array, it will override the `options` key.

## Endpoint

If an `endpoint` key is present, it will override the `options` and `optgroups` keys and the options will be fetched from the specified URL. The endpoint should return a JSON array of objects with `value` and `label` keys. Endpoints can also return an object of optgroups with `label` and `options` keys. E.g.:

```json
[
    {
        "value": "option1",
        "label": "Option 1"
    },
    {
        "value": "option2",
        "label": "Option 2"
    }
]
```

or:

```json
{
    "groupOne": {
        "label": "Group 1",
        "options": [
            {
                "value": "option3",
                "label": "Option 3"
            }
        ]
    }
}
```