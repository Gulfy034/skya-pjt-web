import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

// TODO: make more translation


export default i18n
    .use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        //debug: true,
        fallbackLng: "en",
        ns: ["loading", "home"],
        defaultNS: "loading",
        backend: {
            loadPath: "/locales/{{lng}}/{{ns}}.json",
        },
        detection: {
            caches: ["localStorage", "sessionStorage", "cookies"],
        },
        interpolation: {
            escapeValue: false,
        }
    })