import React, { useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import Typed from "typed.js";
import gsap from "gsap";
import '@styles/skya_title.scss';

function TitleTyped() {
    const ref = React.useRef(null);
    React.useEffect(() => {
        const typedOne = new Typed(ref.current, {
            strings: ['SKYA_PROJECT'],
            typeSpeed: 35,
        });
        return () => {
            typedOne.destroy();
        };
    }, []);
    return (
        <>
            <p id="skyaTitleText" className="skyaTitleText" ref={ref} />
        </>
    )
}

function ErrorTyped() {
    const ref = React.useRef(null);
    React.useEffect(() => {
        const typedOne = new Typed(ref.current, {
            strings: ['SKYA_ERROR', '404_NOT_FOUND'],
            typeSpeed: 50,

        });
        return () => {
            typedOne.destroy();
        };
    }, []);
    return (
        <>
            <p id="errTitleText" className="errTitleText" ref={ref} />
        </>
    )
}

//TODO: make a list of recorded pathname
//TODO: animate it and i18n

export default function Title() {
    const isIndex = useLocation();
    const titleTl = useRef();
    const titleContainer = useRef();

    useLayoutEffect(() => {
        const titlectx = gsap.context(() => {
            titleTl.current = gsap.timeline()
                .from("#skyaTitleText", {
                    x: -100,
                    skewY: -15,
                    duration: 0.75,//seconds
                })
                .from("#errTitleText", {
                    y: -120,
                    duration: 2,//seconds
                })
        }, titleContainer);
        return () => titlectx.revert();
    }, []);
    return (
        <div className="skyaTitle" ref={titleContainer}>
            {
                isIndex.pathname == '/' | '/Download' | '/About' | '/Contect'
                    ? (<TitleTyped />)
                    : (<ErrorTyped />)
            }
        </div>
    )
}
