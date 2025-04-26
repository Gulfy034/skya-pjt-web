/* import React from "react"; */
import { useTranslation } from "react-i18next";
import "@styles/shared/_canvas.scss";

function BgAni() {
    /* const textCount: number = 80; */
    const { t } = useTranslation(["effectStrings"]);
    return <>{t("random1")}</>
}

export default function Background() {
    return (
        <canvas id="bg">
            <BgAni />
        </canvas>
    )
}