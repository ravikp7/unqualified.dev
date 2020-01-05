import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"

const IndexPage = ({ data }) => {
  const { edges } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <p>Latest Blog Posts</p>
      {edges.map(({ node }) => {
        const { id, frontmatter, excerpt, fields, timeToRead } = node
        const { title, date, tags } = frontmatter
        const { slug } = fields
        return (
          <PostCard
            {...{ title, tags, excerpt, date, timeToRead }}
            url={slug}
            key={id}
          />
        )
      })}
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date
            tags
            title
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
