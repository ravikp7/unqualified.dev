import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"

const BlogPage = ({ data }) => {
  const { edges } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <p>All Blog Posts</p>
      {edges.map(({ node }) => {
        const { id, frontmatter, excerpt, fields, timeToRead } = node
        const { title, date, categories, tags } = frontmatter
        const { slug } = fields
        return (
          <PostCard
            {...{ title, categories, excerpt, date, timeToRead, tags }}
            url={slug}
            key={id}
          />
        )
      })}
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            tags
            title
            categories
          }
          excerpt
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`