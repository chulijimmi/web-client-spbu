/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Logo from "../../images/logo.png"
import { GoLocation } from "react-icons/go"
import colors from "../../theme/colors"

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
            color: active ? colors.primaryDark : colors.grey,
          }}
        >
          {subtitle}
        </p>
      </li>
    </Link>
  )
}
function MenuHome() {
  return (
    <div
      sx={{
        width: "1080px",
        paddingY: 40,
        margin: "0 auto",
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
            sx={{ alignContent: "flex-start" }}
          />
        </div>
        <div
          sx={{
            width: 300,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div sx={{ width: "50%" }}>
            <Link to="/" sx={{ textDecoration: "none" }}>
              <span>
                <GoLocation size={28} sx={{ color: colors.white }} />
                <p sx={{ margin: " 5px", fontSize: 14, color: colors.white }}>
                  SPBU DORO
                </p>
              </span>
            </Link>
          </div>
          <div sx={{ width: "50%" }}>
            <Link to="/" sx={{ textDecoration: "none" }}>
              <span>
                <GoLocation size={28} sx={{ color: colors.white }} />
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
        }}
      >
        <Navigation
          label="HOME"
          to={"/"}
          subtitle={"Website Kami"}
          active={true}
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
          to={"/"}
          subtitle={"Hubungi Kami"}
          active={false}
        />
      </ul>
    </div>
  )
}

export default MenuHome
