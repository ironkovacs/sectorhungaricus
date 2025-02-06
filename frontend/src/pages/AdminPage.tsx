import React, {useState} from "react";

import SideMenu, {MenuConfigItem} from "../components/SideMenu.tsx";
import AddPost from "../components/admin/AddPost.tsx";
import CategoryLayout from "../layouts/CategoryLayout.tsx";

enum Sections {
    EDIT = " EDIT",
    ADD = "ADD"
}

const menuConfig: Record<string, MenuConfigItem> = {
    edit: {
        type: "internal",
        target: Sections.EDIT,
        translationKey: "pages.categories.killteam.menu.intro",
    },
    add: {
        type: "internal",
        target: Sections.ADD,
        translationKey: "pages.categories.killteam.menu.intro",
    },
};


const AdminPage: React.FC = () => {

    const [activeSection, setActiveSection] = useState<Sections>(Sections.ADD); // Default to Intro

    const renderMainContent = () => {
        switch (activeSection) {
            case Sections.ADD:
                return <AddPost/>;
            // case'Selections.EDIT':
            //    return <EditPost/>;
        }
    };

    return (
        <CategoryLayout
            bannerTitle="Administratum"
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

export default AdminPage;