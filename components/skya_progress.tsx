import Lenis from "lenis";
import gsap from "gsap";
import '@styles/skya_progress.scss';
import { useLayoutEffect, useRef, useState } from "react";

//TODO: progress value and animation.

export default function Progress() {
    let processStat = useState();
    const processRef = useRef();

    useLayoutEffect(() => {
        gsap.from(processRef, {
            y: -100,
            skewY: -15,
            duration: 2,//seconds
        });
    })
    return (
        <progress id="progress" max="100" value="" ref={processRef}>
            processbar
        </progress>
    )
}

/*
Lenis.on("scroll", () => {
    console.log("lenis scroll progress", Lenis.progress);
})
*/
