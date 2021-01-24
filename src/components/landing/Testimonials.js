/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import colors from "../../theme/colors"
import Man from "../../images/man.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { phone } from "../../theme/media-query"
function Testimonials() {
  return (
    <div sx={{ background: colors.greyLight }}>
      <div
        sx={{
          width: "40%",
          paddingY: 40,
          margin: "0 auto",
          [phone]: {
            width: "calc(100% - 40px)",
            paddingX: "20px",
          },
        }}
      >
        <h1
          sx={{
            color: colors.dark,
            fontWeight: 400,
            letterSpacing: "0.02em",
            textAlign: "center",
          }}
        >
          Apa Kata Mereka
        </h1>
        <div
          sx={{
            width: "70px",
            height: "70px",
            borderRadius: "70px",
            margin: "0 auto",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
          }}
        >
          <LazyLoadImage
            alt={"Spbu"}
            effect="blur"
            src={Man}
            width={"100%"}
            height={"100%"}
            sx={{
              width: "100%",
              height: "calc(100%)",
              objectFit: "cover",
              objectPosition: "100% 100%",
              zIndex: "1",
              borderRadius: "50px",
            }}
          />
        </div>
        <p
          sx={{ color: colors.primary, fontSize: "18px", textAlign: "center" }}
        >
          Arif Nugraha
        </p>
        <p
          sx={{
            color: colors.darkLight,
            textAlign: "center",
            lineHeight: "24px",
            letterSpacing: "0.02em",
            fontSize: "14px",
          }}
        >
          "Beli bensin di sini sangat nyaman, pelayanan staff nya ramah dan enak
          ada fasilitas mushola jadi masih bisa sempatin sholat."
        </p>
      </div>
    </div>
  )
}

export default Testimonials
