# Scss Utilities

The `scss/utils/` folder holds all of the mixins, helpers, and other functionality. The entire folder can be imported into any stylesheet (including in your block stylesheets) and used anywhere. Here's a quick rundown of some of the various utilities available.

## Breakpoints
This mixin assumes mobile-first coding, and helps you respond to different breakpoints from within each applicable selector. It pulls breakpoints from a map of breakpoints set in `theme.json`.

```scss
@mixin breakpoint('md') {
	// Styles here.
}
```

Read More : [Sass Guidelines](https://sass-guidelin.es/#responsive-web-design-and-breakpoints)

## Spacing
Add padding to any element. By default it will pull in your theme's root padding values, but you can override it with custom values or using the `.ref()` utility to pull a value from theme.json.

```scss
.class{
	// Include default padding:
	@include utils.padding;

	// Include custom padding based on a value in theme.json:
	@include utils.padding( utils.ref("preset.spacing.sm") );
}
```

## Containers and Blocks Alignment
If you have a container that will likely hold blocks direcly inside of it, you need some additional styles loaded to ensure that alignment and max-widths are functioning property. In that case, include the `blocks-alignment` utility.

If you'd also like to set a max-width based on the values set in theme.json (default, wide, and full), use the `container` utility.

```scss
.a-parent-with-blocks{
	@include utils.blocks-alignment;
}
.default-block-width{
	@include utils.container;
}
.act-like-alignwide{
	@include utils.container('wide');
}
```

## Visually Hidden

Hide any element with the "visually hidden" mixins. 

```scss
.hide-me{
	@include utils.always-visually-hidden;
}
.hide-me-but-allow-focus{
	@include utils.visually-hidden;
}
```

Note: these are also available as CSS classes that can be used in your markup (`.visually-hidden` and `.always-visually-hidden`).