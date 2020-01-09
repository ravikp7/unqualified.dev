import colors from "./colors"

const light = "rgb(0, 0, 0, 0.1)"
const dark = "rgb(255, 255, 255, 0.1)"

const textShadow = color => `inset 0px -15px 10px -15px ${color}`

export default {
  primaryLightCircular: `0 0 1px ${light}, 
              0 0 2px ${light}, 
              0 0 4px ${light}, 
              0 0 8px ${light},
              0 0 16px ${light};`,
  primaryDarkCircular: `0 0 1px ${dark}, 
              0 0 2px ${dark}, 
              0 0 4px ${dark}, 
              0 0 8px ${dark},
              0 0 16px ${dark};`,
  primaryLight: `0 6px 12px ${light};`,
  primaryDark: `0 6px 12px ${dark};`,
  textShadowLight: textShadow(colors.primary),
  textShadowDark: textShadow(colors.modes.dark.primary),
}
