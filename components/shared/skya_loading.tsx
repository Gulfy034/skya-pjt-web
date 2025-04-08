import React from "react";
import { useTranslation } from "react-i18next";
import "@styles/skya_loading.scss";

//TODO: make this LoadingPart and animate it
export default function Loading() {
    const {t} = useTranslation(["loading"]);
    return (
        <div id="loading">
            {t("content")}
        </div>
    )
}