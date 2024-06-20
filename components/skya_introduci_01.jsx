import gsap from "gsap";
import React from "react";
import { createRoot } from "react-dom/client";


const intrThree = document.querySelector('.aa');
const intrInsert = createRoot(intrThree);

intrInsert.render(<scrollbox />)
intrInsert.render(
    <>
        <div>
            <img src="/imgs/maybe-artwork.png" width={"300px"} />
            <h4>this is a asbjdjabsdoiaosfj</h4>
            <p>zsdfvhioa;rhsaudfhiusadfjiasjdfoijdfghdifhgkjdkf</p>
            <p>zsdfvhioa;rhsaudfhiusadfjiasjdfoijdfghdifhgkjdkf</p>
            <p>zsdfvhioa;rhsaudfhiusadfjiasjdfoijdfghdifhgkjdkf</p>
            <p>zsdfvhioa;rhsaudfhiusadfjiasjdfoijdfghdifhgkjdkf</p>
        </div>
    </>
)

export function playvsfx() {
    const audio = new Audio('/sfx/svsfx_opening.wav');
    audio.play();
    console.log("vsfx_opening played");
}