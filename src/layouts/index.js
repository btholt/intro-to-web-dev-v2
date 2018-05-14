import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.css";
import "prismjs/themes/prism-solarizedlight.css";
import "code-mirror-themes/themes/monokai.css";
import "./index.css";

const Header = () => (
  <div className="navbar navbar-light gradient">
    <Link to="/" className="navbar-brand">
      Intro to Web Dev v2
    </Link>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Intro to Web Dev v2"
      meta={[
        {
          name: "description",
          content:
            "Learn how to be a web developer! In this course we go over the basics of HTML, CSS, JavaScript, and other tools to learn how to be programmer."
        },
        {
          name: "keywords",
          content:
            "computer science, javascript, css, html, web, web developer, web dev, cloud, node, node.js"
        }
      ]}
    />
    <Header />
    <div className="main">{children()}</div>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
