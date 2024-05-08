---
title: Toggle
description: Toggle switch field.
---

The toggle field displays a toggle switch. It can be used to represent an on/off or true/false state.

```php
'removeEmojiScripts' => [
    'type'        => 'toggle',
    'label'       => esc_html__( 'Remove Emoji Scripts', 'fieldify' ),
    'description' => esc_html__( 'Remove emoji scripts from your site.', 'fieldify' ),
    'permission'  => 'administrator',
],
```