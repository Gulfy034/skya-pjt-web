import { React, useState } from 'react';
import gsap from 'gsap';
import CrtSvg from '@components/skya_filters';
//import { playCrtSfx } from '@components/skya_playsfx';
//import { imgToAscii } from '@hooks/use-imgToAscii';
import '@styles/skya_introduci_02.scss';
import '@styles/skya_crt.scss';

// TODO: Add more buttons, i18n, animations

function CrtTV() {
    return (
        <div className="crtBox">
            <input type="checkbox" id="switch" /* checked={playCrtSfx} */ />
            <label htmlFor="switch" className="switch-label"></label>
            <button id="crtSwitch"></button>
            <div className="crtScreen crtScanlines">
                <div className="crtContents">
                    <h1 id="crtTitle">
                        crt title<span id="crtPointer">&#9608;</span>
                    </h1>

                    <div id="crtNav">
                        <ul>
                            <p>
                                <li>
                                    <a id="crtLink" /*onMouseEnter={playsfxTwo} */ href="https://skya-project.website">The web</a>
                                </li>
                            </p>
                            <p>
                                <li>
                                    <a id="crtLink" /*onMouseEnter={playsfxTwo} */ href="https://github.com/Gulfy034/skya-pjt-web">GitHub site</a>
                                </li>
                            </p>
                        </ul>
                    </div>

                    <div id="crtFooter">
                        <p>I am the crtfooter</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

/*
function CrtBtn() {
    const [check, isChecked] = useState(false);
}
*/
/*
function ImgAsciiOne() {
    let skyademo1 = new imgToAscii("imgs/SKYA_demo_1.png");
    skyademo1.display();
    //skyademo1.displaycolor('#2bad1a');
}
*/
export default function IntrTwo() {
    return (
        <>
            <CrtSvg />
            <div id="subTitleTwo">
                <h1 id="contTitleTwo"></h1>
            </div>

            
            <p>the picture of the demo logo</p>
            <br />

            <CrtTV />
        </>
    )
}

