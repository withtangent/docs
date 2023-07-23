import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "A Hybrid Theme with PHP and the Block Editor",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>PHP when you want it, Block Editor everywhere else.</>,
    link: "/functions-php",
  },
  {
    title: "Design Token Approach to Theme.JSON and SCSS",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Define once, use it everywhere.</>,
    link: "/theme-json-scss",
  },
  {
    title: "JavaScript Scaffolds for Blocks and the Block Editor",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>Modern JavaScript for modern blocks.</>,
    link: "/javascript",
  },
];

function Feature({ Svg, title, description, link }) {
  return (
    <div className="padding-vert--lg">
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
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div className="col col--4" key={idx}>
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
