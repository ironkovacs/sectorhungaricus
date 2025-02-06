import React from "react";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {LanguageProvider} from './contexts/LanguageContext';
import {ThemeProviderCustom} from "./contexts/ThemeContext";
import PageLayout from "./layouts/PageLayout";

import CssBaseline from "@mui/material/CssBaseline";

import routesConfig from "./routesConfig";
import LandingPage from "./pages/LandingPage.tsx";
import MerchPage from "./pages/MerchPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";
import Login from "./pages/Login.tsx";
import ImpressDisclaimerPage from "./pages/ImpressDisclaimerPage.tsx";
import AdminPage from "./pages/AdminPage.tsx";

const queryClient = new QueryClient();

const isAdmin = () => {
    const token = localStorage.getItem("token");
    return !!token && JSON.parse(atob(token.split('.')[1])).isAdmin;
};

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    if (!isAdmin()) {
        return <Navigate to="/login" replace />;
    }

    return <>{children}</>;
};


const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProviderCustom>
                <CssBaseline/>
                <BrowserRouter>

                    <LanguageProvider>
                        <PageLayout>
                            <Routes>
                                <Route path="/" element={<LandingPage/>}/>
                                <Route path="/merch" element={<MerchPage/>}/>
                                <Route path="/calendar" element={<CalendarPage/>}/>
                                {routesConfig.map((category) => (
                                    <Route key={category.path} path={category.path}
                                           element={category.component && <category.component/>}>
                                    </Route>
                                ))}
                                {/* Admin Page */}
                                <Route path="/login" element={<Login/>}/>
                                <Route
                                    path="/admin"
                                    element={
                                        <ProtectedRoute>
                                            <AdminPage />
                                        </ProtectedRoute>
                                    }/>

                                {/* Redirect any non-existent routes to login */}
                                <Route path="/about" element={<ImpressDisclaimerPage/>}/>
                                <Route path="*" element={<Navigate to="/login" replace/>}/>
                            </Routes>
                        </PageLayout>
                    </LanguageProvider>
                </BrowserRouter>
                <ReactQueryDevtools/>
            </ThemeProviderCustom>
        </QueryClientProvider>
    );
};

export default App;