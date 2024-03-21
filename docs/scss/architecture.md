# SCSS Architecture

The `scss` architecture in Tangent is inspired by the 7-1 Pattern in [Sass Guidelines Style Guide](https://sass-guidelin.es/), but instead of one root level file, we have two: `global.scss` and `editor.scss`.

1. `global.scss` is enqueued on the front-end everywhere. All styles excluding your block-specific styles should be enqueued here.
2. `editor.scss` is enqueued in the Block Editor. Typically you'll want all your files and folders included in this file.

## Folders

The `scss` is divided up into the following 7 folders:

1. `base/` - this folder is where your base level styles live. All styles affecting HTML elements will typically live here. Think input styles for your forms, heading styles, a reset stylesheet, etc. In other words, these are your _global_ styles.
2. `blocks/` - this is where your block-specific styles live. This is a special folder, more on this in a later section.
3. `components/` - this folder stores styles for individual elements like comments and the navigation menu
4. `layout/` - this is where styles for the major sections of your website live. Think your header, footer, sidebar, article layout, etc.
5. `utils/` - this folder is made up of all of our helper functions, mixins, breakpoints, and more. This folder is generally imported everywhere else
6. `vendors/` - this is where stylesheets from any third-party sources live.

## Folder Guidelines

Each folder has an `index.scss` file that pulls in its partials using the `@forward` rule.

```scss
@forward "variables";
@forward "functions";
@forward "mixins";
```

In the `editor.scss` and `global.scss` files you can import entire folders like so:

```scss
@use 'folderName';
```