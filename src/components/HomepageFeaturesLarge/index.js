import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";

const FeatureList = [
  {
    title: "PHP templates meet Block Template Parts",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        With a hybrid theme, you always have access to standard PHP templating
        when you need it. But with built-in block template parts, you can use
        the Site Editor wherever you want to: the 404 page, site footer, or
        anywhere else.
      </>
    ),
    link: "/functions-php",
    codeTitle: "footer.php",
    codeLang: "html",
    code: `<footer id="colophon" class="site-footer">
	<?php block_template_part( 'footer-credit' ); ?>
</footer>`,
  },
  {
    title: "Theme.JSON gets manageable with JSONC partials",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        We've broken <code>theme.json</code> into smaller, more manageable{" "}
        <code>.jsonc</code> files. Not only does this mean it's easier to edit
        and update settings, but you can also leave comments and comment
        attributes out while you're working.
      </>
    ),
    link: "/theme-json-scss",
    codeTitle: "/src/theme-json/styles/typography.jsonc",
    codeLang: "json",
    code: `// Typography settings for theme.json (with comments!)
{
	"fontFamily": "var(--wp--preset--font-family--manrope)",
	"fontSize": "var(--wp--preset--font-size--paragraph)",
	"lineHeight": "1.6"
}`,
  },
  {
    title: "One build process to rule them all.",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Use your <code>theme.json</code> variables in your Sass files. Use your
        breakpoints and mixins in your block files. Write block-specific Sass
        files for core blocks and they'll only be enqeueued when that block is
        loaded.
      </>
    ),
    link: "/theme-json-scss",
    codeTitle: "src/scss/blocks/core/quote.scss",
    codeLang: "scss",
    code: `@use "../../utils";
.wp-block-quote {
	border: 2px solid utils.ref("preset.color.primary");
}`,
  },
  {
    title: "All the scaffolds you need to customize the block editor",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        New blocks are compiled and registered automatically. Block stylesheets
        are enqueued with blocks. Register new styles, block variations, and
        more with no effort. Plus we're using a modern Webpack build process
        with ES6 support, so feel free to load all the external dependencies you
        need.
      </>
    ),
    link: "/javascript",
    codeTitle: "src/js/editor.js",
    codeLang: "js",
    code: `/**
 * Register block styles
 *
 * @type {Object} Add the names of blocks and styles to register here
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-styles/
 */
const registerBlockStyles = {
	"core/cover": [
		{
			name: "hero",
			label: "Hero",
		},
	]
};`,
  },
];

function Feature({ Svg, title, description, link, codeTitle, codeLang, code }) {
  return (
    <div className={`row padding-vert--xl margin-vert--xl ${styles.row}`}>
      <div className={clsx("col col--6")}>
        <div className="">
          {/* <Svg className={styles.featureSvg} role="img" /> */}
        </div>
        <div className=" padding-horiz--md">
          <h2>{title}</h2>
          <p className={styles.description}>{description}</p>
          {/* <a className="button button--outline button--primary" href={link}>
            Learn More
          </a> */}
        </div>
      </div>
      <div className={clsx("col col--6")}>
        <CodeBlock language={codeLang} title={codeTitle}>
          {code}
        </CodeBlock>
      </div>
    </div>
  );
}

export default function HomepageFeaturesLarge() {
  return (
    <section className={styles.features}>
      <div className="container">
        {FeatureList.map((props, idx) => (
          <Feature key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
