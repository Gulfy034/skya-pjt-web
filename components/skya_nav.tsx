import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
//import { isMobile } from "react-device-detect";

import ButtonFeeder from "@components/skya_feed";

//import { buttonSfx } from "@components/shared/skya_playsfx";
import { Modal } from "@components/shared/skya_modal";

import "@styles/skya_nav.scss";
import "@styles/skya_modal.scss";
import { useModal } from "@hooks/useModal";

//TODO: mobile detect => change this appearence.
//TODO: test router buttons should be removed.

/*
const RenderMobile = () => {
    if (isMobile) {
        return (
            <></>
        )
    }
}
*/

export default function Nav() {
    const { t } = useTranslation(["nav"]);
    const { openModal } = useModal();
    return (
        <>
            <nav id="navbox">
                <ul className="firstul">
                    <NavLink
                        className="navbtn"
                        id="navHome"
                        to={`/`}
                    >
                        {t("home")}
                    </NavLink>

                    <NavLink
                        className="navbtn"
                        id="navDownload"
                        to={`/Download`}
                    >
                        {t("download")}
                    </NavLink>

                    <NavLink
                        className="navbtn"
                        id="navAbout"
                        to={`/About`}
                    >
                        {t("about")}
                    </NavLink>

                    <NavLink
                        className="navbtn"
                        id="navContect"
                        to={`/Contect`}
                    >
                        {t("contect")}
                    </NavLink>
                </ul>

                <ul className="secondul">
                    <button
                        type="button"
                        className="navbtnT"
                        id="langSet"
                        onClick={() => openModal()}
                    >
                        {t("languages")}
                    </button>

                    <ButtonFeeder />

                    <NavLink
                        className="navbtnT"
                        id="errPg"
                        to={`/404`}
                    >
                        {t("goto404")}
                    </NavLink>
                </ul>
            </nav>
            <Modal />
        </>
    );
}
