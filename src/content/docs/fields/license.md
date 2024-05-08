---
title: License
description: License check field.
---

The license key field allows you to check a license key and display the status of the license.

```php
'licenseKey'         => [
    'type'        => 'license',
    'panel'       => 'license',
    'label'       => esc_html__( 'License Key', 'blockify-pro' ),
    'description' => $license_message,
    'default'     => [
        'license'       => $license_key,
        'licenseStatus' => $license_status,
    ],
    'endpoint'    => 'fieldify/v1/license?key={license_key}',
    'permission'  => 'administrator',
],
```

The license field checks the license key against an endpoint. The `licen_key` tag is replaced with the license key entered by the user:

```php
add_action( 'rest_api_init', __NAMESPACE__ . '\\register_license_rest_route' );
/**
 * Registers the license REST route.
 *
 * @since 0.0.2
 *
 * @return void
 */
function register_license_rest_route(): void {
	register_rest_route(
		'fieldify/v1',
		'/license',
		[
			'methods'             => WP_REST_Server::READABLE,
			'callback'            => __NAMESPACE__ . '\\validate_license',
			'permission_callback' => static fn(): bool => current_user_can( 'manage_options' ),
			'args'                => [
				'key' => [
					'required' => true,
				],
			],
		]
	);
}

/**
 * Validates the license key.
 *
 * @since 0.0.2
 *
 * @return array
 */
function validate_license(): array {
	$key = filter_input( INPUT_GET, 'key', FILTER_SANITIZE_FULL_SPECIAL_CHARS );
	
	if ( $key === '123') {
	    $status  = 'valid';
        $message = 'License key is valid.';
    } else {
        $status  = 'invalid';
        $message = 'License key is invalid.';
	}
 
	return [
		'license' => $status,
		'message' => $message,
	];
}
```