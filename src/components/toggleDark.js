import React from "react"
import { css } from "theme-ui"
import Proptypes from "prop-types"

const ToggleDark = ({ isDark, onToggle }) => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <button
        title={isDark ? "Turn on light mode" : "Turn on dark mode"}
        aria-label="Toggle dark mode"
        css={css({
          height: "35px",
          width: "35px",
          borderRadius: "50%",
          backgroundColor: isDark ? "secondary" : "white",
          border: "none",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          boxShadow: isDark ? "primaryDarkCircular" : "primaryLightCircular",
          ":hover": {
            cursor: "pointer",
          },
          ":focus": {
            outline: 0,
          },
        })}
        onClick={onToggle}
      >
        <span
          css={css({
            content: `''`,
            backgroundColor: "lightGray",
            position: "absolute",
            height: "3px",
            width: "3px",
            borderRadius: "50%",
            transform: isDark ? "translateY(10px)" : "translate(0, 0)",
            transitionDuration: "0.8s",
            transitionProperty: "all",
            "::after": {
              content: `''`,
              backgroundColor: "lightGray",
              position: "absolute",
              height: "3px",
              width: "3px",
              borderRadius: "50%",
              transform: isDark ? "translate(-12px, -5px)" : "translate(0, 0)",
              transitionDuration: "0.8s",
              transitionProperty: "all",
            },
            "::before": {
              content: `''`,
              backgroundColor: "lightGray",
              position: "absolute",
              height: "3px",
              width: "3px",
              borderRadius: "50%",
              transform: isDark ? "translate(8px, -5px)" : "translate(0, 0)",
              transitionDuration: "0.8s",
              transitionProperty: "all",
            },
          })}
        ></span>

        <span
          css={css({
            content: `''`,
            backgroundColor: "lightGray",
            position: "absolute",
            height: "3px",
            width: "3px",
            borderRadius: "50%",
            transform: isDark ? "translateY(-10px)" : "translate(0, 0)",
            transitionDuration: "0.8s",
            transitionProperty: "all",
            "::after": {
              content: `''`,
              backgroundColor: "lightGray",
              position: "absolute",
              height: "3px",
              width: "3px",
              borderRadius: "50%",
              transform: isDark ? "translate(-12px, 5px)" : "translate(0, 0)",
              transitionDuration: "0.8s",
              transitionProperty: "all",
            },
            "::before": {
              content: `''`,
              backgroundColor: "lightGray",
              position: "absolute",
              height: "3px",
              width: "3px",
              borderRadius: "50%",
              transform: isDark ? "translate(8px, 5px)" : "translate(0, 0)",
              transitionDuration: "0.8s",
              transitionProperty: "all",
            },
          })}
        ></span>

        <span
          css={css({
            position: "absolute",
            backgroundColor: "lightGray",
            height: isDark ? "12px" : "24px",
            width: isDark ? "12px" : "24px",
            borderRadius: "50%",
            transitionDuration: "0.8s",
            transitionProperty: "height, width",
            overflow: "hidden",
            "::after": {
              content: `''`,
              backgroundColor: isDark ? "lightGray" : "white",
              position: "absolute",
              height: isDark ? "0px" : "24px",
              width: isDark ? "0px" : "24px",
              borderRadius: "50%",
              left: "6px",
              bottom: "9px",
              transitionDuration: "0.8s",
              transitionProperty: "height, width, backgroundColor",
            },
          })}
        ></span>
      </button>
      <label
        htmlFor="dark-mode-toggle"
        style={{
          opacity: 0,
          position: "absolute",
        }}
      >
        Dark Mode Toggle
        <input
          id="dark-mode-toggle"
          type="checkbox"
          checked={isDark}
          style={{
            opacity: 0,
          }}
          onChange={e => { onToggle() }}
        ></input>
      </label>
    </div>
  )
}

ToggleDark.propTypes = {
  isDark: Proptypes.bool.isRequired,
  onToggle: Proptypes.func.isRequired,
}

export default ToggleDark
