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
        component: () => <div>Kill Team Base Page</div>, // Optional base page for the main category
    subRoutes: [
    { name: "Intro", path: "intro", component: KillTeamCategory },
   // { name: "Map Packs", path: "maps", component: KillTeamMaps },
    // { name: "Resources", path: "resources", component: KillTeamResources },
    // { name: "News", path: "news", component: KillTeamNews },
],
},
{
    name: "Spearhead",
        path: "/spearhead",
    bannerTitle: "Spearhead",
    component: () => <div>Spearhead Base Page</div>, // Optional base page
    subRoutes: [
        { name: "Intro", path: "intro", component: SpearheadCategory },
        // { name: "Resources", path: "resources", component: SpearheadResources },
        // { name: "News", path: "news", component: SpearheadNews },
    ],
},
{
    name: "Warcry",
        path: "/warcry",
    bannerTitle: "Warcry",
    component: () => <div>Warcry Base Page</div>, // Optional base page
    subRoutes: [
        { name: "Intro", path: "intro", component: WarcryCategory },
        // { name: "Resources", path: "resources", component: WarcryResources },
        // { name: "News", path: "news", component: WarcryNews },
    ],
},
];

export default routesConfig;