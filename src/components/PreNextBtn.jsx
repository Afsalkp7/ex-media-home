import React from 'react'
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";
export default function PreNextBtn({setSliderData,sliderData}) {
    const handlePrevious = () => {
        const newData = [...sliderData];
        newData.push(newData.shift());
        setSliderData(newData)
      };
    
      const handleNext = () => {
          const newData = [...sliderData];
          newData.unshift(newData.pop()); 
          setSliderData(newData);
      };
  return (
    <div className="nextPrevArrows">
        <button className="prev" onClick={()=>handleNext()}> <SlArrowLeft /> </button>
        <button className="next" onClick={()=>handlePrevious()}> <SlArrowRight /> </button>
    </div>
  )
}
