# Breakpoints

Breakpoints are defined in `src/scss/abstracts/_breakpoints.scss`. The provided breakpoints closely match the block editor's breakpoints, but you can add or remove breakpoints as needed.

## Usage in SCSS

```scss
// Import the respond-to mixin
@use "../utils/breakpoint-mixin.scss" as *;

// Use the breakpoints
@include breakpoint('md') {
  // Styles for screens larger than the 'md' breakpoint
}
```