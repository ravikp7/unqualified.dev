import React from "react"
import { graphql, Link } from "gatsby"
import { Styled } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"
import ContactForm from "../components/contact-form"

const IndexPage = ({ data }) => {
  const { edges } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <p>Latest Blog Posts</p>
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
      <div
        style={{
          width: `100%`,
          textAlign: `right`,
        }}
      >
        <Styled.a
          as={Link}
          to="/blog"
          style={{
            marginRight: 0,
          }}
        >
          All Blog Posts →
        </Styled.a>
      </div>
      <ContactForm />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    allMdx(limit: 3, sort: { fields: frontmatter___date, order: DESC }) {
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
