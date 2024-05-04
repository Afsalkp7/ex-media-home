import React from "react";
import "../../public/assets/whatwedomain.css";
import WhatWeDoSecond from "./WhatWeDoSecond";
import WhatWeDoThird from "./WhatWeDoThird";
import WhatWeDoLast from "./WhatWeDoLast";
export default function WhatWeDo() {
  return (
    <>
        <div className="whatwedomain">
          <span className="whatwedoheading">What We Do</span><br /><span className="whatwedosub">WE OFFER DEGOTAL SOLUTION</span>
          <WhatWeDoSecond />
          <WhatWeDoThird />
          <WhatWeDoLast />
        </div>
        
    </>
  );
}
