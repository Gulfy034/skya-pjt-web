import React from "react";
import { useTranslation } from "react-i18next";
import "@styles/skya_background.scss";

export default function Background() {
    return(
        <canvas id="bg"></canvas>
    )
}

let textCount = 80;
export function bgAni() {
    const {t, ready} = useTranslation(["effectStrings"]);
    return <>{t("random1")}</>
}