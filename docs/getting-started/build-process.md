# Build Process

Tangent uses a webpack build process to compile the theme's CSS and JavaScript files. The build process is directly using `wordpress-scripts` and will compile custom blocks and block editor modifications as well.

The build process covers all of the following:

- SCSS
- JS
- Blocks

`npm run start` will watch for changes to the theme's SCSS, JavaScript files, and custom blocks and rebuild them automatically.

`npm run dev:compile` will build the theme's CSS, JavaScript files, and custom blocks for development

`npm run build` will build the theme's CSS, JavaScript files, and custom blocks for production, removing things like sourcemaps and console logs.
