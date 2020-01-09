import React from "react"
import PropTypes from 'prop-types'
import { css } from "theme-ui"

const Button = ({ text, onClick }) => {
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
      })}
      {...{ onClick }}
    >
      {text}
    </button>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
}

export default Button;
