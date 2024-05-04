import React from 'react'
import SliderImage from './SliderImage'
import { section2Image } from '../constants/sliderData'

export default function WhatWeDoSecond() {
  return (
    <>
    <div className='whatwedofirstSection'>
        <div className='whatwedofirstDiv'>
          <span>
            <span className='whatwedofirstTitle'>STUDIO</span><br />
            <span  className='whatwedofirstTitleSub'>ELEVATE YOUR IMPACTS & <br /> CONNECT BRANDS WITH <br /> CUSTOMERS.</span> <br />
            <span>
            Where Creativity Finds Its Canvas. Our Studio Is A Haven For Innovative Ideas, Bringing Visions To Life With Precision And Passion. With State-Of-The-Art Equipment And A Team Of Skilled Professionals, We Craft Captivating Visuals That Tell Compelling Stories. Whether It's Photography, Videography, Or Audio Production, Our Studio Is Equipped To Deliver Excellence In Every Frame And Note. From Concept To Execution, We Transform Concepts Into Breathtaking Realities That Leave Lasting Impressions. At Exmedia, Creativity Knows No Bounds, And Our Studio Can Convert Imagination Takes It To Another Unexpected Level. Step Into A World Of Boundless Possibilities And Let Your Brand's Story Unfold In Stunning Visual Brilliance.
            </span>
          </span>
        </div>
        <div className='whatwedosecondDiv'>
            <img src={section2Image} alt="" />
        </div>
      </div>
    </>
  )
}
