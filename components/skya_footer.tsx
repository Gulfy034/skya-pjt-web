import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import "@styles/skya_footer.scss";

//TODO: animate footer
//TODO: need more stylish changes

function IndexFooter() {
    const { t } = useTranslation(["footer"]);
    return (
        <footer>
            <div className="mainfoot">
                <p>{t("common.part1")}</p>
                <hr />
                <p>
                    <Trans
                        i18nKey={"part2"}
                        components={{
                            CloudflareLink: <Link to={"https://cloudflare.com"}/>
                        }}
                    >
                        {t("common.part2")}
                    </Trans>
                </p>
                <p>
                    <Trans
                        i18nKey={"part3"}
                        components={{
                            GithubLink: <Link to={"https://github.com/Gulfy034/skya-pjt-web"}/>
                        }}
                    >
                        {t("common.part3")}
                    </Trans>
                </p>
            </div>
        </footer>
    )
}

function ErrorFooter() {
    const { t } = useTranslation(["footer"]);
    return (
        <footer>
            <div className="auguroz_footer">{t("auguroz.random1")}</div>
        </footer>
    )
}

export default function Footer() {
    const location = useLocation();
    return (
        location.pathname == "/" | "/Download" | "/About" | "/Contect"
            ? (<IndexFooter />)
            : (<ErrorFooter />)
    )
}
