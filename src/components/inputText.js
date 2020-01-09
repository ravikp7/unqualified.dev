import React, { useState } from "react"
import PropTypes from "prop-types"
import { css } from "theme-ui"

const InputText = ({ label, name, required, isTextarea, style, type }) => {
  const [isShowingLabel, setLabelVisibility] = useState(false)
  const InputTag = isTextarea ? 'textarea' : 'input';
  return (
    <>
      <label
        htmlFor={name}
        style={{
          position: `relative`,
          margin: `1rem 0`,
        }}
      >
        <span
          css={css({
            fontSize: isShowingLabel ? `0.7rem` : `0.8rem`,
            transform: isShowingLabel
              ? `translate(0.2rem, -1.1rem)`
              : `translate(0.8rem, 0.5rem)`,
            transitionProperty: `all`,
            transitionDuration: `0.3s`,
            color: `mutedMore`,
            position: `absolute`,
          })}
        >
          {label}
        </span>
        <InputTag
          id={name}
          {...{ type, required, name }}
          css={css({
            padding: `0.5rem`,
            border: `0.5px solid`,
            borderColor: `muted`,
            borderRadius: `0.3rem`,
            background: `transparent`,
            width: `100%`,
            boxSizing: `border-box`,
            color: `text`,
            ...style,
          })}
          onFocus={({ target }) => {
            const { value } = target
            if (value.length >= 0) {
              setLabelVisibility(true)
            } else {
              setLabelVisibility(false)
            }
          }}
          onBlur={({ target }) => {
            const { value } = target
            if (value.length === 0) {
              setLabelVisibility(false)
            } else {
              setLabelVisibility(true)
            }
          }}
        />
      </label>
    </>
  )
}

InputText.defaultProps = {
  required: false,
  isTextarea: false,
  style: {},
  type: 'text',
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  isTextarea: PropTypes.bool,
  style: PropTypes.object,
  type: PropTypes.string,
}

export default InputText
