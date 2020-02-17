import React from "react"
import { graphql } from "gatsby"
import { Styled } from "theme-ui"

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
      <Styled.a
          href="https://medium.com/@ravikp7"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 0,
          }}
        >
          See old posts on Medium.com
        </Styled.a>
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
