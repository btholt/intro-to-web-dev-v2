module.exports = {
  siteMetadata: {
    title: `Intro to Web Dev v2`
  },
  pathPrefix: "/intro-to-web-dev-v2",
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/lessons`,
        name: "markdown-pages"
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            maxWidth: 800,
            linkImagesToOriginal: true,
            sizeByPixelDensity: false
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-klipse",
      options: {
        klipseSettings: {
          selector_eval_js: ".language-javascript",
          selector_eval_html: ".language-html",
          codemirror_options_in: {
            lineWrapping: true,
            lineNumbers: true
          },
          codemirror_options_out: {
            lineWrapping: true,
            lineNumbers: true
          }
        }
      }
    }
  ]
};
