const path = require(`path`)
// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}
// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/templates/cinema.js`)
  const result = await graphql(`
    query {
        allFilmsYaml {
            edges {
              node {
                id
                title
                slug
              }
            }
          }
    }
  `)
  result.data.allFilmsYaml.edges.forEach(edge => {
    createPage({
      path: `/cinemas/${edge.node.slug}`,
      component: blogPostTemplate,
      context: {
        title: edge.node.title,
        id: edge.node.id
      },
    })
  })
}