import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import MerchPage from "./pages/MerchPage";
import CalendarPage from "./pages/CalendarPage";
import Cookies from "js-cookie";
import {useTranslation} from "react-i18next";

const App: React.FC = () => {
    const { i18n } = useTranslation();

    // Retrieve the language setting from cookies or use the default ("en")
    const [language, setLanguage] = useState<string>(Cookies.get("lang") || "en");

    // Update i18next language and save to cookies when `language` changes
    useEffect(() => {
        i18n.changeLanguage(language).then(r => r);
        Cookies.set("lang", language, { expires: 365 });
    }, [language, i18n]);


    return (
        <Router>
            <Routes>
                {/* Wrap Pages in the Layout Component */}
                <Route path="/" element={
                        <Layout language={language} setLanguage={setLanguage}>
                            <LandingPage/>
                        </Layout>
                    }
                />
                <Route path="/merch" element={
                        <Layout language={language} setLanguage={setLanguage}>
                            <MerchPage/>
                        </Layout>
                    }
                />
                <Route path="/calendar" element={
                        <Layout language={language} setLanguage={setLanguage}>
                            <CalendarPage/>
                        </Layout>
                    }
                />
            </Routes>
        </Router>
    );
};

export default App;