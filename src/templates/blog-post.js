import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default ({ data }) => {
  const post = data.mdx
  const { frontmatter, body, timeToRead } = post;
  const { title, date } = frontmatter
  return (
    <Layout>
      <div>
        <h1
          style={{
            marginBottom: '0',
          }}
        >{title}</h1>
        <p
          style={{
            fontSize: '0.9rem',
            marginTop: '0',
          }}
        >
          {`${date} • ${timeToRead} min read`}
        </p>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      body
      timeToRead
    }
  }
`
