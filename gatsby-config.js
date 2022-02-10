module.exports = {
  siteMetadata: {
    title: "Complete Intro to Web Development",
    subtitle: "👩‍💻",
    description: "A complete intro to web development for developers",
    keywords: [
      "javascript",
      "html",
      "css",
      "brian holt",
      "frontend masters"
    ]
  },
  pathPrefix: "/intro-to-web-dev-v2",
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-layout`,
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
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-prismjs`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: true,
              sizeByPixelDensity: false
            }
          }
        ]
      }
    },
    {    
      resolve: 'gatsby-plugin-klipse',
      options: {
        // Class prefix for <pre> tags containing code examples
        // defaults to empty string
        // if you use PrimsJS for example then add `language-` as the prefix
        // Klipse config, you can check it here
        // https://github.com/viebel/klipse#configuration
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
