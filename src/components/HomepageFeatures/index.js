import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";

const FeatureList = [
  {
    title: "A Modern Hybrid Theme with PHP and the Block Editor",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>PHP when you want it, Block Editor everywhere else.</>,
    link: "/functions-php",
    codeTitle: "footer.php",
    codeLang: "html",
    code: `<footer id="colophon" class="site-footer">
	<?php block_template_part( 'footer-credit' ); ?>
</footer>`,
  },
  {
    title: "Design Token Approach to Theme.JSON and SCSS",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Define once, use it everywhere.</>,
    link: "/theme-json-scss",
    codeTitle: "src/scss/blocks/core/quote.scss",
    codeLang: "scss",
    code: `@use "../../utils";
.wp-block-quote {
	border: 2px solid utils.ref("preset.color.primary");
}`,
  },
  {
    title: "JavaScript for Blocks and the Block Editor",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Modern JavaScript for modern blocks.</>,
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
    <div className="row padding-vert--lg">
      <div className={clsx("col col--4")}>
        <div className="">
          {/* <Svg className={styles.featureSvg} role="img" /> */}
        </div>
        <div className=" padding-horiz--md">
          <h2>{title}</h2>
          <p>{description}</p>
          <a className="button button--outline button--primary" href={link}>
            Keep Reading
          </a>
        </div>
      </div>
      <div className={clsx("col col--8")}>
        <CodeBlock language={codeLang} title={codeTitle}>
          {code}
        </CodeBlock>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
