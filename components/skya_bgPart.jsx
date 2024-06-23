import React from "react";
import { createRoot } from "react-dom/client";

const bgpDom = document.querySelector('#bgPart');
const bgpInsert = createRoot(bgpDom);

bgpInsert.render(
    <>
        <div className="bgPartText bgPartText1">
            suno-koncated-yet-another project.
        </div>
        <div className="bgPartText bgpartText2">
            suno-koncated-yet-another project.
        </div>
        <div className="bgPartText bgpartText3">
            suno-koncated-yet-another project.
        </div>
        <div className="bgPartText bgpartText4">
            suno-koncated-yet-another project.
        </div>
        <div className="bgPartText bgpartText5">
            suno-koncated-yet-another project.
        </div>
        <div className="bgPartText bgpartText6">
            suno-koncated-yet-another project.
        </div>
    </>
)