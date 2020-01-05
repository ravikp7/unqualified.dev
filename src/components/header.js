import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useColorMode, css } from "theme-ui"
import ToggleDark from "./toggleDark"
import React from "react"

const Header = ({ siteTitle }) => {
  const [colorMode, setColorMode] = useColorMode()
  const isDark = colorMode === "dark"
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <div
        css={css({
          margin: `0 auto`,
          maxWidth: `container`,
          padding: `1.45rem 1.0875rem`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "relative",
        })}
      >
        <h3 style={{ margin: 0 }}>
          <Link
            to="/"
            css={css({
              color: `primary`,
              textDecoration: `none`,
              letterSpacing: "2px",
            })}
          >
            {siteTitle}
          </Link>
        </h3>
        <span
          style={{
            position: "absolute",
            right: "1.45rem",
            height: "35px",
            width: "35px",
          }}
        >
          <span
            style={{
              position: "fixed",
              zIndex: 1,
            }}
          >
            <ToggleDark
              isDark={isDark}
              onToggle={() => {
                setColorMode(isDark ? "light" : "dark")
              }}
            />
          </span>
        </span>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
