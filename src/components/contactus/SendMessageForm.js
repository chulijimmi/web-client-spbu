/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import colors from "../../theme/colors"
import { BiMailSend } from "react-icons/bi"
import TextInput from "../form/TextInput"
import TextAreaInput from "../form/TextAreaInput"
import ButtonPrimary from "../form/Button"

function SendMessageForm() {
  const [yourname, setYourName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [socialMedia, setSocialMedia] = React.useState("")
  const [phoneNumber, setPhoneNumber] = React.useState("")
  const [message, setMessage] = React.useState("")
  const handleSendMessage = React.useCallback(() => {
    console.log("Kirim")
  }, [])

  return (
    <div sx={{ paddingX: "20px" }}>
      <div sx={{ display: "flex", justifyContent: "space-between" }}>
        <h3 sx={{ fontWeight: 400, color: colors.darkLight }}>
          Form Kirim Pesan / Saran
        </h3>
        <BiMailSend
          size={32}
          sx={{ color: colors.primaryLight, marginTop: "10px" }}
        />
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <div sx={{ width: "calc(50% - 10px)" }}>
          <TextInput
            placeholder={"Nama Anda"}
            onChange={e => setYourName(e.target.value)}
            value={yourname}
          />
        </div>
        <div sx={{ width: "calc(50% - 10px)" }}>
          <TextInput
            placeholder={"Email Address"}
            onChange={e => setEmail(e.target.value)}
            value={email}
          />
        </div>
      </div>
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginY: "20px",
        }}
      >
        <div sx={{ width: "calc(50% - 10px)" }}>
          <TextInput
            placeholder={"No. Telp / HP"}
            onChange={e => setPhoneNumber(e.target.value)}
            value={phoneNumber}
          />
        </div>
        <div sx={{ width: "calc(50% - 10px)" }}>
          <TextInput
            placeholder={"Sosial Media Anda (Instagram / Facebook)"}
            onChange={e => setSocialMedia(e.target.value)}
            value={socialMedia}
          />
        </div>
      </div>
      <div
        sx={{
          width: "100%",
          marginY: "20px",
        }}
      >
        <TextAreaInput
          placeholder={"Tulis pesan / saran anda"}
          onChange={e => setMessage(e.target.value)}
          defaultValue={message}
          style={{ height: 120 }}
        />
      </div>
      <ButtonPrimary
        label="Kirim Pesan"
        onClick={handleSendMessage}
        oval={true}
      />
    </div>
  )
}

export default SendMessageForm
