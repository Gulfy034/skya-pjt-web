import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Typed from "typed.js";

import "@styles/shared/_effects.scss";

function TitleTyped() {
    const typedRef = useRef(null);
    const { t } = useTranslation(["elements"]);

    useEffect(() => {
        const typedOne = new Typed(typedRef.current, {
            strings: [t(`monitor.normal.one`), t(`monitor.normal.two`), t(`monitor.normal.three`)],
            typeSpeed: 35,
            showCursor: false,
            loop: true,
        });
        return () => {
            typedOne.destroy();
        };
    }, []);
    return <p id="texts" className="normalText" ref={typedRef} />
}

function ErrorTyped() {
    const typedRef = useRef(null);
    const { t } = useTranslation(["elements"]);

    useEffect(() => {
        const typedOne = new Typed(typedRef.current, {
            strings: [t(`monitor.errors.show`), t(`monitor.errors.notfound`)],
            typeSpeed: 50,
            showCursor: false,
            loop: true,
        });
        return () => {
            typedOne.destroy();
        };
    }, []);
    return <p id="texts" className="errorText" ref={typedRef} />
}

export default function Styped() {
    const path = useLocation();
    return (
        <canvas className="typed" >
            {path.pathname == "/404" ? (<ErrorTyped />) : (<TitleTyped />)}
        </canvas>
    )
}