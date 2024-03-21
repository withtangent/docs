# Templates and Template Parts

## Templates

Tangent includes a number of block templates, which are used to render custom block templates. Block templates are stored in the theme's `templates` folder and are defined in `theme.json`.

### Index

The index template is used to render the blog index page.

- `templates/index.html`

### Single

The single template is used to render single posts.

- `templates/single.html`

### Page

The page template is used to render single pages.

- `templates/page.html`

### Archive

The archive template is used to render archive pages.

- `templates/archive.html`

### Search

The search template is used to render search results.

- `templates/search.html`

### 404

The 404 template is used to render the 404 page.

- `templates/404.html`

## Template Parts

Tangent includes a number of block template parts, which are used to render custom block templates. Block template parts are stored in the theme's `parts` folder and are defined in `theme.json`.

### Header

Select your site logo in the block editor:

- `parts/site-logo.html`

Read more in the [Header and Menu](/functions-php/header) section.

### Footer

- `parts/footer-credit.html`

Read more in the [Footer](/functions-php/footer) section.


### Adding Block Template Parts

New block template parts can be added to the `/parts` folder and should also be defined as part of `theme.json` (specifically the name and what `area` it's associated with).