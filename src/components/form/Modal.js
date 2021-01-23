/** @jsx jsx */
import { jsx } from "theme-ui"
import { AiOutlineClose } from "react-icons/ai"
import colors from "../../theme/colors"
import { HideUntilLoaded } from "react-animation"

function Modal({ handleClosed, message }) {
  return (
    <div
      sx={{
        position: "absolute",
        width: "100%",
      }}
    >
      <HideUntilLoaded animationIn="bounceIn">
        <div
          sx={{
            width: "100%",
            background: "white",
            padding: "10px 10px 10px 10px",
            borderRadius: "5px",
            boxShadow: "rgba(0, 0, 0, 0.1) 0px 2px 15px 0px",
            textAlign: "center",
            position: "relative",
          }}
        >
          <div
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <button
              sx={{
                background: "transparent",
                border: `1px solid ${colors.primaryLight}`,
                width: "30px",
                height: "30px",
                borderRadius: "50%",
                ":hover": {
                  cursor: "pointer",
                  transform: "scale(1.1)",
                  boxShadow: "rgba(0, 0, 0, 0.1) 0px 1px 6px 0px",
                },
                ":focus": {
                  outline: "none",
                },
              }}
              onClick={handleClosed}
            >
              <AiOutlineClose
                size={14}
                sx={{
                  color: colors.primary,
                  marginTop: "2px",
                }}
              />
            </button>
          </div>
          <p
            sx={{
              fontSize: 14,
              lineHeight: "1.8",
              letterSpacing: "0.02em",
              color: colors.primary,
            }}
          >
            {message}
          </p>
        </div>
      </HideUntilLoaded>
    </div>
  )
}

export default Modal
