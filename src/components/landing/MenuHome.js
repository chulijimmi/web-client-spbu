/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"
import { AiOutlineLogin } from "react-icons/ai"
import colors from "../../theme/colors"
import { phone, ipad } from "../../theme/media-query"
import { CgMenu } from "react-icons/cg"

function Navigation({ label, to, subtitle, active }) {
  return (
    <Link
      sx={{
        textDecoration: "inherit",
        fontSize: "14px",
        color: colors.white,
        width: "calc(100vw * 0.6)",
        ":hover": {
          color: `${colors.primaryLight} !important`,
          cursor: "pointer",
        },
      }}
      to={to}
    >
      <li
        sx={{
          listStyleType: "none",
          margin: 0,
          padding: 0,
          borderTop: `2px solid ${active ? colors.primary : colors.grey}`,
          width: "100%",
          textAlign: "left",
          paddingTop: "10px",
          ":hover": {
            borderTop: `2px solid ${active ? colors.grey : colors.primary}`,
          },
          [phone]: {
            paddingBottom: "15px",
          },
        }}
      >
        <p
          sx={{
            margin: 0,
            fontSize: 14,
            marginTop: "5px",
            color: colors.white,
          }}
        >
          {label}
        </p>

        <p
          sx={{
            margin: 0,
            fontSize: 12,
            marginTop: "5px",
            color: active ? colors.primaryLight : colors.grey,
          }}
        >
          {subtitle}
        </p>
      </li>
    </Link>
  )
}
function MenuHome(props) {
  console.log("props MenuHome", props)
  const { uri } = props
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const handlePressMenu = React.useCallback(() => {
    setIsMenuOpen(!isMenuOpen)
  }, [isMenuOpen])
  return (
    <div
      sx={{
        width: "1080px",
        paddingY: 40,
        margin: "0 auto",
        [phone]: {
          width: "100%",
        },
      }}
    >
      {/* <!-- Top Logo Area ---> */}
      <div
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          sx={{
            width: 200,
            alignItems: "flex-start",
            textAlign: "left",
          }}
        >
          <img
            src={Logo}
            alt="Logo"
            height={75}
            sx={{ alignContent: "flex-start", [phone]: { marginLeft: "10px" } }}
          />
        </div>
        <div
          sx={{
            display: "none",
            [phone]: {
              display: "flex",
              width: "70px",
              alignItems: "center",
            },
          }}
        >
          <CgMenu
            size={18}
            sx={{ color: colors.white }}
            onClick={handlePressMenu}
          />
        </div>
        <div
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
            [phone]: {
              display: "none",
            },
          }}
        >
          <div sx={{ width: "50%" }}>
            <Link
              to="https://demo.digitalspbu.com"
              sx={{
                textDecoration: "none",
                color: colors.white,
                ":hover": { color: colors.primaryLight },
              }}
            >
              <span>
                <AiOutlineLogin size={18} />
                <p sx={{ margin: " 5px", fontSize: 14, color: colors.white }}>
                  SPBU CODO
                </p>
              </span>
            </Link>
          </div>
          <div sx={{ width: "50%" }}>
            <Link
              to="https://demo.digitalspbu.com"
              sx={{
                textDecoration: "none",
                color: colors.white,
                ":hover": { color: colors.primaryLight },
              }}
            >
              <span>
                <AiOutlineLogin size={18} />
                <p sx={{ margin: "5px", fontSize: 14, color: colors.white }}>
                  SPBU THR
                </p>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* <!-- Main Menu Home --> */}

      <ul
        sx={{
          display: "flex",
          justifyContent: "space-between",
          margin: 0,
          padding: 0,
          marginTop: "10px",
          [phone]: {
            display: `${isMenuOpen ? "block" : "none"}`,
            paddingLeft: "20px",
            paddingRight: "20px",
            background: colors.dark,
            width: "calc(100vw - 40px)",
            paddingBottom: "60px",
            paddingTop: "20px",
          },
        }}
      >
        <Navigation
          label="HOME"
          to={"/"}
          subtitle={"Website Kami"}
          active={!uri ? true : false}
        />
        <Navigation
          label="CORPORATE"
          to={"/"}
          subtitle={"Perusahaan Kami"}
          active={false}
        />
        <Navigation
          label="WE OFFER"
          to={"/"}
          subtitle={"Services Kami"}
          active={false}
        />
        <Navigation
          label="INVESTOR"
          to={"/"}
          subtitle={"Mitra Usaha Kami"}
          active={false}
        />
        <Navigation
          label="NEWS"
          to={"/"}
          subtitle={"Berita Terbaru"}
          active={false}
        />
        <Navigation
          label="CONTACT US"
          to={"/contactus"}
          subtitle={"Hubungi Kami"}
          active={uri === "/contactus" ? true : false}
        />
      </ul>
    </div>
  )
}

export default MenuHome
