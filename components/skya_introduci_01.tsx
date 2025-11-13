import { Trans, useTranslation } from "react-i18next";
//import { playVsfxOne } from "@components/skya_playsfx.jsx"

import "@styles/skya_introduci_01.scss";


//TODO: i18n localize, use <summary></summary>
export default function IntrOne() {
    const { t } = useTranslation(["contents"]);
    return (
        <>
            <div id="sectionOne">
                <h3 id="subTitleOne">
                    <Trans
                        i18nKey={"contents"}
                        components={{
                            codeOne: <code id="spanOne" /*onClick={playVsfxOne}*/ />,
                        }}>
                        {t("title.sectionTitleOne")}
                    </Trans>
                </h3>
                <h4>{t("title.subTitleOne")}</h4>
                <p>{t("content.intrOne")}</p>
            </div>
        </>
    );
}