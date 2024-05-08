---
title: Custom Meta Boxes
description: How to register custom meta boxes with Fieldify.
---

Fieldify makes it easy to register custom meta boxes in the block editor using only PHP. Custom meta boxes can be registered using the `register_custom_meta_box` function. The function takes two arguments: the meta box name and an array of meta box settings.

```php
register_custom_meta_box( 'custom-meta-box-name', [] );
```

Meta box registration matches WordPress core meta box registration with the addition of a 'fields' argument.

Below is an example of how to register a custom meta box with some custom fields:

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

## Fields

Meta box fields are defined as an associative array with the field name as the key and an array of options as the value.