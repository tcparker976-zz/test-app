module.exports = {
  siteMetadata: {
    siteUrl: `https://test-project-production.herokuapp.com`,
    title: `Pandas Eating Lots`,
  },
  plugins: [
     // Simple config, passing URL
     {
      resolve: "gatsby-source-graphql",
      options: {
        // This type will contain remote schema Query type
        typeName: "allMarketingPages",
        // This is field under which it's accessible
        fieldName: "marketing",
        // Url to query from
        url: "http://localhost:4000/api/graphs",
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://test-project-production.herokuapp.com',
        sitemap: 'https://test-project-production.herokuapp.com/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    `gatsby-plugin-remove-trailing-slashes`,
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