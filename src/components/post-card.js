import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Styled, css, useColorMode } from "theme-ui"
import categories from "../utils/categories"

const CategoryPill = ({ text }) => {
  const [colorMode] = useColorMode()
  return (
    <Styled.a
      as={Link}
      to={`/categories/${text}/`}
      css={css({
        boxShadow: colorMode === "dark" ? `textShadowDark` : `textShadowLight`,
        padding: `0 2px`,
        marginRight: `0.4em`,
        textDecoration: `none`,
      })}
    >
      {categories[text] ? categories[text].toUpperCase() : ""}
    </Styled.a>
  )
}

CategoryPill.propTypes = {
  text: PropTypes.string.isRequired,
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

ReadMoreButton.propTypes = {
  url: PropTypes.string.isRequired,
}

const PostCard = ({ title, categories, excerpt, date, timeToRead, url }) => {
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
        {categories.map(text => (
          <CategoryPill {...{ text }} key={`${title}-${text}`} />
        ))}
      </div>
      <span>{excerpt}</span>
      <ReadMoreButton {...{ url }} />
    </div>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}

export default PostCard
