import React, { useState } from "react";
import {
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    Collapse,
    IconButton,
    Drawer,
    Toolbar,
    AppBar,
    Box,
    Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menu icon
import OpenInNewIcon from "@mui/icons-material/OpenInNew"; // External link icon
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

import CategoryLayout from "../../components/layouts/CategoryLayout";
import MapPacksComponent from "../../components/killteam/MapPacksComponent";
import PrintablesComponent from "../../components/killteam/PrintablesComponent";
import LocalEventsComponent from "../../components/killteam/LocalEventsComponent";
import LocalNewsComponent from "../../components/killteam/LocalNewsComponent";

enum Sections {
    INTRO = "INTRO",
    MAP_PACKS = "MAP_PACKS",
    PRINTABLES = "PRINTABLES",
    LOCAL_EVENTS = "LOCAL_EVENTS",
    LOCAL_NEWS = "LOCAL_NEWS",
}

const KillTeamCategory: React.FC = () => {
    const { t } = useTranslation();
    const [activeSection, setActiveSection] = useState<Sections>(Sections.INTRO);
    const [officialResourcesOpen, setOfficialResourcesOpen] = useState(true);
    const [unofficialResourcesOpen, setUnofficialResourcesOpen] = useState(false);
    const [newsOpen, setNewsOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const toggleOfficialResources = () => setOfficialResourcesOpen(!officialResourcesOpen);
    const toggleUnofficialResources = () => setUnofficialResourcesOpen(!unofficialResourcesOpen);
    const toggleNews = () => setNewsOpen(!newsOpen);
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

    const renderMainContent = () => {
        switch (activeSection) {
            case Sections.INTRO:
                return (
                    <>
                        <Typography variant="h5" gutterBottom>
                            {t("pages.categories.killteam.intro.title")}
                        </Typography>
                        <Typography variant="body1">
                            {t("pages.categories.killteam.intro.description")}
                        </Typography>
                    </>
                );
            case Sections.MAP_PACKS:
                return <MapPacksComponent />;
            case Sections.PRINTABLES:
                return <PrintablesComponent />;
            case Sections.LOCAL_EVENTS:
                return <LocalEventsComponent />;
            case Sections.LOCAL_NEWS:
                return <LocalNewsComponent />;
            default:
                return null;
        }
    };

    const renderMenuContent = () => (
        <List>
            <ListItem  onClick={() => setActiveSection(Sections.INTRO)}>
                <ListItemText primary={t("pages.categories.killteam.menu.intro")} />
            </ListItem>

            <ListItem  onClick={() => setActiveSection(Sections.MAP_PACKS)}>
                <ListItemText primary={t("pages.categories.killteam.menu.map_packs")} />
            </ListItem>

            <ListItem  onClick={toggleOfficialResources}>
                <ListItemText primary={t("pages.categories.killteam.menu.official_resources")} />
                {officialResourcesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={officialResourcesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem
                        component="a"
                        href="https://start-warhammer.com/kill-team/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ListItemText primary={t("pages.categories.killteam.official_resources.links.website")} />
                        <ListItemIcon>
                            <OpenInNewIcon fontSize="small" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        component="a"
                        href="https://www.warhammer-community.com/en-gb/setting/kill-team/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ListItemText primary={t("pages.categories.killteam.official_resources.links.news")} />
                        <ListItemIcon>
                            <OpenInNewIcon fontSize="small" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem
                        component="a"
                        href="https://www.warhammer-community.com/en-gb/downloads/kill-team/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ListItemText primary={t("pages.categories.killteam.official_resources.links.downloads")} />
                        <ListItemIcon>
                            <OpenInNewIcon fontSize="small" />
                        </ListItemIcon>
                    </ListItem>
                </List>
            </Collapse>

            <ListItem  onClick={toggleUnofficialResources}>
                <ListItemText primary={t("pages.categories.killteam.menu.unofficial_resources")} />
                {unofficialResourcesOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={unofficialResourcesOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem
                        component="a"
                        href="https://kt3.albecortes.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ListItemText
                            primary={t("pages.categories.killteam.unofficial_resources.links.battlekit")}
                        />
                        <ListItemIcon>
                            <OpenInNewIcon fontSize="small" />
                        </ListItemIcon>
                    </ListItem>
                    <ListItem  onClick={() => setActiveSection(Sections.PRINTABLES)}>
                        <ListItemText
                            primary={t("pages.categories.killteam.unofficial_resources.links.printables")}
                        />
                    </ListItem>
                </List>
            </Collapse>

            <ListItem  onClick={toggleNews}>
                <ListItemText primary={t("pages.categories.killteam.menu.events")} />
                {newsOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={newsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <ListItem  onClick={() => setActiveSection(Sections.LOCAL_EVENTS)}>
                        <ListItemText primary={t("pages.categories.killteam.menu.local_events")} />
                    </ListItem>
                    <ListItem  onClick={() => setActiveSection(Sections.LOCAL_NEWS)}>
                        <ListItemText primary={t("pages.categories.killteam.menu.news")} />
                    </ListItem>
                </List>
            </Collapse>
        </List>
    );

    return (
        <CategoryLayout
            bannerTitle={t("pages.categories.killteam.banner.title")}
            menuContent={
                <>
                    {renderMenuContent()}
                    {/* Mobile Drawer */}
                    <AppBar position="static" color="default" sx={{ display: { sm: "none" }, marginBottom: 2 }}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={handleDrawerToggle}>
                                <MenuIcon />
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer anchor="left" open={mobileOpen} onClose={handleDrawerToggle} sx={{ display: { sm: "none" } }}>
                        <Box sx={{ width: 250 }}>{renderMenuContent()}</Box>
                    </Drawer>
                </>
            }
        >
            {renderMainContent()}
        </CategoryLayout>
    );
};

export default KillTeamCategory;