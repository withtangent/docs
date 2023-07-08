# Folder Structure 

At first look, the folder structure should be relatively similar to a classic WordPress theme. A `src` folder serves as the entrypoint for the theme's source files, and there are a number of folders for template parts and other theme files. Finally, there is an `inc` folder for theme includes and functions.

```
├── bin 			<-- Node scripts for building the theme
├── blocks 			<-- Compiled blocks
├── css 			<-- Compiled CSS files
├── fonts			<-- Theme fonts
├── inc				<-- Theme includes and functions
├── js				<-- Compiled JavaScript files
├── languages 		<-- Translations
├── parts 			<-- Custom block template parts
├── patterns 		<-- Custom block patterns
├── src				<-- Theme source files
│   ├── blocks 		<-- Custom blocks
│   ├── scss 		<-- SCSS source files
│   ├── js			<-- JavaScript source files
│   ├── theme-json	<-- Theme.json partials
├── template-parts	<-- Template parts and other partials
```

Let's dig into each of these a little further.

## Theme Functions

Most of the theme setup is handled in the `inc/setup.php` file. This includes:

- Declaring theme supports, such as menus, widgets, and block templates
- Disabling duotone filters by default
- Adding your site logo to the WordPress login screen

From there, we include a few other files from the `inc` folder, which include:
- Enqueing scripts and styles
- Enquing custom blocks and block stylesheets
- A custom navwalker for accessible menus
- Any custom theme options and helpers

## Templates and template parts

Classic template parts are in the `template-parts` folder, and custom block template parts are in the `parts` folder. We also include a `patterns` folder for custom block patterns. Classic template parts are used for things like loops and archive pages rendered in PHP, while block template parts are used for custom block templates, such as the theme's footer and 404 page, which can be modified via the block editor.

## The src folder

Most of your frontend assets are handled in the `src` folder. 

Most of the design setup starts in the `src/theme-json` folder. Tangent uses `.jsonc` partials to break `theme.json` into multiple files and folders. Once you've defined all of your design "tokens" in JSON, you can reference them in your Sass files, in the `src/scss` folder. All of your styles are compiled into two global stylesheets, one for the frontend and one for the editor. There's a few additional goodies surrounding the build process for Sass, such as distinct per-block stylesheets, which we'll get into later.

The `src/js` folder is your entrypoint for writing JavaScript. The `src/js/index.js` file is the entrypoint for the frontend, and the `src/js/editor.js` file is the entrypoint for the editor. Both of these files are compiled into `js` files in the theme's root directory.

Tangent also supports the build process for handling blocks in the `src/blocks` folder. All blocks are _automatically_ registered with the block editor once they're built. 

Continue on to read about the design token approach in Tangent.