import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Styled, css, useColorMode } from "theme-ui"
import allCategories from "../utils/categories"

const Categories = ({ categories, title }) => {
  const [colorMode] = useColorMode()
  return (
    <div
      style={{
        fontSize: `0.8rem`,
        display: `flex`,
        marginBottom: `0.3rem`,
      }}
    >
      {categories.map(category => (
        <Styled.a
          key={`${title}-${category}`}
          as={Link}
          to={`/categories/${category}/`}
          css={css({
            boxShadow:
              colorMode === "dark" ? `textShadowDark` : `textShadowLight`,
            padding: `0 2px`,
            marginRight: `0.4em`,
            textDecoration: `none`,
          })}
        >
          {allCategories[category] ? allCategories[category].toUpperCase() : ""}
        </Styled.a>
      ))}
    </div>
  )
}

Categories.propTypes = {
  title: PropTypes.string.isRequired, // To generate unique key in map
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const Tags = ({ tags, title }) => (
  <div
    style={{
      display: `flex`,
      fontSize: `0.9rem`,
    }}
  >
    {tags.map(tag => (
      <Styled.a
        key={`${title}-${tag}`}
        as={Link}
        to={`/tags/${tag}/`}
        style={{
          textDecoration: `none`,
          marginRight: `0.5rem`,
        }}
      >
        {`#${tag}`}
      </Styled.a>
    ))}
  </div>
)

Tags.propTypes = {
  title: PropTypes.string.isRequired, // To generate unique key in map
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

const ReadMoreButton = ({ url }) => (
  <Styled.a
    as={Link}
    to={url}
    css={css({
      textDecoration: `none`,
      fontSize: `0.8rem`,
      borderRadius: `0.8rem`,
      borderColor: `primary`,
      border: `2px solid`,
      padding: `0.2rem 0.5rem`,
    })}
  >
    Read Post
  </Styled.a>
)

ReadMoreButton.propTypes = {
  url: PropTypes.string.isRequired,
}

const PostCard = ({
  title,
  categories,
  tags,
  excerpt,
  date,
  timeToRead,
  url,
}) => {
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
      <Categories {...{ categories, title }} />
      <span>{excerpt}</span>
      <div
        style={{
          display: `flex`,
          justifyContent: `space-between`,
          marginTop: `0.2rem`,
        }}
      >
        <Tags {...{ tags, title }} />
        <ReadMoreButton {...{ url }} />
      </div>
    </div>
  )
}

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  excerpt: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  timeToRead: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
}

export default PostCard
