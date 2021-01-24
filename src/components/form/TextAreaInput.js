/** @jsx jsx */
import { jsx, Textarea } from "theme-ui"
import { transition } from "../../theme/mixin"
import colors from "../../theme/colors"
import { forwardRef } from "react"

function TextAreaInput(props, ref) {
  return (
    <Textarea
      sx={{
        width: "100%",
        height: `${props.style.height}`,
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

export default forwardRef(TextAreaInput)
