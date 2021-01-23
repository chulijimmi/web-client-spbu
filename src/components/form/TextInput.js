/** @jsx jsx */
import { jsx, Input } from "theme-ui"
import { transition } from "../../theme/mixin"
import colors from "../../theme/colors"
import { forwardRef } from "react"

function TextInput(props, ref) {
  return (
    <Input
      sx={{
        width: "100%",
        paddingY: "14px",
        paddingX: "20px",
        fontSize: "12px",
        background: `${colors.white}`,
        ":focus": {
          outline: "none",
          border: `1px solid ${colors.dark}`,
          boxShadow: `0px 2px 10px ${colors.grey}, 0 2px 2px ${colors.grey}`,
        },
        animationName: "backgroundButton",
        ...transition("background-color", "300ms"),
        ...transition("box-shadow", "0.3s"),
      }}
      ref={ref}
      {...props}
    />
  )
}

export default forwardRef(TextInput)
