import React from "react";
import { Link } from "react-router-dom";
import '@styles/skya_button.scss';

//TODO: i18n required
const texthereEn = {
    default: 'default text',
    back404: 'Take me to the main page !',
}

export function SkyaBtnDefault() {
    return (
        <button className="skyaBtnD">{texthereEn.default}</button>
    )
}

export function SkyaBtnErr() {
    return (
        <Link className="skyaBtnE" to={'/'}>{texthereEn.back404}</Link>
    )
}