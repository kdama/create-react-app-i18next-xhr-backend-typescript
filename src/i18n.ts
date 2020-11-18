import i18n from "i18next";
import HttpBackend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

i18n
  .use(HttpBackend)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "./locales/{{lng}}/{{ns}}.json",
    },
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    lng: navigator.language.substr(0, 2).toLowerCase(),
  });
