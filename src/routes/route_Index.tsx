import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Header from "@components/skya_header";
import Introduci from "@components/skya_introduci";
import Footer from "@components/skya_footer";

import Loading from "@components/shared/skya_loading";

import "@styles/index.scss";

//TODO: lazyload components

export default function IndexPage() {
  const { t } = useTranslation(["home"]);
  useEffect(() => {
    document.title = t("welcome");
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <header id="header">
          <Header />
        </header>
        <main>
          <Introduci />
        </main>
        <Footer />
      </Suspense>
    </>
  )
}