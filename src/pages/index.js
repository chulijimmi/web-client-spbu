import React from "react"
import SEO from "../components/seo"
import Footer from "../components/footer"
import Banner from "../components/landing/Banner"
import SpbuKami from "../components/landing/SpbuKami"
import Testimonials from "../components/landing/Testimonials"
import Statistic from "../components/landing/Statistic"

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Banner />
    <SpbuKami />
    <Statistic />
    <Testimonials />
    <Footer />
  </>
)

export default IndexPage
