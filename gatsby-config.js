module.exports = {
  siteMetadata: {
    title: `Unqualified Dev`,
    description: `Personal website and blog of Ravi Kumar Prasad`,
    author: `Ravi Kumar Prasad <7ravikp@gmail.com>`,
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages`,
    //     path: `${__dirname}/content/pages`,
    //   },
    // },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-external-links",
            options: {
              target: "_blank",
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // should this be configurable by the end-user?
              maxWidth: 1380,
              linkImagesToOriginal: false,
            },
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: true,
              prompt: {
                user: "ravi",
                host: "web",
                global: false,
              },
            },
          },
          { resolve: `gatsby-remark-copy-linked-files` },
          `gatsby-remark-embedder`,
          `gatsby-remark-responsive-iframe`,
        ],
        remarkPlugins: [require(`remark-slug`)],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Unqualified Dev`,
        short_name: `unqualified.dev`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#ffffff`,
        theme_color_in_head: false,
        display: `minimal-ui`,
        icon: `src/images/square-shape-shadow.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
