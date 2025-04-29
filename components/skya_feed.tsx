//import React from "react";
import { useTranslation } from "react-i18next";

import "@styles/shared/_buttons.scss";
import { useState } from "react";

// TODO: add rss selection: rss2.0 atom

export default function ButtonFeeder() {
    const [name, setName] = useState("what");
    const { t } = useTranslation(["nav"]);
    return (
        <button id="feed" className="navbtnT bi bi-rss" onClick={
            () => {
                fetch('/api/')
                  .then((res) => res.json() as Promise<{ name: string }>)
                  .then((data) => setName(data.name))
              }
        }>
            {t("feed")+" with "+name}
        </button >
    )
}