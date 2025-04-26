import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Typed from "typed.js";

import "@styles/skya_title.scss";

// TODO: let it more stylish

function TitleTyped() {
    const typedRef = useRef(null);
    const { t } = useTranslation(["elements"]);

    useEffect(() => {
        const typedOne = new Typed(typedRef.current, {
            strings: [t(`monitor.normal.one`), t(`monitor.normal.two`), t(`monitor.normal.three`)],
            typeSpeed: 35,
            showCursor: false,
        });
        return () => {
            typedOne.destroy();
        };
    }, []);
    return <p id="skyaTitleText" className="skyaTitleText" ref={typedRef} />
}

function ErrorTyped() {
    const typedRef = useRef(null);
    const { t } = useTranslation(["elements"]);

    useEffect(() => {
        const typedOne = new Typed(typedRef.current, {
            strings: [t(`monitor.errors.show`), t(`monitor.errors.notfound`)],
            typeSpeed: 50,
            showCursor: false
        });
        return () => {
            typedOne.destroy();
        };
    }, []);
    return <p id="skyaTitleText" className="errTitleText" ref={typedRef} />
}

//TODO: make a list of recorded pathname

export default function Title() {
    const path = useLocation();
    return (
        <div className="skyaTitle" >
            { path.pathname == "/404" ? (<ErrorTyped />) : (<TitleTyped />) }
        </div>
    )
}
