import React from "react";
import Card from "../components/TOCCard";
import Link from "gatsby-link";

import "./index.css";

const IndexPage = props => (
  <div className="index">
    <div className="jumbotron gradient">
      <h1>Intro to Web Dev</h1>
      <h2>v2 - <a href="https://frontendmasters.com/courses/web-development-v2/">Videos on Frontend Masters</a></h2>
    </div>

    <Card
      title="Table of Contents"
      content={props.data.allMarkdownRemark.edges}
    />
  </div>
);

export const pageQuery = graphql`
  query HomepageTOC {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___order] }) {
      edges {
        node {
          id
          frontmatter {
            order
            path
            title
          }
        }
      }
    }
  }
`;

export default IndexPage;
