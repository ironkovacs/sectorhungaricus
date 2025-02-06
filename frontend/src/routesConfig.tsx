import KillTeamCategory from "./pages/categories/KillTeamCategory.tsx";
import SpearheadCategory from "./pages/categories/SpearheadCategory.tsx";
import WarcryCategory from "./pages/categories/WarcryCategory.tsx";

import React from "react";

interface RouteConfig {
    name: string;
    path: string;
    bannerTitle: string;
    component?: React.FC; // Optional component for the main category
    subRoutes?: {
        name: string;
        path: string;
        component: React.FC; // Component for the subroute
    }[];
}

const routesConfig: RouteConfig[] = [
    {
        name: "Kill Team",
        path: "/killteam",
        bannerTitle: "Kill Team",
        component: KillTeamCategory,

    },
    {
        name: "Spearhead",
        path: "/spearhead",
        bannerTitle: "Spearhead",
        component: SpearheadCategory,

    },
    {
        name: "Warcry",
        path: "/warcry",
        bannerTitle: "Warcry",
        component: WarcryCategory
    }
];

export default routesConfig;