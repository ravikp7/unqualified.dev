import React from "react"
import { Link } from "gatsby"
import { Styled, css, useColorMode } from "theme-ui"

const TagPill = ({ text }) => {
    const [colorMode] = useColorMode();
    return (
  <div
    css={css({
      boxShadow: colorMode === 'dark' ? `textShadowDark` : `textShadowLight`,
      padding: `0 2px`,
      marginRight: `0.4em`,
    })}
  >
    {text.toUpperCase()}
  </div>
)
}

const ReadMoreButton = ({ url }) => (
  <Styled.a
    as={Link}
    to={url}
    style={{
      textDecoration: `none`,
      position: `absolute`,
      right: `0`,
      bottom: `0`,
      fontSize: `0.8rem`,
    }}
  >
    <span
      css={css({
        borderRadius: `0.8rem`,
        borderColor: `primary`,
        border: `2px solid`,
        padding: `0.2rem 0.5rem`,
      })}
    >
      Read Post
    </span>
  </Styled.a>
)

const PostCard = ({ title, tags, excerpt, date, timeToRead, url }) => {
  return (
    <div
      style={{
        width: "100%",
        paddingBottom: `1.3rem`,
        marginBottom: "2.2rem",
        position: `relative`,
      }}
    >
      <Styled.a
        as={Link}
        to={url}
        style={{
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontSize: "1.5rem",
            fontWeight: "bolder",
            letterSpacing: "0.05rem",
          }}
        >
          {title}
        </span>
      </Styled.a>
      <div
        style={{
          fontSize: "0.9rem",
          marginBottom: `0.5rem`,
        }}
      >
        {`${date} • ${timeToRead} min read`}
      </div>
      <div
        style={{
          fontSize: `0.8rem`,
          display: `flex`,
          marginBottom: `0.3rem`,
        }}
      >
        <span
          style={{
            fontWeight: `bolder`,
          }}
        >
          TAGS:&nbsp;&nbsp;
        </span>
        {tags.map(text => (
          <TagPill {...{ text }} key={`${title}-${text}`} />
        ))}
      </div>
      <span>{excerpt}</span>
      <ReadMoreButton {...{ url }} />
    </div>
  )
}

export default PostCard
