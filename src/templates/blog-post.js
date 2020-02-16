import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Button from "../components/button"
// import NewsLetter from "../components/newsletter"

export default ({ data }) => {
  const post = data.mdx
  const { frontmatter, body, timeToRead } = post
  const { title, date } = frontmatter
  return (
    <Layout>
      <SEO {...{ title }} />
      <div>
        <h2
          css={css({
            marginBottom: "0",
            color: `primary`,
          })}
        >
          {title}
        </h2>
        <p
          style={{
            fontSize: "0.9rem",
            marginTop: "0",
          }}
        >
          {`${date} • ${timeToRead} min read`}
        </p>
        <MDXRenderer>{body}</MDXRenderer>
      </div>
      <Button
        text="SHARE"
        style={{ display: navigator.share ? "block" : "none" }}
        onClick={() => {
          navigator.share(window.location.href)
        }}
      />
      {/* <NewsLetter /> */}
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
