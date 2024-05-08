---
title: Custom Settings
description: How to register custom plugin settings panels with Fieldify.
---

Fieldify allows you to register custom settings panels that are shown in the block editor using only PHP and a few lines of code.

Below is an example of how to register a custom settings panel with Fieldify:

```php
register_custom_settings('my-settings', [
	'title' => 'My Settings',
	'icon' => 'dashicons-admin-generic',
	'fields' => [
		'content' => [
			'type' => 'string',
			'default' => 'My settings content',
		],
	],
]);
```
