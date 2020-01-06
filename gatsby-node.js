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
      postsMarkdown: allMdx {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
      tagsGroup: allMdx(limit: 200) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)

  const { postsMarkdown, tagsGroup } = result.data

  postsMarkdown.edges.forEach(({ node }) => {
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
        category,
      },
    })
  })

  // Create pages for all tags
  const tags = tagsGroup.group
  tags.forEach(({ fieldValue: tag }) => {
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve("./src/templates/tags.js"),
      context: {
        tag,
      },
    })
  })
}
