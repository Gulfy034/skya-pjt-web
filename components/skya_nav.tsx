import React, { useLayoutEffect, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import gsap from "gsap";
//import { isMobile } from "react-device-detect";

//import { playsfxOne, playsfxTwo } from '@components/skya_playsfx';
//import '@components/languageSet';

import '@styles/skya_nav.scss';

//TODO: mobile detect => change this appearence.
//TODO: test router buttons should be removed.
//TODO: localize text.

/*
const RenderMobile = () => {
    if (isMobile) {
        return (
            <></>
        )
    }
}
*/

export default function Nav() {

    interface boxTl {
        current: undefined
    }
    const navContainer = useRef();
    const boxTl = useRef();

    useLayoutEffect(() => {
        //use same timelines
        const navctx = gsap.context(() => {
            boxTl.current = gsap.timeline()
                .from(".firstul", {
                    x: -10,
                    y: -15,
                    duration: 0.25,//seconds
                })
                .from(".navbtn", {
                    x: -12,
                    y: -25,
                    scale: 1.15,
                    duration: 0.15,//seconds
                })
                .from(".secondul", {
                    x: -12,
                    y: -15,
                    duration: 0.15,//seconds
                })
        }, navContainer);
        return () => navctx.revert();
    }, []);

    return (
        <nav id="navbox" ref={navContainer}>

            <ul className="firstul">
                <NavLink
                    className="navbtn"
                    id="navHome"
                    to={`/`}>
                    HOME #
                </NavLink>

                <NavLink
                    className="navbtn"
                    id="navDownload"
                    to={`/Download`}>
                    DOWNLOAD %
                </NavLink>

                <NavLink
                    className="navbtn"
                    id="navAbout"
                    to={`/About`}>
                    ABOUT ?
                </NavLink>

                <NavLink
                    className="navbtn"
                    id="navContect"
                    to={`/Contect`}>
                    CONTECT @
                </NavLink>
            </ul>

            <ul className="secondul">
                <button
                    className="navbtnT"
                    id="langSet">
                    Language
                </button>

                <NavLink
                    className="navbtnT"
                    id="errPg"
                    to={`/404`}>
                    Goto-404-Page
                </NavLink>

            </ul>
        </nav>
    );

}