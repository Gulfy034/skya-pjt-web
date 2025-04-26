import { Link, useLocation } from "react-router-dom";
import { Trans, useTranslation } from "react-i18next";

import "@styles/skya_footer.scss";

//TODO: animate footer
//TODO: need more stylish changes

function IndexFooter() {
    const { t } = useTranslation(["footers", "copyright"]);
    return (
        <footer>
            <div className="mainfoot">
                <p>{t("common.part1")}</p>
                <hr />
                <p>
                    <Trans
                        i18nKey={"part2"}
                        components={{
                            CloudflareLink: <Link to={"https://cloudflare.com"} />,

                        }}
                    >
                        {t("common.part2")}
                    </Trans>
                        &nbsp;|&nbsp;
                    <Trans
                        i18nKey={"part3"}
                        components={{
                            GithubLink: <Link to={"https://github.com/Gulfy034/skya-pjt-web"} />
                        }}
                    >
                        {t("common.part3")}
                    </Trans>
                </p>
                <p>
                    <Trans
                    i18nKey={"copyright"}
                    components={{
                        Copyright: <span>&copy;</span>,
                        Cite: <cite/>
                    }}>
                        {t("copyright:copyright")}
                    </Trans>
                </p>
            </div>
        </footer>
    )
}

function ErrorFooter() {
    const { t } = useTranslation(["footers"]);
    return (
        <footer>
            <div className="augurozFooter">
                <Trans
                    i18nKey={"footers"}
                    components={{
                        span: <span />
                    }}
                >
                    {t("auguroz.random1")}
                </Trans>
            </div>
        </footer >
    )
}

export default function Footer() {
    const location = useLocation();
    return location.pathname == "/404" ? (<ErrorFooter />) : (<IndexFooter />);
}