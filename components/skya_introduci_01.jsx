import gsap from "gsap";
import React from "react";
import { createRoot } from "react-dom/client";
import { playVsfx } from '/components/skya_playsfx.jsx'


const intrThree = document.querySelector('.aa');
const intrInsert = createRoot(intrThree);

intrInsert.render(<scrollbox />)
intrInsert.render(
    <>
        <div id="subTitleOne">
            <h3 id="contTitleOne">~ SKYA Project Website is &nbsp;<span id="spanOne" onClick={playVsfx}>'opening'</span> for every!</h3>
        </div>

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