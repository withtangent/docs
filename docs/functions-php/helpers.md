# Helpers

The `inc/helpers.php` file contains helper functions for the theme. These functions are used throughout the theme, and can be used in your own custom theme development.

## Get SVG

Get an SVG file from the imgs/ folder in the theme, update its attributes if necessary and return it as a string.


```php
get_svg( $filename, $attributes = array(), $directory = 'imgs' );
```

`$filename` The name of the SVG file to get.

`$attributes` (optional) An array of attributes to add/modify to the SVG file.

`$directory` (optional) The directory to look for the SVG file in, defaults to 'imgs'.

Returns `string|WP_Error` The SVG file as a string or a WP_Error object if there was an error.
