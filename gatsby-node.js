const path = require('path')
const { createFilePath } = require(`gatsby-source-filesystem`)


//this next block creats a slug from the file name and then adds that as a node to MarkdownRemark

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
        node,
        name: `greeting`,
        value: "hello",
      })
  }
}

//

exports.createPages = async ({ graphql, actions}) => {
  const { createPage } = actions
  const result = await graphql(`
  query {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
        }
      }
    }
  }
` )
result.data.allMarkdownRemark.edges.forEach(({ node }) => {
  console.log(node.fields.slug)
  createPage({
    path: node.fields.slug,
    component: path.resolve(`./src/templates/legs.js`),
    context: {
      // Data passed to context is available
      // in page queries as GraphQL variables.
      slug: node.fields.slug,
    },
  })
})
}