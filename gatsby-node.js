const path = require(`path`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  // const { createNodeField } = actions
  // if (node.internal.type === `MarkdownRemark`) {
  //   const slug = createFilePath({ node, getNode, basePath: `pages` })
  //   createNodeField({
  //     node,
  //     name: `slug`,
  //     value: slug,
  //   })
  // }
}

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    query {
      marketing{
        allMarketingPages {
          id
          data
          keyword
          url
          template
          metadata
        }
      }
    }
  `)
  // console.log('DATA', result.data.marketing.allMarketingPages)
  result.data.marketing.allMarketingPages.forEach((page, i) => {
    const { id, template, url, keyword } = page
    actions.createPage({
      path: url,
      component: path.resolve(`./src/templates/${template}.js`),
      context: {
        id,
        keyword
      }
    })
  })
  // data.swapi.allSpecies.forEach((species, i) => {
    // console.log('HELLOO!')
    // const {name, classification} = species
    // if (i % 2 === 0) {
    //   actions.createPage({
    //     path: `/${species.name.toLowerCase().split(' ').join('-')}`,
    //     component: path.resolve(`./src/templates/sw-species.js`),
    //     context: {
    //       name,
    //       classification,
    //     },
    //   })
    // } else {
    //   actions.createPage({
    //     path: `/${species.name.toLowerCase().split(' ').join('-')}`,
    //     component: path.resolve(`./src/templates/alt-sw-species.js`),
    //     context: {
    //       name,
    //       classification,
    //     },
    //   })
    // }
  // })
  // return graphql(`
  //   {
  //     swapi {
  //       allSpecies {
  //         id
  //         name
  //         classification
  //       }
  //     }	
  //   }
  // `).then(result => {
  //   console.log('RESULT', result)
  //   const { data } = result
  //   data.swapi.allSpecies.forEach(({ name, classification, id }) => {
  //     console.log('species', name, classification)
  //     console.log('component', path.resolve(`./src/templates/sw-species.js`))
  //     createPage({
  //       path: `/${name.toLowerCase().split(' ').join('-')}`,
  //       component: path.resolve(`./src/templates/sw-species.js`),
  //       context: {
  //         speciesId: id
  //       },
  //     })
  //   })
  // })
}