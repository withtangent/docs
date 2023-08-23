import React from "react";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "A Hybrid Theme combining the Block Editor with PHP templates",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: <>PHP when you need it, the Block Editor everywhere else.</>,
  },
  {
    title: "Design Token Approach to Theme.JSON and SCSS",
    // Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: <>Define your design tokens once, use them everywhere.</>,
  },
  {
    title: "JavaScript Scaffolds for Blocks and Block Editor Customizations",
    // Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: <>A Modern JavaScript build process for block development.</>,
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
