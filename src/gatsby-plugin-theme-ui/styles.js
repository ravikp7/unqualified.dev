export default {
  root: {
    fontFamily: `body`,
  },
  pre: {
    variant: `prism`,
    fontFamily: `monospace`,
    tabSize: 2,
    hyphens: `none`,
    marginBottom: 0,
    color: `white`,
    bg: `prism.background`,
    overflow: `auto`,
    borderRadius: 10,
    p: 3,
    float: `left`,
    minWidth: `100%`,
    boxSizing: `border-box`,
  },
  code: {
    // fontFamily: `monospace`,
    // from typography overrideThemeStyles
    // "h1 code, h2 code, h3 code, h4 code, h5 code, h6 code"
    fontSize: `inherit`,
    minWidth: `100%`,
  },
  inlineCode: {
    borderRadius: `0.3em`,
    color: `secondary`,
    backgroundColor: `highlight`,
    paddingTop: `0.15em`,
    paddingBottom: `0.05em`,
    paddingX: `0.2em`,
  },
  // from typography overrideThemeStyles
  a: {
    color: `primary`,
  },
  hr: {
    borderColor: `muted`,
  },
  p: {
    code: {
      fontSize: `inherit`,
      backgroundColor: `highlight`,
    },
  },
  li: {
    code: {
      fontSize: `inherit`,
    },
  },
  blockquote: {
    color: `inherit`,
    borderLeftColor: `inherit`,
    borderLeft: `0.3rem solid`,
    paddingLeft: `1rem`,
    opacity: 0.8,
  },
}
