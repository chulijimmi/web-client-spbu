/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import colors from "../../theme/colors"
import ButtonPrimary, { ButtonSecondary } from "../form/Button"
import SpbuDoro from "../../images/bg03.jpeg"
import SpbuThr from "../../images/bg02.jpg"
import MinimarketDoro from "../../images/minimarket_doro.jpg"
import MinimarketThr from "../../images/minimarket_thr.jpg"
import ToiletDoro from "../../images/toilet_doro.jpg"
import ToiletThr from "../../images/toilet_thr.jpg"
import { LazyLoadImage } from "react-lazy-load-image-component"

function ContentSpbuDoro({ onPressLogin }) {
  return (
    <div
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <div sx={{ width: "50%" }}>
        <div sx={{ height: "400px", position: "relative" }}>
          {/* <!--- Start Image 1 ---> */}
          <div
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              top: "10px",
              left: "100px",
              right: 0,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
              zIndex: 3,
            }}
          >
            <div sx={{ width: "100%", height: "100%" }}>
              <LazyLoadImage
                alt={"Spbu"}
                effect="blur"
                src={MinimarketDoro}
                width={"100%"}
                height={"100%"}
                sx={{
                  width: "100%",
                  height: "calc(100%)",
                  objectFit: "cover",
                  objectPosition: "100% 100%",
                  zIndex: "1",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          {/* <!--- End Image 1 ---> */}
          {/* <!--- Start Image 2 ---> */}
          <div
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              top: "50px",
              left: "20px",
              right: 0,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
              zIndex: 2,
            }}
          >
            <div sx={{ width: "100%", height: "100%" }}>
              <LazyLoadImage
                alt={"Spbu"}
                effect="blur"
                src={SpbuDoro}
                width={"100%"}
                height={"100%"}
                sx={{
                  width: "100%",
                  height: "calc(100%)",
                  objectFit: "cover",
                  objectPosition: "100% 100%",
                  zIndex: "1",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          {/* <!---End Image 2 ---> */}
          {/* <!--- Start Image 3 ---> */}
          <div
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              top: "80px",
              right: "40px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
              zIndex: 1,
            }}
          >
            <div sx={{ width: "100%", height: "100%" }}>
              <LazyLoadImage
                alt={"Spbu"}
                effect="blur"
                src={ToiletDoro}
                width={"100%"}
                height={"100%"}
                sx={{
                  width: "100%",
                  height: "calc(100%)",
                  objectFit: "cover",
                  objectPosition: "100% 100%",
                  zIndex: "1",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          {/* <!---End Image 3 ---> */}
        </div>
      </div>
      <div sx={{ width: "50%" }}>
        <div sx={{ paddingLeft: "20px" }}>
          <h2 sx={{ fontWeight: 400, color: colors.dark }}>Spbu Doro</h2>
          <p
            sx={{
              color: colors.darkLight,
            }}
          >
            Berlokasi di jalan lorem ipsum dolor sir amet, dekat dengan
            fasilitas umum.
          </p>
          <p
            sx={{
              color: colors.darkLight,
            }}
          >
            Fasilitas SPBU meliputi
          </p>
          <ul>
            <li
              sx={{
                color: colors.darkLight,
                marginY: "10px",
              }}
            >
              Mushola
            </li>
            <li
              sx={{
                color: colors.darkLight,
                marginY: "10px",
              }}
            >
              Toilet Umum
            </li>
            <li
              sx={{
                color: colors.darkLight,
                marginY: "10px",
              }}
            >
              Minimarket
            </li>
          </ul>
          <p
            sx={{
              color: colors.darkLight,
              marginTop: "40px",
              fontStyle: "italic",
              fontSize: "12px",
              lineHeight: "20px",
            }}
          >
            Spbu ini memiliki sistem aplikasi terintegrasi dengan laporan
            statistik data penjualan didukung dengan menggunakan sistem self
            services.
          </p>
          <ButtonPrimary
            onClick={onPressLogin}
            label={"Login Aplikasi"}
            oval={true}
          />
        </div>
      </div>
    </div>
  )
}

function ContentSpbuThr({ onPressLogin }) {
  return (
    <div
      sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
    >
      <div sx={{ width: "50%" }}>
        <div sx={{ height: "400px", position: "relative" }}>
          {/* <!--- Start Image 1 ---> */}
          <div
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              top: "10px",
              left: "100px",
              right: 0,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
              zIndex: 3,
            }}
          >
            <div sx={{ width: "100%", height: "100%" }}>
              <LazyLoadImage
                alt={"Spbu"}
                effect="blur"
                src={MinimarketThr}
                width={"100%"}
                height={"100%"}
                sx={{
                  width: "100%",
                  height: "calc(100%)",
                  objectFit: "cover",
                  objectPosition: "100% 100%",
                  zIndex: "1",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          {/* <!--- End Image 1 ---> */}
          {/* <!--- Start Image 2 ---> */}
          <div
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              top: "50px",
              left: "20px",
              right: 0,
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
              zIndex: 2,
            }}
          >
            <div sx={{ width: "100%", height: "100%" }}>
              <LazyLoadImage
                alt={"Spbu"}
                effect="blur"
                src={SpbuThr}
                width={"100%"}
                height={"100%"}
                sx={{
                  width: "100%",
                  height: "calc(100%)",
                  objectFit: "cover",
                  objectPosition: "100% 100%",
                  zIndex: "1",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          {/* <!---End Image 2 ---> */}
          {/* <!--- Start Image 3 ---> */}
          <div
            sx={{
              position: "absolute",
              width: "300px",
              height: "300px",
              borderRadius: "20px",
              top: "80px",
              right: "40px",
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.30)",
              zIndex: 1,
            }}
          >
            <div sx={{ width: "100%", height: "100%" }}>
              <LazyLoadImage
                alt={"Spbu"}
                effect="blur"
                src={ToiletThr}
                width={"100%"}
                height={"100%"}
                sx={{
                  width: "100%",
                  height: "calc(100%)",
                  objectFit: "cover",
                  objectPosition: "100% 100%",
                  zIndex: "1",
                  borderRadius: "20px",
                }}
              />
            </div>
          </div>
          {/* <!---End Image 3 ---> */}
        </div>
      </div>
      <div sx={{ width: "50%" }}>
        <div sx={{ paddingLeft: "20px" }}>
          <h2 sx={{ fontWeight: 400, color: colors.dark }}>Spbu Thr</h2>
          <p
            sx={{
              color: colors.darkLight,
            }}
          >
            Spbu paling rame dikunjungi oleh pelanggan saat jam berangkat kerja,
            spbu ini belokasi di jalan lorem ipsum.
          </p>
          <p
            sx={{
              color: colors.darkLight,
            }}
          >
            Fasilitas SPBU meliputi
          </p>
          <ul>
            <li
              sx={{
                color: colors.darkLight,
                marginY: "10px",
              }}
            >
              Minimarket
            </li>
            <li
              sx={{
                color: colors.darkLight,
                marginY: "10px",
              }}
            >
              Mushola
            </li>
            <li
              sx={{
                color: colors.darkLight,
                marginY: "10px",
              }}
            >
              Toilet Umum
            </li>
          </ul>
          <p
            sx={{
              color: colors.darkLight,
              marginTop: "40px",
              fontStyle: "italic",
              fontSize: "12px",
              lineHeight: "20px",
            }}
          >
            Spbu ini memiliki sistem aplikasi terintegrasi dengan laporan
            statistik data penjualan didukung dengan menggunakan sistem self
            services.
          </p>
          <ButtonSecondary
            onClick={onPressLogin}
            label={"Login Aplikasi"}
            oval={true}
          />
        </div>
      </div>
    </div>
  )
}

function ButtonCircle({
  label,
  onClick,
  topBullet,
  topText,
  leftText,
  styleText,
  styleBullet,
  active,
}) {
  return (
    <div>
      <span
        sx={{
          position: "absolute",
          top: topText,
          left: leftText,
          fontWeight: 500,
          color: colors.greyBlue,
          fontSize: "14px",
          ...styleText,
        }}
        onClick={onClick}
      >
        {label}
      </span>
      <button
        sx={{
          padding: "5px",
          border: `7px solid ${colors.white}`,
          borderRadius: "50px",
          background: active ? colors.primaryLight : colors.greyDark,
          position: "absolute",
          top: topBullet,
          boxShadow:
            "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          outline: "none",
          "::-moz-focus-inner": {
            border: 0,
          },
          zIndex: 20,
          ...styleBullet,
        }}
        onClick={onClick}
      />
    </div>
  )
}

function SpbuKami() {
  const [spbu, setSpbu] = React.useState("doro")
  const handlePressSpbuDoro = React.useCallback(() => {
    // window.alert("spbu doro")
    setSpbu("doro")
  }, [])
  const handlePressSpbuThr = React.useCallback(() => {
    // window.alert("spbu thr")
    setSpbu("thr")
  }, [])
  const handlePressLoginSpbuDoro = React.useCallback(() => {
    window.alert("login_aplikasi_doro")
  }, [])
  const handlePressLoginSpbuThr = React.useCallback(() => {
    window.alert("login_aplikasi_thr")
  }, [])
  return (
    <div
      sx={{
        width: "1080px",
        paddingY: 40,
        margin: "0 auto",
      }}
    >
      <h1
        sx={{
          color: colors.primary,
          fontWeight: 400,
          letterSpacing: "0.02em",
          textAlign: "center",
        }}
      >
        Spbu Kami Saat Ini
      </h1>
      <div
        sx={{
          width: "40%",
          height: "100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          sx={{
            height: "1px",
            borderRadius: "10px",
            width: "100%",
            background: colors.greyBlue,
            position: "relative",
          }}
        >
          <ButtonCircle
            label={"Spbu Doro"}
            onClick={handlePressSpbuDoro}
            topBullet={-12}
            topText={-40}
            leftText={-23}
            active={spbu === "doro" ? true : false}
          />
          <ButtonCircle
            label={"Spbu Thr"}
            onClick={handlePressSpbuThr}
            topBullet={-12}
            topText={-40}
            leftText={-23}
            right={1}
            styleBullet={{ right: -1, left: "auto" }}
            styleText={{ right: -23, left: "auto" }}
            active={spbu === "thr" ? true : false}
          />
        </div>
      </div>
      {/* <!-- content --> */}
      {spbu === "doro" ? (
        <ContentSpbuDoro onPressLogin={handlePressLoginSpbuDoro} />
      ) : (
        <ContentSpbuThr onPressLogin={handlePressLoginSpbuThr} />
      )}
    </div>
  )
}

export default SpbuKami
