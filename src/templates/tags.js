import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"

export default ({ data, pageContext }) => {
  const { edges } = data.allMdx
  return (
    <Layout>
      <SEO title="Tags" />
      <p
        style={{ fontWeight: `bold` }}
      >{`Posts tagged with "${pageContext.tag}"`}</p>
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

export const query = graphql`
  query($tag: String) {
    allMdx(
      limit: 200
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            date
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
