import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import "@styles/shared/_buttons.scss";


function SkyaBtnLoading() {
    const { t } = useTranslation(["loading"]);
    return <button className="skyaBtn loading">{t("button")}</button>
}

export function SkyaBtnDefault() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <button className="skyaBtn">
                {t("default")}
            </button>
        </Suspense>

    )
}

export function SkyaBtnErr() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <Link className="skyaBtn error" to={"/"}>
                {t("404back")}
            </Link>
        </Suspense>)

}

export function SkyaBtnConfirm() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <button className="skyaBtn confirm" type="submit">
                {t("submit")}
            </button>
        </Suspense>
    )
}

export function SkyaBtnCancel() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <button className="skyaBtn cancel" type="reset">
                {t("cancel")}
            </button>
        </Suspense>
    )
}

export function SkyaBtnKillBrowser() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <button className="skyaBtn kill" type="submit" onClick={close}>
                {t("kill")}
            </button>
        </Suspense>
    )
}