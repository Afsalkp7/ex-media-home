import React from "react";
import { section4Image } from "../constants/sliderData";

export default function WhatWeDoLast() {
  return (
    <>
      <div className="whatwedofirstSection">
        <div className="whatwedofirstDiv">
          <span>
            <span className="whatwedofirstTitle">BRANDING</span>
            <br />
            <span className="whatwedofirstTitleSub">
              YOUR BRAND, YOUR STORY: <br /> WE SHAPE IDENTITIES <br /> WITH
              IMPACT
            </span>
            <br />
            <span>
              Welcome to Exmedia Branding, where identities come to life. Our
              expertise lies in shaping brands that resonate deeply and endure.
              With a keen understanding of market dynamics, we craft strategic
              brand identities that leave lasting imprints. From logos to
              comprehensive brand strategies, our team blends creativity with
              market insights to create identities that stand out. We believe in
              the power of authentic storytelling and meaningful connections. At
              Exmedia, we architect legacies. Step into a world of brand
              transformation, where every element speaks volumes, and consider
              all updated strategies to build and ensure the trust of your brand
              in the respective community or customer. Choose Exmedia Branding
              to make your mark and forge enduring relationships with your
              Valuable customer & audience.
            </span>
          </span>
        </div>
        <div className="whatwedosecondDiv">
          <img src={section4Image} alt="" />
        </div>
      </div>
    </>
  );
}
