import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { LanguageProvider } from "./contexts/LanguageContext"; // Import LanguageProvider
import PageLayout from "./components/layouts/PageLayout";

// Your pages
import LandingPage from "./pages/LandingPage";
import MerchPage from "./pages/MerchPage";
import CalendarPage from "./pages/CalendarPage";
import KillTeamCategory from "./pages/categories/KillTeamCategory";
import SpearheadCategory from "./pages/categories/SpearheadCategory";
import WarcryCategory from "./pages/categories/WarcryCategory";
import ImpressDisclaimer from "./pages/ImpressDisclaimerPage";

const queryClient = new QueryClient();

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <LanguageProvider>
                <Router>
                    <PageLayout>
                        <Routes>
                            <Route path="/" element={<LandingPage />} />
                            <Route path="/merch" element={<MerchPage />} />
                            <Route path="/calendar" element={<CalendarPage />} />
                            <Route path="/killteam" element={<KillTeamCategory />} />
                            <Route path="/spearhead" element={<SpearheadCategory />} />
                            <Route path="/warcry" element={<WarcryCategory />} />
                            <Route path="/impress-disclaimer" element={<ImpressDisclaimer />} />
                        </Routes>
                    </PageLayout>
                </Router>
            </LanguageProvider>
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default App;