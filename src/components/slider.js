import React from 'react'
import { SliderData } from './SliderData';
import {  StaticImage } from "gatsby-plugin-image"


const ImageSlider = ({ sliders }) => {
     // Create a curr state indicating what's the current slide's index
  const [curr, setCurr] = React.useState(0);
  const { length } = sliders;

  const goToNext = () => {
    // Check if we've reached the final slide in the array
    // If so, go back to 0, else curr + 1
    setCurr(curr === length - 1 ? 0 : curr + 1);
  }
  const goBack = () => {
      setCurr(curr === 0 ? length - 1 : curr - 1)
  }

  // useEffect will run at every re-render
  React.useEffect(() => {
    // At every render, set a new timeout to go to the next slide
    setTimeout(goToNext, 40000);
    // And, when unmounting <Slider />, clear the timeout
    // See the reactjs.org docs on hooks for more info
    return function () {
      clearTimeout(goToNext);
    }
  })

  if (!Array.isArray(sliders) || length <= 0) {
    return null;
  }
    return (
     
        <div className="h-full w-full ">
            {SliderData.map((slide, i) => {
                return (
                <div className={i === curr ? 'slide active' : 'slide'} key={i} >
              {i === curr && (
                    <div className="flex w-full h-full">
                    <div className="bg-black text-white w-5/6  ">
                        <h2 className=" w-2/3 text-4xl font-extrabold text-left mx-auto pt-36 lg:text-6xl">
                            {slide.content}
                        </h2>   
                        <div className="flex ml-36">
                            <StaticImage src="../images/assets/desktop/icon-arrow-previous.svg" alt="previous"  placeholder="blurred" layout="fixed" onClick={goToNext} width={40} className="mr-4 cursor-pointer"/>
                            <StaticImage src="../images/assets/desktop/icon-arrow-next.svg" alt="next"  placeholder="blurred" layout="fixed"  width={40} onClick={goBack} className="cursor-pointer"/>
                        </div>
                    </div>
                      
                    <div className=" z-10">
                    
                        <img className="w-full h-full" src={slide.imageDesk} alt='slide' />
          
                        
                       {/* linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 0%, #000000 100%); */}
                            <div className="bg-gradient-to-b from-gray-200 via-gray-400 to-gray-600 w-1/2 ml-60 pl-36 -mt-24">
                                <p className="text-md font-extrabold text-white m-0">{slide.caption}</p>
                                <p className="text-red">{slide.date}</p>
                            </div>
                    </div>
                    </div>
               )}
                </div>
            )
              })}
            </div>

        
        
    )
}

export default ImageSlider