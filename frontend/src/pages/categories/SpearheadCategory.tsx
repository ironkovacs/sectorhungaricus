import React, { useState } from "react";
import CategoryLayout from "../../components/layouts/CategoryLayout";
import SideMenu, { MenuConfigItem } from "../../components/SideMenu";

enum Sections {
    INTRO = "INTRO",
    RESOURCES = "RESOURCES",
    NEWS = "NEWS",
}

const menuConfig: Record<string, MenuConfigItem> = {
    intro: {
        type: "internal",
        target: Sections.INTRO,
        translationKey: "pages.categories.spearhead.menu.intro",
    },
    resources: {
        type: "internal",
        target: Sections.RESOURCES,
        translationKey: "pages.categories.spearhead.menu.resources",
    },
    news: {
        type: "internal",
        target: Sections.NEWS,
        translationKey: "pages.categories.spearhead.menu.news",
    },
};

const SpearheadCategory: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Sections>(Sections.INTRO);

    const renderMainContent = () => {
        switch (activeSection) {
            case Sections.INTRO:
                return <div>Spearhead Intro Content</div>;
            case Sections.RESOURCES:
                return <div>Spearhead Resources Content</div>;
            case Sections.NEWS:
                return <div>Spearhead News Content</div>;
            default:
                return null;
        }
    };

    return (
        <CategoryLayout
            bannerTitle="Spearhead"
            menuContent={
                <SideMenu
                    menuConfig={menuConfig}
                    setActiveSection={(section: string) => setActiveSection(section as Sections)}
                />
            }
        >
            {renderMainContent()}
        </CategoryLayout>
    );
};

export default SpearheadCategory;