# SCSS Architecture

The `scss` architecture in Tangent is inspired by the 7-1 Pattern in [Sass Guidelines Style Guide](https://sass-guidelin.es/), but instead of one root level file, we have two: `global.scss` and `editor.scss`.

1. `global.scss` is enqueued on the front-end everywhere. All styles excluding your block-specific styles should be enqueued here.
2. `editor.scss` is enqueued in the Block Editor. Typically you'll want all your files and folders included in this file.

## Folders

The `scss` is divided up into the following 7 folders:

1. `abstracts/` - where you gather your tools and helpers; functions, mixins, variables, those should all be placed in this folder.
2. `base/` - this folder is where your base level styles live. All styles affecting HTML elements will typically live here. Think input styles for your forms, heading styles, a reset stylesheet, etc. In other words, these are your _global_ styles.
3. `blocks/` - this is where your block-specific styles live. This is a special folder, more on this in a later section.
4. `layout/` - this is where styles for the major sections of your website live. Think your header, footer, sidebar, article layout, navigation, etc.
5. `utilities/` - this folder is made up of files that do a specific thing. For example, a class for visually hiding elements. These are utility classes you can pull into other files as needed. Each utility file will typically only contain one or two classes.
6. `pages/` - a place to house bespoke page designs, think login pages, dasboard, custom hand-coded pages.
7. `vendors/` - this is where stylesheets from any third-party sources live.

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