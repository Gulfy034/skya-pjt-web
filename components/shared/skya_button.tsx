import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "@styles/skya_button.scss";

function SkyaBtnLoading() {
    const {t} = useTranslation(["loading"]);
    return <button className="skyaBtnLD">{t("button")}</button>
}

export function SkyaBtnDefault() {
    const {t} = useTranslation(["button"]);
    return <button className="skyaBtnD">{t("default")}</button>
}

export function SkyaBtnErr() {
    const {t} = useTranslation(["button"]);
    return <Link className="skyaBtnE" to={"/"}>{t("404back")}</Link>
}

export function SkyaBtnConfirm() {
    const {t} = useTranslation(["button"]);
    return <button type="submit">{t("submit")}</button>
}

export function SkyaBtnCancel() {
    const {t} = useTranslation(["button"]);
    return <button type="reset">{t("cancel")}</button>
}