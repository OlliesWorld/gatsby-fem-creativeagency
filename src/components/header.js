import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


const Header = ({ siteTitle }) => (
  <header className="ml-24 ">
    
    <div className="flex justify-between items-center ">
    <Link to="/">
      <StaticImage src="../images/assets/desktop/logo.svg" alt="A dinosaur" />
    </Link>
          <div className="flex justify-evenly items-center w-2/4 h-24 pr-40 bg-red text-white">
           
              <Link to="/">About</Link>
              <Link to="/">Service</Link>
              <Link to="/">Projects</Link>
            
            <Link to="/" className="bg-black p-4 text-white">Schedule a Call</Link>
          </div>

    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
