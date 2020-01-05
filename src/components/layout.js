/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Styled, css } from "theme-ui"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const footerLinks = [
    {
      title: "twitter",
      url: "https://twitter.com/ravikp7",
    },
    {
      title: "github",
      url: "https://github.com/ravikp7",
    },
    {
      title: "linkedin",
      url: "https://linkedin.com/in/ravikp7",
    },
  ]

  return (
    <Styled.root>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        css={css({
          margin: `0 auto`,
          maxWidth: `container`,
          padding: `0px 1.0875rem 1.45rem`,
        })}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `2rem`,
          }}
        >
          {footerLinks.map(({ title, url }) => (
            <Fragment key={url}>
              <Styled.a
                href={url}
                target="_blank"
                style={{
                  letterSpacing: `0.08rem`,
                  fontWeight: `bolder`,
                  textUnderlinePosition: `under`,
                }}
              >
                {`/${title}`}
              </Styled.a>
              &nbsp;&nbsp;
            </Fragment>
          ))}
        </footer>
      </div>
    </Styled.root>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
