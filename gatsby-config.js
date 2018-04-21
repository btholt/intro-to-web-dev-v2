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
    }
  ]
};
