module.exports = {
  siteMetadata: {
    siteUrl: `https://test-project-production.herokuapp.com/`,
    title: `Pandas Eating Lots`,
  },
  plugins: [
     // Simple config, passing URL
     {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "SWAPI",
        // This is field under which it's accessible
        fieldName: "swapi",
        // Url to query from
        url: "https://api.graphcms.com/simple/v1/swapi",
      },
    },
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-emotion`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    }
  ]
}