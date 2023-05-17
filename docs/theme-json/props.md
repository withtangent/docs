# Using Props in your SCSS
The `ref` function help you generate the correct CSS Custom Properties for design tokens set in `theme.json`.

## Usage
Here's how you use the `ref` funciton.

You `@use "../utils";` in the file you want to use these function in, or you can pull in the `props.scss` file in specifically with `@use "../utils/props"`, adjusting the relative path as needed.

The function takes a single argument in dot notation that reflects where that design token is found in `theme.json`.

For example, to reference the design token for the `primary` colour in `theme.json` settings, we know that anything in `settings` (that isn't inside `custom`) is referenced to as a `preset`, and then within the `color` set, we find the `primary` color defined:

```scss
@use "../utils";

.my-class {
	color: utils.ref("preset.color.primary");
}
```

### Example 1

Let's say you want to access the `wide` property inside the `custom` section under `contentSizes`, you would call it like this:

```scss
@use "../utils";

.my-class {
    width: utils.ref("custom.contentSizes.wide");
}
```

### Example 2

Let's say you wanted to access the `blockGap` property inside the `custom` section:

```scss
@use "../utils";

.my-class {
    gap: utils.ref("custom.blockGap");
}
```

### Example 4

Let's say you wanted to access the `root` `padding-right` property from the styles set in `theme.json`. We know that all the root padding settings in in `theme.json`'s `styles` section start with `wp--style--root--`, so this makes our first `key` be `style`, the second `key` be `root`, and the last key is `paddingRight`.

```scss
@use "../utils";

.my-class {
    padding-right: utils.ref("style.root.paddingRight");
}
```

## Props Example List


| Theme.json / utils.ref() | CSS Var | Default Value |
|-|-|-|
| `style.root.paddingTop` | --wp--style--root--padding-top | var(--wp--preset--spacing--40); |
| `style.root.paddingRight` | --wp--style--root--padding-right | var(--wp--preset--spacing--30); |
| `style.root.paddingBottom` | --wp--style--root--padding-bottom | var(--wp--preset--spacing--40); |
| `style.root.paddingLeft` | --wp--style--root--padding-left | var(--wp--preset--spacing--30); |
| `style.global.contentSize` | --wp--style--global--content-size | var(--wp--custom--content-sizes--default); |
| `style.global.wideSize` | --wp--style--global--wide-size | var(--wp--custom--content-sizes--wide); |
| `preset.color.background` | --wp--preset--color--background | #FEFEFE; |
| `preset.color.foreground` | --wp--preset--color--foreground | #181A1F; |
| `preset.color.primary` | --wp--preset--color--primary | #506930; |
| `preset.color.secondary` | --wp--preset--color--secondary | #ADC178; |
| `preset.fontSize.small` | --wp--preset--font-size--small | 13px; |
| `preset.fontSize.medium` | --wp--preset--font-size--medium | clamp(15px, 0.938rem + ((1vw - 7.68px) * 0.601), 20px); |
| `preset.fontSize.large` | --wp--preset--font-size--large | clamp(3.36rem, 3.36rem + ((1vw - 0.48rem) * 2.712), 4.77rem); |
| `preset.fontSize.xLarge` | --wp--preset--font-size--x-large | clamp(31.5px, 1.969rem + ((1vw - 7.68px) * 1.262), 42px); |
| `preset.fontSize.sm` | --wp--preset--font-size--sm | clamp(0.94rem, 0.94rem + ((1vw - 0.48rem) * 0.115), 1rem); |
| `preset.fontSize.paragraph` | --wp--preset--font-size--paragraph | clamp(1.13rem, 1.13rem + ((1vw - 0.48rem) * 0.231), 1.25rem); |
| `preset.fontSize.h6` | --wp--preset--font-size--h-6 | clamp(1.35rem, 1.35rem + ((1vw - 0.48rem) * 0.404), 1.56rem); |
| `preset.fontSize.h5` | --wp--preset--font-size--h-5 | clamp(1.62rem, 1.62rem + ((1vw - 0.48rem) * 0.635), 1.95rem); |
| `preset.fontSize.h4` | --wp--preset--font-size--h-4 | clamp(1.94rem, 1.94rem + ((1vw - 0.48rem) * 0.962), 2.44rem); |
| `preset.fontSize.h3` | --wp--preset--font-size--h-3 | clamp(2.33rem, 2.33rem + ((1vw - 0.48rem) * 1.385), 3.05rem); |
| `preset.fontSize.h2` | --wp--preset--font-size--h-2 | clamp(2.8rem, 2.8rem + ((1vw - 0.48rem) * 1.962), 3.82rem); |
| `preset.fontSize.h1` | --wp--preset--font-size--h-1 | clamp(4.03rem, 4.03rem + ((1vw - 0.48rem) * 3.712), 5.96rem); |
| `preset.fontFamily.lato` | --wp--preset--font-family--lato | "Lato", sans-serif; |
| `preset.fontFamily.manrope` | --wp--preset--font-family--manrope | "Manrope", sans-serif; |
| `preset.fontFamily.dmSerifDisplay` | --wp--preset--font-family--dm-serif-display | "DM Serif Display", serif; |
| `preset.spacing.20` | --wp--preset--spacing--20 | 0.44rem; |
| `preset.spacing.30` | --wp--preset--spacing--30 | 0.67rem; |
| `preset.spacing.40` | --wp--preset--spacing--40 | 1rem; |
| `preset.spacing.50` | --wp--preset--spacing--50 | 1.5rem; |
| `preset.spacing.60` | --wp--preset--spacing--60 | 2.25rem; |
| `preset.spacing.70` | --wp--preset--spacing--70 | 3.38rem; |
| `preset.spacing.80` | --wp--preset--spacing--80 | 5.06rem; |
| `preset.spacing.xs` | --wp--preset--spacing--xs | clamp(0.56rem, calc(0.54rem + 0.11vw), 0.63rem); |
| `preset.spacing.sm` | --wp--preset--spacing--sm | clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem); |
| `preset.spacing.md` | --wp--preset--spacing--md | clamp(1.69rem, calc(1.62rem + 0.33vw), 1.88rem); |
| `preset.spacing.lg` | --wp--preset--spacing--lg | clamp(2.25rem, calc(2.16rem + 0.43vw), 2.50rem); |
| `preset.spacing.xl` | --wp--preset--spacing--xl | clamp(3.38rem, calc(3.24rem + 0.65vw), 3.75rem); |
| `preset.shadow.natural` | --wp--preset--shadow--natural | 6px 6px 9px rgba(0, 0, 0, 0.2); |
| `preset.shadow.deep` | --wp--preset--shadow--deep | 12px 12px 50px rgba(0, 0, 0, 0.4); |
| `preset.shadow.sharp` | --wp--preset--shadow--sharp | 6px 6px 0px rgba(0, 0, 0, 0.2); |
| `preset.shadow.outlined` | --wp--preset--shadow--outlined | 6px 6px 0px -3px rgba(255, 255, 255, 1), 6px 6px rgba(0, 0, 0, 1); |
| `preset.shadow.crisp` | --wp--preset--shadow--crisp | 6px 6px 0px rgba(0, 0, 0, 1); |
| `custom.block-gap` | --wp--custom--block-gap | 1.5rem; |
| `custom.border.radius` | --wp--custom--border--radius | 5px; |
| `custom.border.width` | --wp--custom--border--width | 2px; |
| `custom.border.style` | --wp--custom--border--style | solid; |
| `custom.border.color` | --wp--custom--border--color | var(--wp--preset--color--foreground); |
| `custom.border.focus.radius` | --wp--custom--border--focus--radius | 5px; |
| `custom.border.focus.width` | --wp--custom--border--focus--width | 2px; |
| `custom.border.focus.style` | --wp--custom--border--focus--style | solid; |
| `custom.border.focus.color` | --wp--custom--border--focus--color | var(--wp--preset--color--secondary); |
| `custom.button.border.radius` | --wp--custom--button--border--radius | var(--wp--custom--border--radius); |
| `custom.button.border.color` | --wp--custom--button--border--color | transparent; |
| `custom.button.border.width` | --wp--custom--button--border--width | 2px; |
| `custom.button.spacing.padding.top` | --wp--custom--button--spacing--padding--top | 0.75rem; |
| `custom.button.spacing.padding.right` | --wp--custom--button--spacing--padding--right | 1.5rem; |
| `custom.button.spacing.padding.bottom` | --wp--custom--button--spacing--padding--bottom | 0.75rem; |
| `custom.button.spacing.padding.left` | --wp--custom--button--spacing--padding--left | 1.5rem; |
| `custom.button.color.background` | --wp--custom--button--color--background | var(--wp--preset--color--primary); |
| `custom.button.color.text` | --wp--custom--button--color--text | var(--wp--preset--color--background); |
| `custom.button.hover.color.background` | --wp--custom--button--hover--color--background | var(--wp--preset--color--primary); |
| `custom.button.hover.color.text` | --wp--custom--button--hover--color--text | var(--wp--preset--color--background); |
| `custom.button.focus.color.background` | --wp--custom--button--focus--color--background | var(--wp--preset--color--foreground); |
| `custom.button.focus.color.text` | --wp--custom--button--focus--color--text | var(--wp--preset--color--background); |
| `custom.button.focus.border.color` | --wp--custom--button--focus--border--color | var(--wp--custom--border--color); |
| `custom.button.active.color.background` | --wp--custom--button--active--color--background | var(--wp--preset--color--secondary); |
| `custom.button.active.color.text` | --wp--custom--button--active--color--text | var(--wp--preset--color--foreground); |
| `custom.button.visited.color.text` | --wp--custom--button--visited--color--text | var(--wp--preset--color--background); |
| `custom.comments.avatar-size` | --wp--custom--comments--avatar-size | 32; |
| `custom.comments.commentLabelSingle` | --wp--custom--comments--comment-label-single | Comment; |
| `custom.comments.commentLabelPlural` | --wp--custom--comments--comment-label-plural | Comments; |
| `custom.content-sizes.default` | --wp--custom--content-sizes--default | 650px; |
| `custom.content-sizes.wide` | --wp--custom--content-sizes--wide | 1200px; |
| `custom.effects.transition` | --wp--custom--effects--transition | 0.3s all ease; |
