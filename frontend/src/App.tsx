import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LanguageProvider } from './contexts/LanguageContext';
import PageLayout from "./components/layouts/PageLayout";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import routesConfig from "./routesConfig";
import LandingPage from "./pages/LandingPage.tsx";
import MerchPage from "./pages/MerchPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
                <CssBaseline />
            <BrowserRouter>
                <LanguageProvider>
                <PageLayout>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/merch" element={<MerchPage />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                        {routesConfig.map((category) => (
                            <Route key={category.path} path={category.path} element={category.component && <category.component />}>
                                {/* Render subroutes */}
                                {category.subRoutes?.map((sub) => (
                                    <Route
                                        key={sub.path}
                                        path={sub.path}
                                        element={sub.component ? <sub.component /> : null}
                                    />
                                ))}
                            </Route>
                        ))}
                    </Routes>
                </PageLayout>
                </LanguageProvider>
            </BrowserRouter>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
};

export default App;