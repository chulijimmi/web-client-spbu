import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>This is about pages</h1>
    <p>Lorem ipsum dolor sir amet</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default About
