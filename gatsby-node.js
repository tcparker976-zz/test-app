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
  const { data } = await graphql(`
      {
        swapi {
          allSpecies {
            id
            name
            classification
          }
        }	
      }
  `)
  data.swapi.allSpecies.forEach(specie => {
    actions.createPage({
      path: `/${specie.name.toLowerCase().split(' ').join('-')}`,
      component: path.resolve(`./src/templates/sw-species.js`),
      context: {
        speciesId: specie.id
      },
    })
  })
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