import React, { useState } from "react";
import CategoryLayout from "../../components/layouts/CategoryLayout";
import SideMenu, {MenuConfigItem} from "../../components/SideMenu.tsx";
import MapPacksComponent from "../../components/killteam/MapPacksComponent.tsx";
import LocalNewsComponent from "../../components/killteam/LocalNewsComponent.tsx";
import LocalEventsComponent from "../../components/killteam/LocalEventsComponent.tsx";

enum Sections {
    INTRO = "INTRO",
    MAP_PACKS = "MAP_PACKS",
    LOCAL_EVENTS = "LOCAL_EVENTS",
    LOCAL_NEWS = "LOCAL_NEWS",
    RESOURCES = "RESOURCES", // New Section for all Resources
}

const menuConfig: Record<string, MenuConfigItem> = {

    intro: {
        type: "internal",
        target: Sections.INTRO,
        translationKey: "pages.categories.killteam.menu.intro",
    },
    mapPacks: {
        type: "internal",
        target: Sections.MAP_PACKS,
        translationKey: "pages.categories.killteam.menu.map_packs",
    },
    resources: {
        type: "internal",
        target: Sections.RESOURCES, // New Section for Resources
        translationKey: "pages.categories.killteam.menu.resources",
    },
    events: {
        type: "nested",
        translationKey: "pages.categories.killteam.menu.events",
        nestedMenu: {
            localEvents: {
                type: "internal",
                target: Sections.LOCAL_EVENTS,
                translationKey: "pages.categories.killteam.menu.local_events",
            },
            news: {
                type: "internal",
                target: Sections.LOCAL_NEWS,
                translationKey: "pages.categories.killteam.menu.news",
            },
        },
    },
};
const KillTeamCategory: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Sections>(Sections.INTRO); // Default to Intro
    const renderMainContent = () => {
        switch (activeSection) {
            case Sections.INTRO:
                return <div>Intro Content</div>;
            case Sections.MAP_PACKS:
                return MapPacksComponent;
            case Sections.LOCAL_EVENTS:
                return LocalEventsComponent;
            case Sections.LOCAL_NEWS:
                return LocalNewsComponent;
            default:
                return null;
        }
    };

    return (
        <CategoryLayout
            bannerTitle="Kill Team"
            menuContent={
            <SideMenu
                menuConfig={menuConfig}
                setActiveSection={(section: string) => setActiveSection(section as Sections)}
            />}
        >
            {renderMainContent()}
        </CategoryLayout>
    );
};

export default KillTeamCategory;