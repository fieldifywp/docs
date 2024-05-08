---
title: Custom Blocks
description: How to register custom blocks with Fieldify.
---

Fieldify makes it easy to register ServerSideRendered blocks with WordPress using only PHP. Custom blocks can be registered using the `register_custom_block` function. The function takes two arguments: the block name and an array of block settings.

```php
register_custom_block( 'namespace/block-name', [] );
```

Block registration matches WordPress core block registration with the addition of a 'panels' argument for grouping controls in the block sidebar. Attributes must specify the 'panel' key to be grouped.

Block names must include a namespace and be in kebab-case in the following format: namespace/my-block.

Below is an example of a custom block registration with a large number of custom attributes and field types:

```php

register_custom_block( 'namespace/my-block', [
	'title'           => __( 'My Block', 'text-domain' ),
	'description'     => __( 'My custom block', 'text-domain' ),
	'category'        => 'custom',
	'icon'            => [
		'src' => get_icon( 'wordpress', 'star-filled' ),
	],
	'keywords'        => [ 'my', 'block' ],
	'render_callback' => static function ( array $attributes, string $content ): string {
		return '<div class="my-block">' . ( $attributes['content'] ?? 'no content' ) . '</div>';
	},
	'style'           => plugin_dir_url( __FILE__ ) . '/assets/my-block.css',
	'supports'        => [
		'color'   => [
			'text'       => true,
			'background' => false,
		],
		'spacing' => [
			'blockGap' => true,
			'margin'   => true,
		],
	],
	'panels'          => [
		'conditional' => [
			'title' => 'Conditional',
		],
		'text'        => [
			'title' => 'Text',
		],
		'number'      => [
			'title' => 'Number',
		],
		'media'       => [
			'title' => 'Media',
		],
		'ui'          => [
			'title' => 'UI',
		],
		'custom'      => [
			'title' => 'Custom',
		],
	],
	'attributes'      => [
		'verticalAlign'      => [
			'type'    => 'string',
			'toolbar' => 'BlockVerticalAlignmentToolbar',
		],
		'horizontalAlign'    => [
			'type'    => 'string',
			'toolbar' => 'BlockAlignmentToolbar',
		],
		'hideContentSetting' => [
			'type'    => 'boolean',
			'label'   => 'Hide content setting',
			'control' => 'toggle',
			'default' => false,
			'panel'   => 'conditional',
		],
		'content'            => [
			'type'    => 'string',
			'control' => 'text',
			'default' => 'My block content',
			'panel'   => 'conditional',
			'show_if' => [
				[
					'attribute' => 'hideContentSetting',
					'operator'  => '!==',
					'value'     => true,
				],
			],
		],
		'checkbox'           => [
			'type'    => 'boolean',
			'label'   => __( 'Checkbox', 'text-domain' ),
			'control' => 'checkbox',
			'panel'   => 'ui',
		],
		'number'             => [
			'type'    => 'number',
			'label'   => __( 'Number', 'text-domain' ),
			'control' => 'number',
			'panel'   => 'number',
		],
		'unit'               => [
			'type'    => 'string',
			'label'   => __( 'Unit', 'text-domain' ),
			'control' => 'unit',
			'panel'   => 'number',
		],
		'range'              => [
			'type'    => 'number',
			'label'   => __( 'Range', 'text-domain' ),
			'control' => 'range',
			'min'     => 0,
			'max'     => 100,
			'step'    => 1,
			'panel'   => 'number',
		],
		'dropdown'           => [
			'type'    => 'string',
			'label'   => __( 'Dropdown', 'text-domain' ),
			'control' => 'select',
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
			'panel'   => 'ui',
		],
		'paragraphContent'   => [
			'type'    => 'string',
			'label'   => __( 'Paragraph content', 'text-domain' ),
			'control' => 'textarea',
			'panel'   => 'text',
		],
		'hiddenField'        => [
			'type'    => 'string',
			'label'   => __( 'Hidden field', 'text-domain' ),
			'control' => 'hidden',
			'panel'   => 'text',
		],
		'image'              => [
			'type'    => 'string',
			'label'   => __( 'Image picker', 'text-domain' ),
			'control' => 'image',
			'panel'   => 'media',
		],
		'youtubeUrl'         => [
			'type'    => 'string',
			'label'   => __( 'YouTube URL', 'text-domain' ),
			'control' => 'embed',
			'panel'   => 'media',
		],
		'galleryImages'      => [
			'type'    => 'array',
			'label'   => __( 'Gallery images', 'text-domain' ),
			'control' => 'gallery',
			'panel'   => 'media',
		],
		'iconPicker'         => [
			'type'    => 'object',
			'label'   => __( 'Select Icon', 'text-domain' ),
			'control' => 'icon',
			'panel'   => 'custom',
		],
		'colorOrGradient'    => [
			'type'    => 'string',
			'label'   => __( 'Color or Gradient', 'text-domain' ),
			'control' => 'color',
			'panel'   => 'ui',
		],
		'repeater'           => [
			'type'      => 'array',
			'label'     => __( 'Repeater', 'text-domain' ),
			'control'   => 'repeater',
			'panel'     => 'custom',
			'subfields' => [
				'item' => [
					'type'    => 'string',
					'label'   => __( 'Item', 'text-domain' ),
					'control' => 'text',
				],
			],
		],
	],
] );
```

## Attributes

Block attributes are defined as an associative array with the attribute name as the key and an array of options as the value.

## Icons

Icons can be added to blocks using the 'icon' key. The 'icon' key can be a string for dashicons or an array with a 'src' key for custom SVG icons:

```php
'icon' => 'admin-site',
```

Or:

```php
'icon' => [
    'src' => get_icon( 'wordpress', 'star-filled' )
],
```

## InnerBlocks

InnerBlocks are supported and can be added to blocks using the 'template' and 'template_lock' keys:

```php
'template'      => [
    [ 'core/image', [] ],
    [ 'core/paragraph', [] ],
],
'template_lock' => false,
```
