import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { css, Styled, useColorMode } from "theme-ui"
import { MDXRenderer } from "gatsby-plugin-mdx"
// import NewsLetter from "../components/newsletter"

export default ({ data }) => {
  const post = data.mdx
  const { frontmatter, body, timeToRead, fields } = post
  const { title, date } = frontmatter
  const [colorMode] = useColorMode()
  const twitterDiscussUrl = `https://mobile.twitter.com/search?q=${encodeURIComponent(`https://unqualified.dev${fields.slug}`)}`
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
      <Styled.a
          href={twitterDiscussUrl}
          target="_blank"
          rel="noopener noreferrer"
          css={css({
            boxShadow:
              colorMode === "dark" ? `textShadowDark` : `textShadowLight`,
            padding: `0 2px`,
            marginRight: `0.4em`,
            textDecoration: `none`,
          })}
        >
          Continue discussion on Twitter →
        </Styled.a>
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
      fields {
        slug
      }
    }
  }
`
