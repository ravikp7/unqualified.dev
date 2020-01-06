import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"
import categories from "../utils/categories"

export default ({ data, pageContext }) => {
  const { edges } = data.allMdx
  const category = categories[pageContext.category]
  return (
    <Layout>
      <SEO title="Categories" />
      <p
        style={{ fontWeight: `bold` }}
      >{`Posts in the category "${category}"`}</p>
      {edges.map(({ node }) => {
        const { id, frontmatter, excerpt, fields, timeToRead } = node
        const { title, date, categories } = frontmatter
        const { slug } = fields
        return (
          <PostCard
            {...{ title, categories, excerpt, date, timeToRead }}
            url={slug}
            key={id}
          />
        )
      })}
    </Layout>
  )
}

export const query = graphql`
  query($category: String) {
    allMdx(
      limit: 200
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { categories: { in: [$category] } } }
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
