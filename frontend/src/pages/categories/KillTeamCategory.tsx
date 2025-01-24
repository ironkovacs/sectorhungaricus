import React, { useState } from "react";
import CategoryLayout from "../../components/layouts/CategoryLayout";
import SideMenu, {MenuConfigItem} from "../../components/SideMenu.tsx";

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
    const [activeSection, setActiveSection] = useState<Sections>(Sections.INTRO);

    const renderMainContent = () => {
        switch (activeSection) {
            case Sections.INTRO:
                return <div>Intro Content</div>;
            case Sections.MAP_PACKS:
                return <div>Map Packs Content</div>;
            case Sections.LOCAL_EVENTS:
                return <div>Local Events Content</div>;
            case Sections.LOCAL_NEWS:
                return <div>Local News Content</div>;
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