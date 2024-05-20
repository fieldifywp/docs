---
title: Search
description: Search dropdown field.
---

The search control allows the user to perform a search from a REST API endpoint.

```php
'users'           => [
    'type'    => 'search',
    'label'   => __( 'Users', 'text-domain' ),
    'placeholder' => 'Begin typing to search users...',
    'endpoint' => 'company/v1/users', // Relative to the WordPress REST API URL.
],
```

## Search

The search control passes the typed characters to the endpoint as a query parameter. The query parameter is named `search`. E.g.:

```php
register_rest_route( 'company/v1', '/users', [
    'methods'  => 'GET',
    'callback' => 'get_users',
    'args'     => [
        'search' => [
            'type' => 'string',
        ],
    ],
] );

function get_users( $request ) {
    $search = $request->get_param( 'search' );
    $users = [];

    // Perform search logic here...

    return $users;
}
```

## Response

Endpoints should return a JSON array of objects with `value` and `label` keys. Endpoints can also return an object of optgroups with `label` and `options` keys. E.g.:

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