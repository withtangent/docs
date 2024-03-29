# Header and Menus

Tangent is a hybrid theme, meaning it supports both classic WordPress templates and block templates. This means that you can use the block editor to customize parts of your site's header and footer, or you can remove the block template parts and code it how ever you'd like- in PHP and even using plugins like Mega Menu and Advanced Custom Fields.

## Navigation Menu

Tangent's `header.php` is mostly built in PHP. It uses a "classic" WordPress Menu on the back end. The actual front-end markup is enhanced with much of the same front-end updates in the Gutenberg navigation block. This includes a responsive full screen modal and solid accessibility. 

To accomplish this, Tangent combines a custom navwalker called `Tangent_Navwalker` with additional JavaScript to enable accessible dropdowns for submenus.

## Updating your site logo

As of writing (WordPress 6.3), the site logo is not yet available as a standalone setting outside of the Customizer. To get around this, Tangent includes a `Site Logo` block template part, which you can use to update your site logo in the block editor. This template part is rendered in the `header.php` file. 

Block template parts can be found in the WordPress admin under the `Appearance` menu.

:::info

Tangent will also show your site logo on the WordPress login screen by default and rewritew the logo to link the current site's homepage.

:::