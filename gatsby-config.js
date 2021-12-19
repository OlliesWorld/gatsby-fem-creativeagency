module.exports = {
  siteMetadata: {
    title: `FEM Creative Agency`,
    description: `Frontend Mentor Creative Agency example`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        
        display: `minimal-ui`,
        icon: `src/images/Planet-R.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-postcss',
    
  ],
}
