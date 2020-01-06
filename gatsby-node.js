const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
const categories = require("./src/utils/categories")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode, basePath: "posts" })
    createNodeField({
      node,
      name: "slug",
      value: `/blog${slug}`,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  result.data.allMdx.edges.forEach(({ node }) => {
    const { slug } = node.fields
    createPage({
      path: slug,
      component: path.resolve("./src/templates/blog-post.js"),
      context: {
        slug,
      },
    })
  })

  // Create pages for all categories
  Object.keys(categories).forEach(category => {
    createPage({
      path: `/categories/${category}/`,
      component: path.resolve("./src/templates/categories.js"),
      context: {
        category
      }
    })
  })
}
