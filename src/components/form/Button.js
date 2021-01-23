/** @jsx jsx */
import { jsx } from "theme-ui"
import { transition } from "../../theme/mixin"
import colors from "../../theme/colors"
import { forwardRef } from "react"

const ButtonPrimary = forwardRef((props, ref) => {
  return (
    <button
      sx={{
        background: `${colors.primaryLight}`,
        border: "1px solid transparent",
        borderRadius: `${props.oval ? "50px" : "5px"}`,
        paddingX: "20px",
        paddingY: "10px",
        fontSize: "14px",
        color: colors.white,
        ":hover": {
          color: colors.white,
          cursor: "pointer",
          background: `${colors.primary}`,
          border: `1px solid ${colors.primary}`,
        },
        ":focus": {
          outline: "none",
          border: `1px solid ${colors.grey}`,
          background: `${colors.primaryLight}`,
          color: `${colors.white}`,
        },
        animationName: "backgroundButton",
        ...transition("background-color", "300ms"),
        width: `${props.fullWidth ? "100%" : "auto"}`,
      }}
      onClick={props.onClick}
      ref={ref}
    >
      {props.label}
    </button>
  )
})

const ButtonSecondary = forwardRef((props, ref) => {
  return (
    <button
      sx={{
        background: `${colors.greyDark}`,
        border: "1px solid transparent",
        borderRadius: `${props.oval ? "50px" : "5px"}`,
        paddingX: "20px",
        paddingY: "10px",
        fontSize: "14px",
        color: colors.white,
        ":hover": {
          color: colors.white,
          cursor: "pointer",
          background: `${colors.primary}`,
          border: `1px solid ${colors.primary}`,
        },
        ":focus": {
          outline: "none",
          border: `1px solid ${colors.grey}`,
          background: `${colors.greyDark}`,
          color: `${colors.white}`,
        },
        animationName: "backgroundButton",
        ...transition("background-color", "300ms"),
        width: `${props.fullWidth ? "100%" : "auto"}`,
      }}
      onClick={props.onClick}
      ref={ref}
    >
      {props.label}
    </button>
  )
})

export default ButtonPrimary
export { ButtonSecondary }
