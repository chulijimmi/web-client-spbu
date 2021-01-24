/** @jsx jsx */
import React from "react"
import { useState, useCallback } from "react"
import { jsx } from "theme-ui"
import colors from "../../theme/colors"
import { phone, ipad } from "../../theme/media-query"
import Modal from "./Modal"
import ButtonPrimary from "./Button"
import TextInput from "./TextInput"

function SubscribeForm() {
  const [email, setEmail] = useState("")
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState("")

  const handleSubscribe = useCallback(() => {
    setShowModal(false)
    if (email === "") {
      setMessage("Mohon lengkapi email anda !")
      setShowModal(true)
    } else {
      setMessage("Terima kasih telah berlangganan")
      setShowModal(true)
    }
  }, [email])

  return (
    <div
      sx={{
        display: "block",
        textAlign: "left",
        position: "relative",
        [phone]: {
          textAlign: "left",
        },
        [ipad]: {
          textAlign: "left",
        },
      }}
    >
      {showModal && (
        <div
          sx={{
            position: "relative",
            width: "400px",
            height: "100px",
            [phone]: {
              width: "100%",
            },
          }}
        >
          <Modal
            handleClosed={() => setShowModal(!showModal)}
            message={message}
          />
        </div>
      )}
      <p
        sx={{
          display: "block",
          color: colors.white,
          fontSize: "12px",
        }}
      >
        Berlangganan untuk mendapatkan info terbaru dari kami
      </p>
      <div
        sx={{
          display: "flex",
          width: "calc(100%)",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          [phone]: { width: "calc(100% - 60px)" },
        }}
      >
        <div
          sx={{
            display: "flex",
            width: "63%",
            height: "65px",
            justifyContent: "flex-start",
            [phone]: { width: "63%" },
          }}
        >
          <TextInput
            placeholder={"Email Address"}
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div
          sx={{
            display: "flex",
            width: "calc(37% - 15px)",
            paddingLeft: "15px",
            height: "65px",
            justifyContent: "flex-start",
            [phone]: { width: "calc(40% - 15px) " },
          }}
        >
          <ButtonPrimary label="Subscribe News" onClick={handleSubscribe} />
        </div>
      </div>
      <p
        sx={{
          color: colors.greyBlue,
          fontSize: "12px",
          fontStyle: "italic",
        }}
      >
        Data email pribadi anda kami lindungi
      </p>
    </div>
  )
}

export default SubscribeForm
