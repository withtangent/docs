import React from "react";
import Layout from "@theme/Layout";
import HomepageFeatures from "../components/HomepageFeatures";
import HomepageFeaturesLarge from "../components/HomepageFeaturesLarge";

export default function Index() {
  return (
    <Layout
      title="Tangent"
      description="a future-oriented WordPress theme scaffold"
    >
      <main>
        <header className="hero">
          <div className="container">
            <h1 className="hero__title">
              <em>Introducing</em> Tangent
            </h1>
            <p className="hero__subtitle">
              a <strong>future-oriented</strong> WordPress theme scaffold for
              building modern bespoke WordPress websites.
            </p>
            <div>
              <a
                className="button button--primary margin-right--sm button--lg"
                href="/getting-started"
              >
                Get Started
              </a>
              <a
                className="button button--outline button--primary button--lg"
                href="https://github.com/withtangent/tangent"
              >
                See the code&nbsp;
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
              </a>
            </div>
          </div>
        </header>
        <HomepageFeatures />
        <HomepageFeaturesLarge />
        <div className="homepage-footer padding-vert--md">
          <p className="hero__subtitle">
            Tangent is a modern hybrid theme framework for WordPress, built for
            developers.
          </p>
          <a
            className="button button--primary margin-right--sm button--lg"
            href="/getting-started"
          >
            Read the docs
          </a>
          <a
            className="button button--outline button--primary button--lg"
            href="https://github.com/withtangent/tangent"
          >
            Get the latest release&nbsp;
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-github"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
            </svg>
          </a>
        </div>
      </main>
    </Layout>
  );
}
