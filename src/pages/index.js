import * as React from "react"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/hero"
import Strategy from "../components/strategy"
import Slider from "../components/slider"
import { SliderData } from "../components/SliderData"


const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero />
    <Strategy />
    <Slider sliders={SliderData}/>
  </Layout>
)

export default IndexPage
