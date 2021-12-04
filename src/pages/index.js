import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Strategy from "../components/strategy"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Strategy />
  </Layout>
)

export default IndexPage
