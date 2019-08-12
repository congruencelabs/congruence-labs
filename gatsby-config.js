module.exports = {
  siteMetadata: {
    title: `Congruence labs`,
    description: `Congruence labs`,
    author: '@aditya'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /images\/svg/
          }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Congruence labs`,
        short_name: `Congruence labs`,
        start_url: `/`,
        background_color: `#feae4f`,
        theme_color: `#feae4f`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`,
      },
    }
  ],
}
