import React from "react"
import PropTypes from 'prop-types'
import { css } from "theme-ui"

const Button = ({ text, onClick, style }) => {
  return (
    <button
      css={css({
        border: `none`,
        backgroundColor: `primary`,
        borderRadius: `0.5rem`,
        margin: `1rem 0`,
        padding: `0.8rem`,
        fontSize: `0.9rem`,
        color: `background`,
        ...style,
      })}
      {...{ onClick }}
    >
      {text}
    </button>
  )
}

Button.defaultProps = {
  onClick: () => {},
  style: {},
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    style: PropTypes.object,
}

export default Button;
