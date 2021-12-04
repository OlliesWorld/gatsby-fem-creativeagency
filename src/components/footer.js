import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => (
  <footer className="mt-4">
  <div className="container flex justify-between">
    <Link to="/">
      <StaticImage src="../images/assets/desktop/bg-pattern-wave-red.svg" alt="A dinosaur" className="-ml-12"/>
    </Link>
          <div className="flex justify-evenly items-center ">
          <h2  className="text-red">Let's build something great together!</h2>
          </div>
    <div className="flex  items-center">
    
            <Link to="/" className="bg-red text-white p-4">Schedule a Call</Link>
    </div>
    </div>
<div className="text-center">© {new Date().getFullYear()}, Built by Roni with Gatsby's help!</div>
  </footer>
)

export default Footer