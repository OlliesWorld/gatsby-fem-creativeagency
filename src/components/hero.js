import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Hero() {
    return (
        <div className="flex">
            <div className="w-3/4 ml-24 mt-8 ">
                <h2 className="font-extrabold text-7xl mb-10">Branding & website design agency</h2>
                <p className="text-lg mb-8">We specialize in visual storytelling by creating cohesive brand and website design solutions for small businesses, giving lasting impressions to audiences in a digital world.</p>
                <Link to="/" className="bg-red text-white p-4">Learn More</Link>
            </div>
            <div>
                <StaticImage src="../images/assets/desktop/image-hero.jpg" alt="hero img" width={895}
                    height={800} className=" " placeholder="blurred" layout="fixed"/>
            </div>
        </div>
    )
}