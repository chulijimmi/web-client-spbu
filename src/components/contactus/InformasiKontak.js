/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import colors from "../../theme/colors"
import { GoLocation } from "react-icons/go"
import { AiOutlinePhone } from "react-icons/ai"
import { RiMailOpenLine } from "react-icons/ri"
function InformasiKontak() {
  return (
    <div sx={{ paddingX: "20px" }}>
      <h3 sx={{ fontWeight: 400, color: colors.white }}>Informasi Kontak</h3>
      <div sx={{ marginY: "20px" }}>
        <GoLocation size={12} sx={{ color: colors.white }} />
        <span
          sx={{
            marginLeft: "5px",
            color: colors.white,
            fontWeight: 400,
            fontSize: 14,
            letterSpacing: "0.02em",
          }}
        >
          Alamat
        </span>
      </div>
      <p
        sx={{
          color: colors.white,
          fontSize: "12px",
          fontWeight: 400,
          marginLeft: 17,
        }}
      >
        Jl. Lorem ipsum dolor sir amet lorem ipsum, Kendari, Sulawesi Tenggara
      </p>
      <div sx={{ marginY: "20px" }}>
        <AiOutlinePhone size={12} sx={{ color: colors.white }} />
        <span
          sx={{
            marginLeft: "5px",
            color: colors.white,
            fontWeight: 400,
            fontSize: 14,
            letterSpacing: "0.02em",
          }}
        >
          No Telp
        </span>
      </div>
      <p
        sx={{
          color: colors.white,
          fontSize: "12px",
          fontWeight: 400,
          marginLeft: 17,
        }}
      >
        081255554444
      </p>
      <div sx={{ marginY: "20px" }}>
        <RiMailOpenLine size={12} sx={{ color: colors.white }} />
        <span
          sx={{
            marginLeft: "5px",
            color: colors.white,
            fontWeight: 400,
            fontSize: 14,
            letterSpacing: "0.02em",
          }}
        >
          Email
        </span>
      </div>
      <p
        sx={{
          color: colors.white,
          fontSize: "12px",
          fontWeight: 400,
          marginLeft: 17,
        }}
      >
        youremail@mail.com
      </p>
    </div>
  )
}

export default InformasiKontak
