# Installation

## 1. Download the latest release

Tangent should not be cloned or forked. Instead, download the latest [Tangent release from Github](https://github.com/withtangent/tangent/releases) and place it into your `wp-content/themes` directory.

:::info

The [latest Tangent release is available on Github](https://github.com/withtangent/tangent/releases).

:::

## 2. Search and replace with your theme name

Once you have downloaded Tangent, you will need to do a _case-sensitive_ search and replace for the following strings:

- `Tangent` => `Your_Theme_Name` 
- `'tangent'` => `'your-theme-textdomain'`

## 3. Install dependencies and run the build process

```bash
npm install
npm run start
```
