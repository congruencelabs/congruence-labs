import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import SupportedTech from "../components/tech";

const IndexPage = () => (
  <Layout>
    <SupportedTech></SupportedTech>
    <SEO title="Home" />
  </Layout>
)

export default IndexPage
