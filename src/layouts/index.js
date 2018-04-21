import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.css";
import "prismjs/themes/prism-solarizedlight.css";
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
            "Learn the basics of Computer Science in Five Hours using JavaScript!"
        },
        {
          name: "keywords",
          content:
            "computer science, javascript, cs, bloom filters, algorithms, sorting"
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
