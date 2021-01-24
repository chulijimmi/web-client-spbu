/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import colors from "../../theme/colors"
import { phone } from "../../theme/media-query"

function MitraUsaha() {
  return (
    <div
      sx={{ textAlign: "center", marginTop: 40, [phone]: { paddingX: "20px" } }}
    >
      <h3 sx={{ color: colors.primary, fontWeight: 400 }}>
        Informasi Untuk Mitra Usaha
      </h3>
      <p sx={{ fontSize: 14, color: colors.greyDark, fontWeight: 400 }}>
        Untuk calon pemilik bisnis, anda dapat menguhungi kami di nomor telp
        081255554441
      </p>
    </div>
  )
}

export default MitraUsaha
