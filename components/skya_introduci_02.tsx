import { Trans, useTranslation } from "react-i18next";
//import { playCrtSfx } from "@components/skya_playsfx";

import "@styles/skya_introduci_02.scss";

// TODO: i18n, animations

export default function IntrTwo() {
    const {t} = useTranslation(["contents"]);
    return (
        <>
            <div id="subTitleTwo">
                <h3 id="contTitleTwo">
                    <Trans i18nKey={"contents"}>
                        {t("title.sectionTitleTwo")}
                    </Trans>
                </h3>
            </div>

            <p>pics</p>
            <br />
        </>
    )
}

