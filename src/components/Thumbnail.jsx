import React from 'react'
import SliderImage from './SliderImage'
export default function Thumbnail({sliderData}) {
  return (
    <div className='thumbnail'>
        {sliderData.map((item , index)=>(
            <div className="item" key={index}>
                <SliderImage url={item.imgUrl} alt={item.alt} />
            </div>
        ))}
    </div>
  )
}
