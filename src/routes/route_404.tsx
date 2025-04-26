import { useEffect } from "react";
import { Trans, useTranslation } from "react-i18next";

import Title from "@components/skya_title";
import Footer from "@components/skya_footer";
import { SkyaBtnErr } from "@components/shared/skya_button";
import { GlitchEff } from "@components/shared/skya_filters";

import "@styles/skya_404.scss";

export default function Error404Page() {
  const { t } = useTranslation(["errors"]);
  useEffect(() => {
    document.title = t("label");
  }, []);

  return (
    <>
      <GlitchEff />


      <header>
        <h1 className="title">{t("title")}</h1>
        <Title />
      </header>

      <main>

        <span>{t("main.part1")}</span>
        <p className="output">
          <Trans
            i18nKey={"main"}
            components={{
              span: <span/>
            }}
            >
            {t("main.part2")}
          </Trans>
        </p>
        <SkyaBtnErr />

      </main>

      <Footer />
    </>
  )
}