import React from "react"
import { css, useColorMode } from "theme-ui"
import InputText from "./inputText"
import Button from "./button"

const ContactForm = () => {
  const [colorMode] = useColorMode()
  return (
    <form id="contact-form" name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field"
      css={css({
        margin: `3rem auto`,
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
          fontSize: `1.5rem`,
          fontWeight: `bold`,
          color: `primary`,
          marginBottom: `1rem`,
        })}
      >
        Say Hello!
      </span>
      <InputText name="visitor-name" label="Your Name" required />
      <InputText name="visitor-email" type="email" label="Your Email Address" required />
      <InputText
        name="message"
        label="Your Message"
        isTextarea
        required
        style={{
          height: `6rem`,
        }}
      />
      <input type="hidden" name="form-name" value="contact" />
      <Button text="SEND" onClick={() => {
          const form = document.getElementById('contact-form')
          form.submit()
          form.reset()
      }}/>
    </form>
  )
}

export default ContactForm
