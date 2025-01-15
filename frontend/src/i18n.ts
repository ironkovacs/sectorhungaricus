import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files
import en from "./locales/en.json";
import hu from "./locales/hu.json";

// Initialize i18n
i18n.use(initReactI18next).init({
    resources: {
        hu: { translation: hu },
        en: { translation: en },
    },
    lng: "hu", // Default language
    fallbackLng: "en",
    interpolation: {
        escapeValue: false, // React already escapes values to prevent XSS
    },
});

export default i18n;