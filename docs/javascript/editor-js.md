# Block Editor Functionality

Tangent comes out of the box with a number of helpful code snippets for modifying the block editor. The entrypoint for all of this is in `src/js/editor.js`. This file is compiled into `js/editor.js` in the theme's root directory.

:::tip

Tangent believes in the value of providing a custom-tailored content-editing experience. Use the `editor.js` file to add _or remove_ functionality from the block editor.

:::

### Unregister blocks

You can unregister blocks from the block editor by adding them to the `unregisterBlocks` array. In this example we're removing the Verse block:

```js
const unregisterBlocks = [
	"core/verse"
];
```


### Remove editor panels

Remove entire panels from the editor by adding them to the `removeEditorPanels` array. In this example we're removing the Discussion panel:

```js
const removeEditorPanels = [
	"discussion-panel"
];
```

### Remove block styles

Remove any of the default block styles that you don't want to support by adding them to the `unregisterBlockStyles` array. Here we're removing the outline style from the Button block:

```js
const unregisterBlockStyles = {
	"core/button": "outline",
};
```

### Register block styles
Register your own unique block styles by adding them to the `registerBlockStyles` array. In this example we're adding a "Hero" style to the Cover block.

```js
const registerBlockStyles = {
	"core/cover": [
		{
			name: "hero",
			label: "Hero",
		},
	]
};
```

Once you've registered a block style, you'll be responsible for adding the relevant CSS. In this example, we'll head over to the sass file for the cover block and write our CSS based on this class.

```scss
// In src/scss/blocks/core/cover.scss
.wp-block-cover.is-style-hero {
	// CSS goes here
}
```

[Learn more about how Tangent handles block styles.](/theme-json-scss/architecture)


### Remove block variations
Add the names of blocks and variations to remove to the `unregisterBlockVariations` array. In this example we're removing the "Two Columns: Two Thirds / One Third" variation from the Columns block:

```js
const unregisterBlockVariations = {
	"core/columns": "two-columns-two-thirds-one-third",
};
```

### Register block variations
Add the names of blocks and variations to register to the `registerBlockVariations` array. In this example we're adding a "50 / 25 / 25" variation to the Columns block:

```js
const registerBlockVariations = {
	"core/columns": {
		name: "three-columns-wide-left",
		title: "50 / 25 / 25",
		description: "Three columns; wide left column",
		innerBlocks: [
			["core/column", { width: "50%" }],
			["core/column", { width: "25%" }],
			["core/column", { width: "25%" }],
		],
		scope: ["block"],
	},
};
```
