import React, { useLayoutEffect, useRef } from "react";
import Lenis from "lenis";
import { isMobile } from "react-device-detect";

import "@styles/skya_scrollbar.scss";

//TODO: mobile detection => hide this
//TODO: scroll and show progress.

export default function Scrollbar() {
    const scrollRef = useRef();
    //const isMobileHide =  useRef();

    return (
        <span className="scrollbar" ref={scrollRef} /*style={isMobileHide}*/ ></span>
    )
}