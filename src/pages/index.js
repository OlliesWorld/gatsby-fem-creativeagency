import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Strategy from "../components/strategy"
import Slider from "../components/slider"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Strategy />
    <Slider />
  </Layout>
)

export default IndexPage
