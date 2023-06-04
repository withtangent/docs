# A Hybrid Theme Approach

Tangent is a "hybrid" theme, which means that most of the theme setup is handled in the `inc/setup.php` file. This includes:

- Theme supports
- Menus and widgets
- Any custom theme options

Similarly, most of the design setup starts in the `src/theme-json` folder. More on that below.

## File/Folder Structure

```
├── bin 			<-- Node scripts for building the theme
├── blocks 			<-- Custom blocks
├── css 			<-- Compiled CSS files
├── fonts			<-- Theme fonts
├── inc				<-- Theme includes and functions
│   ├── class-tangent-navwalker.php		<-- Custom navwalker
│   ├── enqueue.php						<-- Enqueue scripts and styles
│   ├── setup.php						<-- Theme setup
├── js				<-- Compiled JavaScript files
├── languages 		<-- Translations
├── parts 			<-- Custom block template parts
├── patterns 		<-- Custom block patterns
├── src				<-- Theme source files
│   ├── css 		<-- SCSS source files
│   ├── js			<-- JavaScript source files
│   ├── theme-json	<-- Theme.json partials
├── template-parts	<-- Template parts and other partials
```