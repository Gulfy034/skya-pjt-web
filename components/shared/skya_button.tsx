import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "@styles/shared/_buttons.scss";


function SkyaBtnLoading() {
    const { t } = useTranslation(["loading"]);
    return <button className="skyaBtnLD">{t("button")}</button>
}

export function SkyaBtnDefault() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <button className="skyaBtnD">
                {t("default")}
            </button>
        </Suspense>

    )
}

export function SkyaBtnErr() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <Link className="skyaBtnE" to={"/"}>
                {t("404back")}
            </Link>
        </Suspense>)

}

export function SkyaBtnConfirm() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <button type="submit">
                {t("submit")}
            </button>
        </Suspense>
    )
}

export function SkyaBtnCancel() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <button type="reset">
                {t("cancel")}
            </button>
        </Suspense>
    )
}

export function SkyaBtnKillBrowser() {
    const { t } = useTranslation(["buttons"]);
    return (
        <Suspense fallback={<SkyaBtnLoading />}>
            <button type="submit" onClick={close}>
                {t("kill")}
            </button>
        </Suspense>
    )
}