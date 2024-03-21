# Folder Structure 

At first look, the folder structure should be relatively similar to a classic WordPress theme. A `src` folder serves as the entrypoint for the theme's source files, and there are a number of folders for template parts and other theme files. Finally, there is an `inc` folder for theme includes and functions.

```
├── bin 			<-- Node scripts for building the theme
├── blocks 			<-- Custom blocks
├── css 			<-- Compiled CSS files
├── fonts			<-- Theme fonts
├── inc				<-- Theme includes and functions
│   ├── enqueue-blocks.php				<-- Enqueue block-specific styles
│   ├── enqueue.php						<-- Enqueue scripts and styles
│   ├── setup.php						<-- Theme setup
├── js				<-- Compiled JavaScript files
├── languages 		<-- Translations
├── parts 			<-- Custom block template parts
├── patterns 		<-- Custom block patterns
├── src				<-- Theme source files
│   ├── blocks 		<-- Block source files
│   ├── css 		<-- SCSS source files
│   ├── js			<-- JavaScript source files
├── templates    	<-- Templates for the site editor
```

Let's dig into each of these a little further.

## Theme Functions

Most of the theme setup is handled in the `inc/setup.php` file. This includes:

- Disabling duotone filters by default
- Adding your site logo to the WordPress login screen

From there, we include a few other files from the `inc` folder, which include:
- Enqueuing scripts and styles
- Enqueuing custom blocks and block stylesheets

## Templates and template parts

Custom block template parts are in the `parts` folder. We also include a `patterns` folder for custom block patterns and `templates` for site editor templates.

Read more about templates in the [Templates](/functions-php/templates) section.

## The src folder

Frontend assets, like JavaScript, CSS, and custom blocks are handled in the `src` folder. This will be a brief overview but each topic has its own section later in the documentation. 

Find you your Scss files in the `src/scss` folder. All of your styles are compiled into two global stylesheets, one for the frontend and one for the editor. There's a few additional goodies surrounding the build process for Sass, such as distinct per-block stylesheets, which we'll get into later.

The `src/js` folder is your entrypoint for writing JavaScript. The `src/js/index.js` file is the entrypoint for the frontend, and the `src/js/editor.js` file is the entrypoint for the editor. Both of these files are compiled into `js` files in the theme's root directory.

Tangent also supports the build process for handling blocks in the `src/blocks` folder. All blocks (and their assets) are _automatically_ registered with the block editor once they're built. 
