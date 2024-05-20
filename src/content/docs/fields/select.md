---
title: Select
description: Select dropdown field.
---

The select control has a wide range of customization options. The select control can be configured to allow for single or multiple selections, as well as the ability to search for options.

```php
'countries'           => [
    'type'    => 'select',
    'label'   => __( 'Countries', 'text-domain' ),
    'creatable' => false, // Setting to true allows users to enter new options.
    'searchable' => true,
    'multiple' => true,
    'placeholder' => 'Select an country',
    'allowReset' => true,
    'endpoint' => 'company/v1/countries', // Relative to the WordPress REST API URL.
    'options' => [
        [
            'label' => 'Optgroup 1',
            'options' => [
                [
                    'value' => 'option-1-1',
                    'label' => 'Option 1.1',
                ],
                [
                    'value' => 'option-1-2',
                    'label' => 'Option 1.2',
                ],
            ],
        ],
        [
            'value' => 'option-2',
            'label' => 'Option 2',
        ],
        [
            'value' => 'option-3',
            'label' => 'Option 3',
        ],
        [
            'value' => 'option-4',
            'label' => 'Option 4',
        ],
    ],
],
```

## Options

Options support a combination of standard options and optgroups. Standard options should contain a `value` and a `label` key. Optgroups should be an array of objects with `label` and `options` keys as shown in the example above.

## Endpoint

The endpoint value should be relative to the WordPress REST API URL. The full domain does not need to be provided. E.g, setting the endpoint to:

```php
'endpoint' => 'company/v1/countries', // Relative to the WordPress REST API base URL.
```

Will fetch the options from:

```php
https://example.com/wp-json/company/v1/countries
```

If an `endpoint` key is present, it will be merged with the `options` and the additional options will be fetched from the specified URL. The endpoint should return a JSON array of objects with `value` and `label` keys. Endpoints can also return an object of optgroups with `label` and `options` keys. E.g.:

```json
[
	{
        "label": "Optgroup 1",
        "options": [
            {
                "value": "option-1-1",
                "label": "Option 1.1"
            },
            {
                "value": "option-1-2",
                "label": "Option 1.2"
            }
        ]
    },
    {
        "value": "option-2",
        "label": "Option 2"
    },
    {
        "value": "option-3",
        "label": "Option 3"
    }
]
```