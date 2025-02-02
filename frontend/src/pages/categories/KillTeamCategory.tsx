import React, { useState } from "react";
import CategoryLayout from "../../layouts/CategoryLayout";
import SideMenu, {MenuConfigItem} from "../../components/SideMenu.tsx";
import MapPacksComponent from "../../components/killteam/MapPacksComponent.tsx";
import LocalNewsComponent from "../../components/killteam/LocalNewsComponent.tsx";
import LocalEventsComponent from "../../components/killteam/LocalEventsComponent.tsx";
import KillTeamIntro from "../../components/killteam/KillTeamIntro.tsx";
import {Typography} from "@mui/material";
import ReactMarkdown from "react-markdown";
import {useTranslation} from "react-i18next";
import assets from "../../services/assetsLoader.ts";

enum Sections {
    INTRO = "INTRO",
    RULES = "RULES",
    GAME_SEQUENCE = 'GAME_SEQUENCE',
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
    }, resources: {
        type: "internal",
        target: Sections.RESOURCES, // New Section for Resources
        translationKey: "pages.categories.killteam.menu.resources",
    },
 /*   coreRules: {
        type: "internal",
        target: Sections.RULES,
        translationKey: "pages.categories.killteam.menu.rules",
    },*/
    gameSequence: {
        type: "internal",
        target: Sections.GAME_SEQUENCE,
        translationKey:"pages.categories.killteam.menu.game_sequence"

    },
    mapPacks: {
        type: "internal",
        target: Sections.MAP_PACKS,
        translationKey: "pages.categories.killteam.menu.map_packs",
    },

    /*events: {
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
    },*/
};
const KillTeamCategory: React.FC = () => {
    const {t} = useTranslation();
    const [activeSection, setActiveSection] = useState<Sections>(Sections.INTRO); // Default to Intro
    const renderMainContent = () => {
        switch (activeSection) {
            case Sections.INTRO:
                return <KillTeamIntro/>;
            case Sections.GAME_SEQUENCE:
                return (<>
                    <Typography variant="h5" gutterBottom>
                        {t('pages.categories.killteam.game_sequence.title')}
                    </Typography>
                    <Typography variant="body1">
                        <ReactMarkdown>
                            {t('pages.categories.killteam.game_sequence.description')}
                        </ReactMarkdown>
                    </Typography>
                </>)
            case Sections.RESOURCES:
                return (<>
                    <Typography variant="h5" gutterBottom>
                        {t('pages.categories.killteam.resources.title')}
                    </Typography>
                    <Typography variant="body1">
                        <ReactMarkdown>
                            {t('pages.categories.killteam.resources.description')}
                        </ReactMarkdown>
                    </Typography>
                </>)
            case Sections.MAP_PACKS:
                return <MapPacksComponent />;
            case Sections.LOCAL_EVENTS:
                return <LocalEventsComponent />;
            case Sections.LOCAL_NEWS:
                return <LocalNewsComponent />;
            default:
                return null;
        }
    };

    return (
        <CategoryLayout
            bannerImg={assets.images.killTeamBanner}
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