import React from "react"
import { css, useColorMode } from "theme-ui"
import InputText from "./inputText"
import Button from "./button"

const NewsLetter = () => {
  const [colorMode] = useColorMode()
  return (
    <div
      css={css({
        margin: `2rem auto`,
        padding: `1rem 1.5rem`,
        boxShadow: colorMode === "dark" ? `primaryDark` : `primaryLight`,
        display: `flex`,
        flexDirection: `column`,
        borderRadius: `0.4rem`,
        maxWidth: `350px`,
      })}
    >
      <span
        css={css({
          fontSize: `1rem`,
          fontWeight: `bold`,
          color: `primary`,
          marginBottom: `1rem`,
        })}
      >
        Subscribe to the NewsLetter
      </span>
      <InputText name="firstName" label="Your first Name" required />
      <InputText name="email" label="Your email address" required />
      <Button text="Subscribe" onClick={() => {}} />
    </div>
  )
}

export default NewsLetter
