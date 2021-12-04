import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

export default function Strategy() {
    return (
        <div>
        <div className="flex w-full h-full mb-4">
             <div className=" flex">
                <StaticImage src="../images/assets/desktop/image-strategic.jpg" alt="hero img" width={735}
                    height={900} className="h-full "  placeholder="blurred" layout="fixed"/>
                    <div className="lg:absolute left-32 pt-36 pl-72 ml-72">

                        <StaticImage src="../images/assets/desktop/bg-pattern-wave-red.svg" alt="A dinosaur" className="w-18  -ml-10 mt-20 " height={60}/>
                    </div>
            </div>
            <div className="justify-end w-full bg-black text-white ">
                <div className="w-2/3 ml-40 my-52">
                <h2 className="font-extrabold text-6xl mb-11"><span className="text-red">Design</span> is strategic.</h2>
                <p className="text-lg mb-11">“A well-crafted design strategy consistently produces desired outcomes and brand awareness. We are firm believers that success lies in creative collaboration with our clients.”</p>
                <Link to="/" className="text-red font-extrabold border-b-2 pb-4 ">Schedule a call</Link>
                </div>
            </div>
            </div>
            {/* second section */}
           <div className="flex w-ful" >
               <div className="w-1/2 z-40 -mr-36 ml-36  pt-40">
                   <h2 className="text-6xl ">Our approach for creating a winning brand</h2>
               </div>
               <div className="bg-red w-5/6 h-full -mt-32 z-20  pb-36">
               <div className="w-2/4 text-white mt-40 ml-72">
                <span className="text-7xl font-extrabold mix-blend-normal opacity-25">01</span>
                   <p className="-mt-8 ml-14 font-extrabold">Brand Strategy</p>
                   <p className="ml-14">Brand strategy is critical for long-term success. Outshining competitors and capturing the target audience are key.</p>
                   <span className="text-7xl font-extrabold mix-blend-normal opacity-25">02</span>
                   <p className="-mt-8 ml-14 font-extrabold">Brand Design</p>
                   <p className="ml-14">Keeping the brand design unique and meaningful helps in communicating the brand’s timeless value effectively.</p>
                   <span className="text-7xl font-extrabold mix-blend-normal opacity-25">03</span>
                   <p className="-mt-8 ml-14 font-extrabold">Web Design</p>
                   <p className="ml-14">A beautifully crafted website is the best tool for brand awareness, and ultimately results in increased revenues.</p>
               </div>
               </div>
           </div>
        </div>
    )
}