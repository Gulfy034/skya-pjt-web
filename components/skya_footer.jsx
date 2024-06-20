import gsap from "gsap";
import React from "react";
import { createRoot } from "react-dom/client";

const footerDom = document.querySelector("#footer");
const footerInsert = createRoot(footerDom);
footerInsert.render(
    <>
        <div
            class="mainfoot">
                <p>"SKYA_PROJECT" and "SKYA_PROJECT_DEMO" are in development, the DEMO version client is open-source but
                    uses the GPL-3 license.
                </p>
                <hr/>
                <p>This Page is hosted on <a href="http://vercel.com">Vercel</a></p>
                <p>The sourcecode is in <a href="http://github.com/Gulfy034/skya-pjt-web">Github</a></p>
        </div>
    </>
)