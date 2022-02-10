import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";
import { graphql, StaticQuery } from "gatsby";

import "bootstrap/dist/css/bootstrap.css";
import "prismjs/themes/prism-solarizedlight.css";
import "code-mirror-themes/themes/monokai.css";
import "./index.css";

const TemplateWrapper = props => {
  return (
    <StaticQuery
      render={data => {
        const frontmatter =
          props.data && props.data.markdownRemark
            ? props.data.markdownRemark.frontmatter
            : null;

        return (
          <div>
            <Helmet>
              <link href="https://storage.googleapis.com/app.klipse.tech/css/codemirror.css" rel="stylesheet" type="text/css" />
            </Helmet>
            <Helmet
              title={
                frontmatter
                  ? `${frontmatter.title} – ${data.site.siteMetadata.title}`
                  : data.site.siteMetadata.title
              }
              meta={[
                {
                  name: "og:title",
                  content: frontmatter
                    ? `${frontmatter.title} - ${data.site.siteMetadata.title}`
                    : data.site.siteMetadata.title
                },
                {
                  name: "description",
                  content: frontmatter
                    ? frontmatter.description
                    : data.site.siteMetadata.description
                },
                {
                  name: "og:description",
                  content: frontmatter
                    ? frontmatter.description
                    : data.site.siteMetadata.description
                },
                {
                  name: "twitter:card",
                  content: "summary_large_image"
                },
                {
                  name: "og:url",
                  content:
                    "https://btholt.github.io/intro-to-web-dev-v2" +
                    (frontmatter && frontmatter.path ? frontmatter.path : "")
                },
                {
                  name: "keywords",
                  content: data.site.siteMetadata.keywords.join(", ")
                },
                {}
              ]}
            />
            <div className="navbar navbar-light gradient">
              <Link to="/" className="navbar-brand">
                <h1>{data.site.siteMetadata.title}</h1>
              </Link>
              {!frontmatter ? null : (
                <h2>{`${frontmatter.section} – ${frontmatter.title}`}</h2>
              )}
              <h3 class="button">
                <a href="https://frontendmasters.com/courses/web-development-v2/">
                  <span class="mobile-hidden">Complete Intro to Web Development</span> Videos
                  <span class="icon">&nbsp;▶️&nbsp;</span>
                </a>
              </h3>
            </div>
            <div className="main">{props.children}</div>
          </div>
        );
      }}
      query={graphql`
        query HomePage($path: String!) {
          markdownRemark(frontmatter: { path: { eq: $path } }) {
            html
            frontmatter {
              path
              title
              order
            }
          }
          site {
            pathPrefix
            siteMetadata {
              title
              subtitle
              description
              keywords
            }
          }
        }
      `}
    />
  );
};

export default TemplateWrapper;
