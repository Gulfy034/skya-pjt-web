import Lenis from "lenis";
import "@styles/skya_progress.scss";
import { useEffect, useRef, useState } from "react";

//TODO: progress value and animation.

export default function Progress() {
    const processStat = useState();
    const processRef = useRef();


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
