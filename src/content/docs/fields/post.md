---
title: Post
description: Post select field.
---

The post select field allows you to select a post from a list of posts or custom post types. It accepts the following props:

```php
'post' => [
    'type' => 'post',
    'label' => 'Post',
    'default' => 0,
    'query' => [
        'post_type' => 'post',
    ],
    'allowReset' => true,
    'searchable' => true,
    'tokenField' => true,
],
```

Accepted query parameters include:

- `postType` (string) - The post type to query. Default is `post`.
- `perPage` (int) - The number of posts to display per page. Default is `100`.
- `status` (string) - The post status to query. Default is `publish`.
- `exclude` (array) - An array of post IDs to exclude from the query. Default is `[]`.
- `parentExclude` (array) - An array of parent post IDs to exclude from the query. Default is `[]`.
- `orderby` (string) - The field to order the posts by. Default is `date`.
- `order` (string) - The order of the posts. Default is `desc`.
- `categories` (array) - An array of category IDs to filter the posts by. Default is `[]`.
- `tags` (array) - An array of tag IDs to filter the posts by. Default is `[]`.
