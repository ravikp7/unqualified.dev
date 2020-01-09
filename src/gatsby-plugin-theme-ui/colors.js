const primary = `#76ffff`
const lightHighlight = `#e0e0e0`
const darkHighlight = `#142b35`
const black90 = `#263238`
const black80 = `#1c313a`
const white = `#fff`
const lightWhite = `rgba(255, 255, 255, 0.86)`
const opaqueLightYellow = `rgba(255, 229, 229, 0.2)`
const opaqueWhite20 = `hsla(0, 0%, 100%, 0.2)`
const opaqueWhite60 = `hsla(0, 0%, 100%, 0.6)`
const gray20 = `hsla(0, 0%, 0%, 0.2)`
const gray60 = `hsla(0, 0%, 0%, 0.6)`

export default {
  initialColorModeName: "light",
  useColorSchemeMediaQuery: true,
  text: black90,
  background: white,
  primary: `#006978`,
  secondary: opaqueLightYellow,
  muted: gray20,
  mutedMore: gray60,
  highlight: lightHighlight,
  heading: black90,
  prism: {
    background: `#eeeeee`,
    comment: `rgb(128, 17, 147, 0.5)`,
    string: `rgb(103, 9, 128)`,
    var: `rgb(169, 196, 241)`,
    number: `rgb(255, 116, 73)`,
    constant: `#00c853`,
    punctuation: `rgb(179, 106, 228)`,
    className: `rgb(250, 77, 9)`,
    tag: `#ff6c9d`,
    boolean: `rgb(255, 88, 116)`,
    property: `rgb(70, 206, 192)`,
    namespace: `rgb(146, 201, 223)`,
    highlight: `#000a12`,
    highlightCodeLine: lightHighlight,
    text: `#bf360c`,
  },
  modes: {
    dark: {
      text: lightWhite,
      background: black90,
      primary,
      secondary: black80,
      muted: opaqueWhite20,
      mutedMore: opaqueWhite60,
      highlight: darkHighlight,
      heading: white,
      prism: {
        background: `#000a12`,
        comment: `rgb(128, 147, 147)`,
        string: `rgb(103, 219, 128)`,
        var: `rgb(169, 196, 241)`,
        number: `rgb(255, 116, 73)`,
        constant: `#76ffff`,
        punctuation: `rgb(179, 106, 228)`,
        className: `rgb(250, 177, 89)`,
        tag: `#ff6c9d`,
        boolean: `rgb(255, 88, 116)`,
        property: `rgb(70, 206, 192)`,
        namespace: `rgb(146, 201, 223)`,
        highlight: `#000a12`,
        highlightCodeLine: darkHighlight,
        text: `#fff`,
      },
    },
  },
}
