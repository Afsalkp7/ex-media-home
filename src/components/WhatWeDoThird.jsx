import React from "react";
import SliderImage from "./SliderImage";
import { section3Image } from "../constants/sliderData";

export default function WhatWeDoThird() {
  return (
    <>
      <div className="whatwedofirstSection">
        <div className="whatwedosecondDiv">
          <img src={section3Image} alt="" />
        </div>
        <div className="whatwedofirstDiv">
          <span>
            <span className="whatwedofirstTitle">GRAPHICS</span>
            <br />
            <span className="whatwedofirstTitleSub">
              DESIGNS THAT <br /> INSPIRE, CONNECT, <br />
              AND LEAVE A LASTING
              <br />
              IMPRESSION
            </span>
            <br />
            <span>
              Introducing Exmedia Graphic Design, where imagination meets design
              prowess. Our Graphic studio is a playground for innovative ideas,
              transforming concepts into visually stunning realities. With a
              skilled team of designers, we craft graphics that captivate and
              communicate. From logos to intricate designs, our expertise spans
              a spectrum of visual elements. We merge artistry with strategy,
              ensuring each design aligns seamlessly with your brand's essence.
              At Exmedia, we understand the power of visuals to leave indelible
              impressions. Step into a world of creativity, where every pixel
              tells a story. Elevate your brand with Exmedia Graphic Design and
              make your visual identity a masterpiece.
            </span>
          </span>
        </div>
      </div>
    </>
  );
}
