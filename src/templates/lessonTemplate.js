import React from "react";
import Link from "gatsby-link";
import RandomTweet from "../components/RandomTweet";

export default function Template({ data }) {
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  console.log(frontmatter.order, allMarkdownRemark);
  const prevLink =
    frontmatter.order > 0 ? (
      <Link
        className="prev"
        to={
          allMarkdownRemark.edges[frontmatter.order - 1].node.frontmatter.path
        }
      >
        {"← " +
          allMarkdownRemark.edges[frontmatter.order - 1].node.frontmatter.title}
      </Link>
    ) : null;
  const nextLink =
    frontmatter.order < allMarkdownRemark.edges.length - 1 ? (
      <Link
        className="next"
        to={
          allMarkdownRemark.edges[frontmatter.order + 1].node.frontmatter.path
        }
      >
        {allMarkdownRemark.edges[frontmatter.order + 1].node.frontmatter.title +
          " →"}
      </Link>
    ) : null;
  return (
    <div className="lesson-container">
      <div className="lesson">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="lesson-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
        <div className="lesson-links">
          {prevLink}
          {nextLink}
        </div>
        <RandomTweet />
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query LessonByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        order
      }
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      limit: 1000
    ) {
      edges {
        node {
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
