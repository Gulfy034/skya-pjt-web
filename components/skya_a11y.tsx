//import React from "react";
//import { useTranslation } from "react-i18next";

import "@styles/skya_a11y.scss";


// TODO: make everyone access this websiite
/*
components required
*/

export function accessbility({ content }:any) {
    return (
        <div id="a11y" className="a11y">
            {content}
        </div>
    )
}