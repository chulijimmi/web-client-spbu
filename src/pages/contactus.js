/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import GoogleMaps from "../components/contactus/GoogleMaps"
import InformasiKontak from "../components/contactus/InformasiKontak"
import MitraUsaha from "../components/contactus/MitraUsaha"
import SendMessageForm from "../components/contactus/SendMessageForm"
import Layout from "../components/layout"
import SEO from "../components/seo"
import colors from "../theme/colors"
import { phone } from "../theme/media-query"

const ContactUs = props => {
  console.log("props contactus", props)
  return (
    <Layout uri={props.uri}>
      <SEO title="Page two" />
      <div
        sx={{
          width: "100%",
          height: "calc(568px + 400px)",
          position: "relative",
          [phone]: {
            height: "calc(568px + 860px)",
          },
        }}
      >
        <div
          sx={{
            width: "100%",
            height: "568px",
            position: "relative",
            display: "block",
          }}
        >
          <GoogleMaps />
        </div>
        <div
          sx={{
            width: "1080px",
            height: "400px",
            position: "absolute",
            top: "calc(568px - 140px)",
            left: "auto",
            right: "calc((100% - 1080px) * 0.6)",
            background: colors.white,
            boxShadow:
              "0 6px 20px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.10)",
            [phone]: {
              width: "100%",
              position: "relative",
              top: 0,
              right: 0,
              height: "860px",
            },
          }}
        >
          <div
            sx={{
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              [phone]: {
                display: "contents",
                justifyContent: "normal",
              },
            }}
          >
            <div
              sx={{
                width: "70%",
                height: "100%",
                background: colors.greyLight,
                [phone]: {
                  width: "100%",
                  height: "auto",
                  paddingBottom: "20px",
                },
              }}
            >
              <SendMessageForm />
            </div>
            <div
              sx={{
                width: "30%",
                height: "100%",
                background: colors.primary,
                [phone]: { width: "100%", height: "auto", paddingY: "20px" },
              }}
            >
              <InformasiKontak />
            </div>
          </div>
          <div
            sx={{
              width: "100%",
              [phone]: { height: "auto" },
            }}
          >
            <MitraUsaha />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs
