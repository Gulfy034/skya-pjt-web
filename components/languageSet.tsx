import React from "react";
import i18next from "i18next";
import { initReactI18next, Translation } from "react-i18next";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

import chs from '/localize/LangConfig_zh-CN.json';
import cht from '/localize/LangConfig_zh-HK.json'
import en from '/localize/LangConfig_en.json';
import ru from '/localize/LangConfig_ru.json';
import ja from '/localize/LangConfig_ja.json';

const langResouce = {
    chs: {
        Translation: chs,
    },
    cht: {
        Translation: cht,
    },
    en: {
        Translation: en,
    },
    ru: {
        Translation: ru,
    },
    ja: {
        Translation: ja,
    }
};
i18next.use(I18nextBrowserLanguageDetector).use(initReactI18next).init({
    langResouce,
    fallbackLng: 'en',
    detection: {
        caches: ['localStorage', 'sessionStorage', 'cookies'],
    }
})