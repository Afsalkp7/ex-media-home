import React, { useState } from 'react'
import Slides from './Slides'
import Thumbnail from './Thumbnail'
import PreNextBtn from './PreNextBtn'
import { sliderCollection } from '../constants/sliderData'

export default function MainCarousel() {
    const [sliderData, setSliderData] = useState(sliderCollection);
  return (
    <>
        <Slides sliderData={sliderData}/>
        <Thumbnail sliderData={sliderData}/>
        <PreNextBtn setSliderData={setSliderData} sliderData={sliderData}/>
    </>
  )
}