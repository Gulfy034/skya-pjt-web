//import React from "react";
//import { Trans, useTranslation } from "react-i18next";

import { SkyaBtnCancel } from "@components/shared/skya_button";
//import { langSelect, langList } from "@components/skya_languageSwitch";

import "@styles/skya_floatwindow.scss";


/*
TODO:
animate the modal window.
call lenis background stop() while opening, and start() while closing
*/

export default function Smodal() {
    const modalUtils = (
        <>
            <h1 id="modalTitle">

            </h1>
            <p id="modalTexts">

            </p>
        </>
    );
    return (
            <dialog id="smodalBox">
                <SkyaBtnCancel />
                <form id="smodalContent" method="dialog">
                    {modalUtils}
                </form>
            </dialog>
    );
}