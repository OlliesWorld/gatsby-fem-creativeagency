import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import { StaticImage } from "gatsby-plugin-image"

export default function Slider() {
    return (
        <AliceCarousel autoPlay autoHeight infinite autoPlayInterval="8000">
        
        <div className="flex w-full ">
            <div className="flex bg-black text-white w-5/6 h-2/3 z-20 pl-40">
              <h2 className=" w-72 text-6xl font-extrabold ml-10 py-20">
                  Brand naming & guidelines
                </h2>
                  <div className="lg:absolute left-32  pl-72 ml-36">
                            <StaticImage src="../images/assets/desktop/bg-pattern-wavy-white.svg" alt="A dinosaur" className="w-18 mt-24 ml-20" height={60}/>
                    </div>
            </div>
            <div className="w-full h-full z-10">
                <StaticImage src="../images/assets/desktop/image-slide-1.jpg" alt="slide 1"  height={700} className="sm:hidden z-0" placeholder="blurred" layout="fixed" />
            <div className="lg:absolute right-2">
                <p className="font-extrabold text-white">Lean Product Roadmap</p>
                <p className="text-red">2019 Project</p>
            </div>
            </div>
            </div>
{/* slide2 */}
            <div className="flex w-full ">
            <div className="flex bg-black text-white w-5/6 h-2/3 z-20 pl-40">
              <h2 className=" w-72 text-6xl font-extrabold ml-10 py-20">
                Brand identity & merchandise
                </h2>
                  <div className="lg:absolute left-32  pl-72 ml-36">
                            <StaticImage src="../images/assets/desktop/bg-pattern-wavy-white.svg" alt="A dinosaur" className="w-18 mt-24 ml-20" height={60}/>
                    </div>
            </div>
            <div className="w-full h-full z-10">
                <StaticImage src="../images/assets/desktop/image-slide-2.jpg" alt="slide 1"  height={700} className="sm:hidden  z-0" placeholder="blurred" layout="fixed" />
            <div className="lg:absolute right-2">
                <p className="font-extrabold text-white">New Majestic Hotel</p>
                <p className="text-red">2018 Project</p>
            </div>
            </div>
            
        </div>
{/* slide 3 */}

        <div className="flex w-full ">
            <div className="flex bg-black text-white w-5/6 h-2/3 z-20 pl-40">
              <h2 className=" w-72 text-6xl font-extrabold ml-10 py-20">
                Brand identity & web design
                </h2>
               
                  <div className="lg:absolute left-32  pl-72 ml-36">
                            <StaticImage src="../images/assets/desktop/bg-pattern-wavy-white.svg" alt="A dinosaur" className="w-18 mt-24 ml-20" height={60}/>
                    </div>
            </div>
            <div className="w-full h-full z-10">
                <StaticImage src="../images/assets/desktop/image-slide-3.jpg" alt="slide 1"  height={700} className="sm:hidden  z-0" placeholder="blurred" layout="fixed" />
            <div className="lg:absolute right-2">
                <p className="font-extrabold text-white">Crypto Dashboard</p>
                <p className="text-red">2016 Project</p>
            </div>
            </div>
            
        </div>
        </AliceCarousel>
    )
}