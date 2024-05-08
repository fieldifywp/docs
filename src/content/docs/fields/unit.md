---
title: Unit
description: Unit input field.
---

The unit control is similar to the number control, but it includes a unit of measurement. The unit control is useful when you need to collect a number and a unit of measurement, such as a length or weight, with the unit type specified.

```php
'fontSize' => [
    'type' => 'unit',
    'label' => 'Font Size',
    'default' => 12,
    'units' => ['px', 'em', 'rem'],
    'min' => 0,
    'max' => 100,
],
```