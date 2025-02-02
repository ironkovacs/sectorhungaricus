import React, { useState } from "react";
import CategoryLayout from "../../layouts/CategoryLayout";
import SideMenu, { MenuConfigItem } from "../../components/SideMenu";
import {Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

enum Sections {
    INTRO = "INTRO"
}

const menuConfig: Record<string, MenuConfigItem> = {
    intro: {
        type: "internal",
        target: Sections.INTRO,
        translationKey: "soon.menu_soon",
    },

};

const WarcryCategory: React.FC = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState<Sections>(Sections.INTRO);

    const renderMainContent = () => {
        switch (activeSection) {
            case Sections.INTRO:
                return (<Typography>{t("soon.content_soon")}</Typography>);
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