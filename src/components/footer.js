/** @jsx jsx */
import { jsx } from "theme-ui"
import { phone, ipad } from "../theme/media-query"
import colors from "../theme/colors"
import SubscribeForm from "./form/SubscribeForm"
import { Link } from "gatsby"
import { ImFacebook } from "react-icons/im"
import { FaInstagram } from "react-icons/fa"

const Title = ({ label }) => (
  <p sx={{ fontSize: 16, color: colors.white }}>{label}</p>
)

const HyperLink = ({ to, label }) => (
  <p>
    <Link
      sx={{
        textDecoration: "inherit",
        marginRight: "20px",
        fontSize: "14px",
        color: colors.greyBlue,
        ":hover": {
          color: `${colors.primaryLight} !important`,
          cursor: "pointer",
        },
      }}
      to={to}
    >
      {label}
    </Link>
  </p>
)

function SocialMedia() {
  return (
    <div sx={{ paddingRight: "20px" }}>
      <Title label={"SOCIAL MEDIA"} />
      <div sx={{ display: "flex", justifyContent: "flex-start" }}>
        <ImFacebook
          size={18}
          sx={{
            padding: "8px",
            border: `1px solid ${colors.darkLight}`,
            color: colors.darkLight,
            borderRadius: "6px",
            ":hover": {
              color: colors.primaryLight,
              border: `1px solid ${colors.primaryLight}`,
              cursor: "pointer",
            },
          }}
        />
        <FaInstagram
          size={18}
          sx={{
            padding: "8px",
            border: `1px solid ${colors.darkLight}`,
            color: colors.darkLight,
            marginLeft: "20px",
            borderRadius: "6px",
            ":hover": {
              color: colors.primaryLight,
              border: `1px solid ${colors.primaryLight}`,
              cursor: "pointer",
            },
          }}
        />
      </div>
      <p
        sx={{
          fontSize: "12px",
          color: colors.white,
          letterSpacing: "0.02em",
          lineHeight: "16px",
        }}
      >
        Your Company info put the title arround here lorem ipsum dolor sir amet
      </p>
    </div>
  )
}

function Footer() {
  return (
    <footer
      sx={{
        width: "100%",
        display: "table",
        background: colors.dark,
        [phone]: { overflow: "hidden" },
      }}
    >
      <div
        sx={{
          width: "1180px",
          padding: "40px",
          margin: "auto",
          background: colors.dark,
          [phone]: { width: "100%", padding: 0 },
          [ipad]: { width: "100%" },
        }}
      >
        <div
          sx={{
            display: "flex",
            justifyContent: "space-between",
            [phone]: {
              display: "table",
            },
          }}
        >
          <div
            sx={{
              width: "20%",
              height: "46px",
              [ipad]: { width: "100%" },
              [phone]: { width: "100%", marginLeft: 20 },
            }}
          >
            <SocialMedia />
            <div
              sx={{
                display: "flex",
                justifyContent: "flex-end",
                [phone]: {
                  marginLeft: 20,
                  paddingBottom: "15px",
                },
                [ipad]: {
                  marginRight: "60px",
                },
              }}
            ></div>
          </div>
          <div
            sx={{
              width: "20%",
              height: "auto",
              textAlign: "left",
              [ipad]: { width: "100%" },
              [phone]: { width: "100%", marginLeft: 20 },
            }}
          >
            <Title label="WEBSITE KAMI" />
            <HyperLink to={"/about"} label={"Tentang Kami"} />
            <HyperLink to={"/"} label={"News"} />
            <HyperLink to={"/"} label={"Contact Us"} />
            <HyperLink to={"/"} label={"Privacy Policy"} />
          </div>
          <div
            sx={{
              width: "20%",
              height: "auto",
              textAlign: "left",
              [ipad]: { width: "100%" },
              [phone]: { width: "100%", marginLeft: 20 },
            }}
          >
            <Title label="PERUSAHAAN KAMI" />
            <HyperLink to={"/"} label={"Investors"} />
            <HyperLink to={"/"} label={"Laporan Tahunan"} />
            <HyperLink to={"/"} label={"SPBU Terdaftar"} />
            <HyperLink to={"/"} label={"Mitra Kami"} />
          </div>
          <div
            sx={{
              width: "40%",
              height: "auto",
              textAlign: "left",
              [ipad]: { width: "100%" },
              [phone]: { width: "100%", marginLeft: 20 },
            }}
          >
            <Title label="SUBSCRIBE" />
            <SubscribeForm />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
