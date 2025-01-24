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
        translationKey: "pages.categories.warcry.menu.intro",
    },
    resources: {
        type: "internal",
        target: Sections.RESOURCES,
        translationKey: "pages.categories.warcry.menu.resources",
    },
    news: {
        type: "internal",
        target: Sections.NEWS,
        translationKey: "pages.categories.warcry.menu.news",
    },
};

const WarcryCategory: React.FC = () => {
    const [activeSection, setActiveSection] = useState<Sections>(Sections.INTRO);

    const renderMainContent = () => {
        switch (activeSection) {
            case Sections.INTRO:
                return <div>Warcry Intro Content</div>;
            case Sections.RESOURCES:
                return <div>Warcry Resources Content</div>;
            case Sections.NEWS:
                return <div>Warcry News Content</div>;
            default:
                return null;
        }
    };

    return (
        <CategoryLayout
            bannerTitle="Warcry"
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

export default WarcryCategory;