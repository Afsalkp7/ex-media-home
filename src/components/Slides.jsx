import React, { useEffect, useState } from "react";
import SliderImage from "./SliderImage";

export default function Slides({ sliderData }) {
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
       
        const timer = setTimeout(() => {
            setShowContent(true);
        },  2000); 

        return () => clearTimeout(timer);
    }, []);
    const modifiedData = [...sliderData];
    const firstItem = modifiedData.pop();
    modifiedData.unshift(firstItem)

  return (
    <div className="slider">
      <div className="list">
        {modifiedData.map((item, index) => (
          <div className="item" key={index}>
            <SliderImage url={item.imgUrl} alt={item.alt} />
            <div className={`slider list item ${showContent ? 'show-content' : ''}`}>
            <div className="content">
              <div className="title">{item.title}</div>
              <div className="type">{item.content}</div>
              <div className="description">{item.sub}</div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
