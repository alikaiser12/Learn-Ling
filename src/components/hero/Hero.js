import React, { useState, useEffect } from 'react';
import {FaChevronCircleRight, FaChevronCircleLeft} from "react-icons/fa";


const featuredImages=[
    "./assets/logo.jpg",
    "./assets/D10.png",
    "./assets/a5.jpg",
];



let count=0;

const Slider = () => {
    const [currentIndex, setCurrentIndex]= useState(0);

    useEffect(() => {
        startSlider();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
    
      const startSlider = () => {
        setInterval(() => {
          handleOnNextClick();
        }, 5000);
      };

    const handleOnNextClick=()=>{
        count = (count + 1) % featuredImages.length;
    setCurrentIndex(count);
    };

    const handleOnPrevClick=()=>{
        const productsLength = featuredImages.length;
   count = (currentIndex + productsLength - 1) % productsLength;
   setCurrentIndex(count);
    };
  
  return (
    // <div className='w-full select-none relative'>
 <div>
                <div className="aspect-w-16 aspect-h-9">
                    <img src={featuredImages[currentIndex]} alt="" />
                    </div>
                    <div className='absolute w-full top-1/2 transfom-translate-y-1/2 px-3 flex justify-between items-center'>
                        <button onClick={handleOnNextClick}> <FaChevronCircleLeft/> </button>
                        <button onClick={handleOnPrevClick}> <FaChevronCircleRight/> </button>
                        </div>
                        </div>
                
  )
}

export default Slider