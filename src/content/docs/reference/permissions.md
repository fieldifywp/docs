---
title: Permissions
description: Setting permissions for fields.
---

Permission checks can be added to all field types by simply providing the `permission` key with a valid user role, e.g. `administrator`, `editor`, `author`, `contributor`, or `subscriber`. If the current user does not have the required role, the field will not be displayed.

For example, if you would only like site administrators to be able to edit the site title, you can add the following permission check:

```php
'title' => [
    'type'        => 'text',
    'panel'       => 'site_identity',
    'option'      => 'site',
    'label'       => esc_html__( 'Site Title', 'fieldify' ),
    'value'       => get_option( 'blogname' ),
    'description' => esc_html__( 'Enter your site title.', 'fieldify' ),
    'permission'  => 'administrator',
],
```