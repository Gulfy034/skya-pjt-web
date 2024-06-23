import { React, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { playsfxTwo, playCrtSfxOn } from '/components/skya_playsfx.jsx';
import { CrtSvg } from '/src/jsx_script/filters.jsx';


const intrThree = document.querySelector(".bb");
const intrInsert = createRoot(intrThree)
intrInsert.render(
    <>

        <div id="subTitleTwo">
            <h1 id='contTitleTwo'></h1>
        </div>
        <img src="/imgs/SKYA_demo_1.png" />
        <p>the picture of the demo logo</p>
        <br />

        <div className="crtBox">
            <input type="checkbox" id="switch" onClick={playCrtSfxOn} />
            <label htmlFor="switch" className="switch-label">
            </label>
            <div className="crtScreen crtScanlines">
                <div className="crtContents">
                    <h1 id="crtTitle">
                        crt title<span id="crtPointer">&#9608;</span>
                    </h1>

                    <div id="crtNav">
                        <ul>
                            <p>
                                <li>
                                    <a id="crtLink" onMouseEnter={playsfxTwo} href="https://skya-project.website">The web</a>
                                </li>
                            </p>
                            <p>
                                <li>
                                    <a id="crtLink" onMouseEnter={playsfxTwo} href="https://github.com/Gulfy034/skya-pjt-web">GitHub site</a>
                                </li>
                            </p>
                        </ul>
                    </div>

                    <div id="footerCrt">
                        <p>I am the crtfooter</p>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <p>here a crt tv</p>
        </div>
        <CrtSvg />
    </>
)
