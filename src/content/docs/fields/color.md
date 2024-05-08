---
title: Color
description: Color picker field.
---

Color picker fields can be created with the following configuration:

```php
'bodyColor' => [
    'type'                   => 'code',
    'colors'                 => ['red', 'green', 'blue', 'yellow', 'black', 'white'],
    'label'                  => esc_html__( 'Select color', 'fieldify' ),
    'disableCustomColors'    => false,
    'disableCustomGradients' => true,
    'enableAlpha'            => true,
    'clearable'              => true,
    'showTitle'              => true,
],
```