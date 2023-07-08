# Intro to JavaScript

Tangent uses [Webpack](https://webpack.js.org/) to compile JavaScript. This allows us to use modern JavaScript syntax and features, such as ES6 imports and JSX.

## JavaScript Files

Tangent's JavaScript files are located in the `src/js` folder. There are essentially two entrypoints for JavaScript in Tangent:

- `src/js/scripts.js` - The entrypoint for the frontend
- `src/js/editor.js` - The entrypoint for the editor

These files are compiled into `js` files in the theme's root directory. Similarly, there is a `components` folder in the `src/js/` folder to store reusable components and snippets of JavaScript.

## Frontend

The `src/js/scripts.js` file is the entrypoint for the frontend. This file is compiled into `js/scripts.js` in the theme's root directory. This file is enqueued on the frontend by default and includes functionality for the accessible offcanvas navigation menu.

## Block Editor

The `src/js/editor.js` file is the entrypoint for the editor. This file is compiled into `js/editor.js` in the theme's root directory. This file is enqueued on the editor by default.

[Learn more about Tangent's JavaScript for the block editor.](/javascript/editor-js)

## Blocks

Tangent also supports the build process for handling blocks in the `src/blocks` folder. All blocks are _automatically_ registered with the block editor once they're built. 

[Learn more about custom blocks in Tangent.](/javascript/custom-blocks)