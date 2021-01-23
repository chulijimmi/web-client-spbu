/** @jsx jsx */
import { jsx } from "theme-ui"
import FirstBackground from "../../images/bg01.jpg"
import { phone, ipad } from "../../theme/media-query"
import { LazyLoadImage } from "react-lazy-load-image-component"
import MenuHome from "./MenuHome"
import colors from "../../theme/colors"

function Banner(props) {
  return (
    <div
      sx={{
        width: "100%",
        height: "100vh",
      }}
    >
      <div
        sx={{
          width: "100%",
          height: "calc(100vh)",
          position: "relative",
        }}
      >
        <div
          sx={{
            width: "100%",
            height: "calc(100vh)",
            position: "absolute",
            textAlign: "center",
            zIndex: "2",
            background: "rgb(2, 0, 36)",
            background:
              "linear-gradient(0deg,rgba(21, 21, 31, 0.80) 0%, rgba(21, 21, 31, 0.50) 70%,rgba(21, 21, 31, 0.80) 100%)",
            [phone]: { paddingTop: "20px" },
          }}
        >
          <MenuHome />
          <div sx={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
            <h1
              sx={{
                color: colors.white,
                fontWeight: 400,
                letterSpacing: "0.02em",
                marginTop: 120,
                color: colors.white,
              }}
            >
              PT. YOUR COMPANY SPBU SIAP MELAYANI ANDA
            </h1>
            <p
              sx={{
                color: colors.grey,
                letterSpacing: "0.02em",
                fontWeight: 300,
                lineHeight: 2,
              }}
            >
              Kami Adalah Mitra SPBU Dengan Pelayanan Terbaik Di Wilayah Kami,
              hubungi kami untuk pengaduan ataupun mengembangkan usaha anda di
              tempat kami
            </p>
          </div>
        </div>
        <LazyLoadImage
          alt={"Spbu"}
          effect="blur"
          src={FirstBackground}
          width={"100%"}
          height={"100%"}
          sx={{
            width: "100%",
            height: "calc(100%)",
            objectFit: "cover",
            objectPosition: "100% 100%",
            zIndex: "1",
          }}
        />
      </div>
    </div>
  )
}

export default Banner
