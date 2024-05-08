---
title: Utilities
description: How to use Fieldify utilities.
---

Fieldify provides a set of utility functions for use in your project. The following utilities are available:

### get_icon

The `get_icon` utility function returns the SVG markup for a given icon name and set.

- **Parameters**
  - `$set` (string) - The icon set to use.
  - `$name` (string) - The name of the icon.
  - `$size` (string|int) - The size of the icon.

The following icon sets are available by default:

- `wordpress`
- `social`

The `get_icon` function is used as follows:

```php
use Fieldify\get_icon;

$icon = get_icon( 'wordpress', 'star', 40 );
```

### is_block_rendering_preview

The `is_block_rendering_preview` utility function returns a boolean value indicating whether the current block is being rendered in the block editor preview. This is useful for ServerSideRendered blocks that need to render differently in the editor preview.

The `is_block_rendering_preview` function is used as follows:

```php
use Fieldify\is_block_rendering_preview;

add_filter( 'render_block', function( $block_content, $block ) {
    if ( is_block_rendering_preview() ) {
        $block_content = 'This is a preview of the block.';
    }

    return $block_content;
}, 10, 2 );
```