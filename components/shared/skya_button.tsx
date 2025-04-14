import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import "@styles/shared/_buttons.scss";

function SkyaBtnLoading() {
    const {t} = useTranslation(["loading"]);
    return <button className="skyaBtnLD">{t("button")}</button>
}

export function SkyaBtnDefault() {
    const {t} = useTranslation(["buttons"]);
    return <button className="skyaBtnD">{t("default")}</button>
}

export function SkyaBtnErr() {
    const {t} = useTranslation(["buttons"]);
    return <Link className="skyaBtnE" to={"/"}>{t("404back")}</Link>
}

export function SkyaBtnConfirm() {
    const {t} = useTranslation(["buttons"]);
    return <button type="submit">{t("submit")}</button>
}

export function SkyaBtnCancel() {
    const {t} = useTranslation(["buttons"]);
    return <button type="reset">{t("cancel")}</button>
}