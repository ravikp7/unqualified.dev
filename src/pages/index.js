import React, { useState, useEffect } from "react"
import { graphql, Link } from "gatsby"
import { Styled, css } from "theme-ui"
import DisplayPicture from "../images/ravi.jpg"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostCard from "../components/post-card"
import ContactForm from "../components/contact-form"

const Intro = () => {
  const imageDimension = 60 // pixels
  const frameOffset = 15 // pixels
  const [headline, setHeadline] = useState("")
  const headlineText = "Hey, I am Ravi Kumar Prasad"
  const timers = []
  useEffect(() => {
    for (let i = 0; i <= headlineText.length; i++) {
      const timer = setTimeout(() => {
        setHeadline(headlineText.substr(0, i))
      }, 90 * (i + 1))
      timers.push(timer)
    }
    return () => {
      timers.forEach(timer => {
        clearTimeout(timer)
      })
    }
  }, [])
  return (
    <div
      css={css({
        marginBottom: "2rem",
      })}
    >
      <div style={{ display: "flex", alignItems: "center", height: "4rem" }}>
        <div
          css={css({
            height: `${imageDimension + frameOffset}px`,
            width: `${imageDimension}px`,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderLeft: "4px solid",
            borderRight: "4px solid",
            borderColor: "primary",
            "::after": {
              height: `${imageDimension}px`,
              width: `${imageDimension + frameOffset}px`,
              borderTop: "4px solid",
              borderBottom: "4px solid",
              borderColor: "primary",
              position: "absolute",
              // transform: "rotate(180deg)",
              content: `''`,
            },
          })}
        >
          <img
            src={DisplayPicture}
            style={{
              height: `${imageDimension}px`,
              width: `${imageDimension}px`,
            }}
            alt="Ravi"
          />
        </div>
        <div
          css={css({
            color: "primary",
            fontWeight: "bolder",
            fontSize: "1.2rem",
            margin: "1rem",
          })}
        >
          {headline}
        </div>
      </div>
      <div
        style={{
          margin: "1rem 0",
        }}
      >
        The more I learn about this world, I realize that there's much more that
        I don't know. Currently, I'm focused more on Computer engineering, so
        through this corner of the Human web, I'll be documenting my learnings
        throughout this journey.
      </div>
    </div>
  )
}

const IndexPage = ({ data }) => {
  const { edges } = data.allMdx
  return (
    <Layout>
      <SEO title="Home" />
      <Intro />
      <p css={css({ color: "primary" })}>Latest Blog Posts</p>
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
