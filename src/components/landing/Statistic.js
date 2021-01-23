/** @jsx jsx */
import React from "react"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { jsx } from "theme-ui"
import colors from "../../theme/colors"
import Building from "../../images/building.jpg"
import { ButtonSecondary } from "../form/Button"

function InfoStatistic({ number, title, subTitle }) {
  return (
    <div
      sx={{
        width: "50%",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <p
        sx={{
          width: "50%",
          color: colors.white,
          fontWeight: 400,
          fontSize: 32,
        }}
      >
        {number}
      </p>
      <div
        sx={{
          width: "50%",
          textAlign: "left",
          marginTop: "20px",
          paddingLeft: "20px",
        }}
      >
        <p sx={{ color: colors.white }}>{title}</p>
        <p
          sx={{
            color: colors.greyLight,
            fontSize: "12px",
            fontStyle: "italic",
          }}
        >
          {subTitle}
        </p>
      </div>
    </div>
  )
}
function Statistic() {
  return (
    <div sx={{ position: "relative", height: "285px" }}>
      <LazyLoadImage
        alt={"Spbu"}
        effect="blur"
        src={Building}
        width={"100%"}
        height={"100%"}
        sx={{
          width: "100%",
          height: "calc(100%)",
          objectFit: "cover",
          objectPosition: "80% 80%",
          zIndex: "1",
        }}
      />
      <div
        sx={{
          top: 0,
          width: "100%",
          position: "absolute",
          textAlign: "center",
          zIndex: "2",
          background: "rgb(2, 0, 36)",
          background:
            "linear-gradient(0deg,rgba(145,0,0,0.5) 0%, rgba(0,0,0,0.7) 70%,rgba(0,0,0,0.7) 100%)",
        }}
      >
        <div
          sx={{
            width: "1080px",
            height: "auto",
            margin: "0 auto",
            paddingY: "40px",
          }}
        >
          <div sx={{ display: "flex", justifyContent: "space-between" }}>
            <div sx={{ width: "60%" }}>
              <div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InfoStatistic
                  number={"27.3M"}
                  title={"Liter Bensin"}
                  subTitle={"Terjual dari 2020"}
                />
                <InfoStatistic
                  number={"24.8M"}
                  title={"Liter Pertamax"}
                  subTitle={"Terjual dari 2020"}
                />
              </div>
              <div
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <InfoStatistic
                  number={"19.2M"}
                  title={"Liter Solar"}
                  subTitle={"Terjual dari 2020"}
                />
                <InfoStatistic
                  number={"23.8M"}
                  title={"Liter Pertalite"}
                  subTitle={"Terjual dari 2020"}
                />
              </div>
            </div>
            <div sx={{ width: "40%", textAlign: "right" }}>
              <p
                sx={{ fontWeight: 300, color: colors.white, marginTop: "60px" }}
              >
                Apakah anda ingin menjadi partner kami
              </p>
              <ButtonSecondary label={"Hubungi Kami"} oval={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Statistic
