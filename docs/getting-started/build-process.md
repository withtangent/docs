# Build Process

Tangent uses a webpack build process to compile the theme's CSS and JavaScript files. The build process also compiles the theme's `theme.json` file from partials. While the build process is not directly using `wordpress-scripts`, it is closely modeled on it and includes many of the same block-specific features.

The build process covers all of the following:

- SCSS
- JS
- Blocks
- Theme.json

`npm run start` will watch for changes to the theme's SCSS, JavaScript files, and theme.json partials and rebuild them automatically.

`npm run dev:compile` will build the theme's CSS, JavaScript files, and theme.json for development

`npm run build` will build the theme's CSS, JavaScript files, and theme.json for production, removing things like sourcemaps and console logs.
