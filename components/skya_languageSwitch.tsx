//import React from "react";
import { useTranslation, Trans } from "react-i18next";

export function langSelect() {
    const { t } = useTranslation(["elements"]);
    return (
        <>
            <Trans
                i18nKey={"elements"}
                components={{
                    "LangTitle": <span style={{ color: "#2bad1a"}}></span>
                }}>
                {t("modal.title.langSelect")}
            </Trans>
        </>
    )
}

export function langList() {
    const { t } = useTranslation(["elements"]);
    return (
        <>
            <Trans
                i18nKey={"elements"}
                components={{
                    "LangList": <span style={{ color: "#2bad1a", fontFamily: "'XTypeWriter-Regular', 'fusion-pixel-Monospace'" }}></span>
                }}>
                {t("modal.content.langSelect")}
            </Trans>
        </>
    )
}