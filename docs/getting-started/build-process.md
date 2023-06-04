# Build Process

Tangent uses a webpack build process to compile the theme's CSS and JavaScript files. The build process also compiles the theme's `theme.json` file from partials. While the build process is not directly using `wordpress-scripts`, it is closely modeled on it and includes many of the same block-specific features.

The build process includes the following:

- SCSS
- JS
- Blocks
- Theme.json

`npm run build` will build the theme's CSS, JavaScript files, and theme.json.

`npm run watch` will watch for changes to the theme's SCSS, JavaScript files, and theme.json partials and rebuild them automatically.