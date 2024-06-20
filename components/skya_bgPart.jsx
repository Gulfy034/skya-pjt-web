import gsap from "gsap";
import React from "react";
import { createRoot } from "react-dom/client";

const bgpDom = document.querySelector('#bgPart');
const bgpInsert = createRoot(bgpDom);
bgpInsert.render(
    <>
        <div className={"bgPartBox"}>
            <p className={"bgPartText"}>
                suno-koncated-yet-another project.
            </p>
        </div>
    </>
)