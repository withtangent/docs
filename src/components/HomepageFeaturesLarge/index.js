import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import CodeBlock from "@theme/CodeBlock";

const FeatureList = [
  {
    title: "One build process to rule them all.",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Use your <code>theme.json</code> variables in your Sass files. Use your
        breakpoints and mixins in your block files. Write block-specific Sass
        files for core blocks and they'll only be enqeueued when that block is
        loaded. Everything is automatically handled by one easy build process.
      </>
    ),
    link: "/scss",
    codeTitle: "src/scss/blocks/core/quote.scss",
    codeLang: "scss",
    code: `@use "../../utils";

.wp-block-quote {
  border: var(--wp--custom--border--width) solid var(--wp--custom--border--color);
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
 * @type {Object} Add the names of blocks 
 *                and styles to register here
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
    <div className={`row padding-vert--xl margin-bottom--xl ${styles.row}`}>
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
