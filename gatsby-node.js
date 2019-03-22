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
  data.swapi.allSpecies.forEach((species, i) => {

    if (i % 2 === 0) {
      actions.createPage({
        path: `/${species.name.toLowerCase().split(' ').join('-')}`,
        component: path.resolve(`./src/templates/sw-species.js`),
        context: {
          speciesId: species.id
        },
      })
    } else {
      actions.createPage({
        path: `/${species.name.toLowerCase().split(' ').join('-')}`,
        component: path.resolve(`./src/templates/alt-sw-species.js`),
        context: {
          speciesId: species.id
        },
      })
    }
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