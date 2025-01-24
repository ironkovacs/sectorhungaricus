import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import PageLayout from "./components/layouts/PageLayout";

import routesConfig from "./routesConfig";
import LandingPage from "./pages/LandingPage.tsx";
import MerchPage from "./pages/MerchPage.tsx";
import CalendarPage from "./pages/CalendarPage.tsx";

const queryClient = new QueryClient();





const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <PageLayout>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/merch" element={<MerchPage />} />
                        <Route path="/calendar" element={<CalendarPage />} />
                        {routesConfig.map((category) => (
                            <Route
                                key={category.path}
                                path={category.path}
                            >
                                {/* Render a default component for the category, if provided */}
                                {category.component && (
                                    <Route index element={<category.component />} />
                                )}

                                {/* Render each subroute */}
                                {category.subRoutes?.map((sub) => (
                                    <Route
                                        key={sub.path}
                                        path={sub.path}
                                        element={sub.component ? <sub.component /> : null}
                                    />
                                ))}
                            </Route>
                        ))}

                        {/* Add a route for the default/fallback page (e.g., Home) */}
                        <Route path="/" element={<div>Welcome Page</div>} />
                    </Routes>
                </PageLayout>
            </BrowserRouter>
            <ReactQueryDevtools/>
        </QueryClientProvider>
    );
};

export default App;