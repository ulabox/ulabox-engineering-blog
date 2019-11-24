module.exports = {
  siteMetadata: {
    title: `Ulabox Engineering Blog`,
    author: `Ulabox`,
    description: `Ulabox Engineering blog`,
    siteUrl: `https://ulabox.com`,
    social: {
      twitter: `ulaboxeng`
    }
  },
  mapping: {
    'MarkdownRemark.frontmatter.author': `AuthorYaml`
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/blog`,
        name: `blog`
      }
    },
    `gatsby-transformer-yaml`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mappings',
        path: `${__dirname}/mappings/`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      }
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ulabox Engineering Blog`,
        short_name: `Ulabox Engineering`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ff5d77`,
        display: `minimal-ui`,
        icon: `static/feedIcon.png`
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    `gatsby-plugin-flow`,
    `gatsby-plugin-root-import`
  ]
}
