import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";
import { useTranslation } from "react-i18next";

// Define the shape of the context
interface LanguageContextProps {
    language: string;
    setLanguage: (lang: string) => void;
}

// Create the context with default values
const LanguageContext = createContext<LanguageContextProps>({
    language: "hu", // Default language
    setLanguage: () => {}, // Default setter, overridden by provider
});

// Language provider to wrap the app
export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(Cookies.get("lang") || "hu");

    useEffect(() => {
        i18n.changeLanguage(language).then(() => {
            Cookies.set("lang", language, { expires: 365 });
        }).catch((err) => {
            console.error("Failed to change language:", err);
        });
    }, [language, i18n]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook for easy access to the context
export const useLanguage = () => useContext(LanguageContext);