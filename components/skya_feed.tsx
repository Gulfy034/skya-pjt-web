//import React from "react";
import { useTranslation } from "react-i18next";

import "@styles/shared/_buttons.scss";

// TODO: add rss selection: rss2.0 atom

export default function ButtonFeeder() {
    const { t } = useTranslation(["nav"]);
    return (
        <button id="feed" className="navbtnT bi bi-rss" >
            {t("feed")}
        </button >
    )
}