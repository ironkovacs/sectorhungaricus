import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./pages/LandingPage";
import MerchPage from "./pages/MerchPage";
import CalendarPage from "./pages/CalendarPage";
import Cookies from "js-cookie";
import {useTranslation} from "react-i18next";


import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import KillTeamCategory from "./pages/categories/KillTeamCategory";

const queryClient = new QueryClient();

const App: React.FC = () => {
    const {i18n} = useTranslation();

    // Retrieve the language setting from cookies or use the default ("en")
    const [language, setLanguage] = useState<string>(Cookies.get("lang") || "en");

    // Update i18next language and save to cookies when `language` changes
    useEffect(() => {
        i18n.changeLanguage(language).then(r => r);
        Cookies.set("lang", language, {expires: 365});
    }, [language, i18n]);


    return (
        <QueryClientProvider client={queryClient}>
            <Router>
                <Routes>
                    {/* ---- Main menu links ---- */}
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
                    {/* ---- Categories ---- */}
                    <Route
                        path="/killteam"
                        element={
                            <Layout language={language} setLanguage={setLanguage}>
                                <KillTeamCategory />
                            </Layout>
                        }
                    />
                    {/*<Route
                        path="/spearhead"
                        element={
                            <Layout language={language} setLanguage={setLanguage}>
                                <SpearheadCategory />
                            </Layout>
                        }
                    />*/}
                    {/*
                    <Route path="/news" element={
                        <Layout language={language} setLanguage={setLanguage}>
                            <NewsPage/>
                        </Layout>
                    }
                    />*/}
                </Routes>
            </Router>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
};

export default App;