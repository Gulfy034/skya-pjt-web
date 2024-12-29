import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Lenis from "lenis";
import { isMobile } from "react-device-detect";

import '@styles/skya_scrollbar.scss';

//TODO: mobile detection => hide this
//TODO: scroll and show progress.

export default function Scrollbar() {
    const scrollRef = useRef();
    //const isMobileHide =  useRef();

    useLayoutEffect(() => {
        gsap.from(scrollRef, {
            y: -100,
            skewY: -15,
            duration: 2,//seconds
        });
    })
    return (
        <span className="scrollbar" ref={scrollRef} /*style={isMobileHide}*/ ></span>
    )
}