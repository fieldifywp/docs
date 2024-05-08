---
title: Range
description: Range slider field.
---

The range field displays a slider that allows the user to select a number within a range. The range field can be configured to set the minimum and maximum values, as well as the step value.

```php
'myRangeField' => [
    'type'  => 'range',
    'label' => __( 'Range', 'text-domain' ),
    'min'   => 0,
    'max'   => 100,
    'step'  => 1,
],
```