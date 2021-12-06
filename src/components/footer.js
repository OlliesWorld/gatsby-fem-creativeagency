import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Footer = () => (
  <footer className="mt-12">
  <div className="container ml-8  md:flex  justify-between">
    <Link to="/">
      <StaticImage src="../images/assets/desktop/bg-pattern-wave-red.svg" alt="A dinosaur" className="hidden md:block lg:-ml-12"/>
    </Link>
          <div className="flex justify-evenly items-center ">
          <h2  className="w-5/6">Let's build something great together!</h2>
          </div>
    <div className="mx-8 my-8">
    
            <Link to="/" className="bg-red text-white font-extrabold p-4">Schedule a Call</Link>
    </div>
    </div>
<div className="text-center">© {new Date().getFullYear()}, Built by <a href="https://roni.rocks/" target="_blank"rel="noreferrer" className="text-blue-800">Roni </a>with Gatsby's help!</div>
  </footer>
)

export default Footer