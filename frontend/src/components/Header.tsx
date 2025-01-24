import React, { useEffect, useState } from "react";
import {
    AppBar,
    Toolbar,
    MenuItem,
    Box,
    Button,
    IconButton,
    Tab,
    Tabs,
    Menu,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { Logo, Title } from "./styled/HeaderStyled";

import assets from "../services/assetsLoader";
import routesConfig from "../routesConfig"; // Import routesConfig to dynamically render tabs

const Header: React.FC = () => {
    const { t } = useTranslation();
    const { setLanguage } = useLanguage(); // Access language and setLanguage from LanguageContext
    const location = useLocation();

    // Automatically set the active tab based on the current path
    const [activeTab, setActiveTab] = useState<string>("");

    useEffect(() => {
        // Determine the active tab by matching the location.pathname with the base category paths
        const basePath = `/${location.pathname.split("/")[1]}`;
        const isValidPath = routesConfig.some((route) => route.path === basePath);
        if (isValidPath) {
            setActiveTab(basePath);
        } else {
            setActiveTab("/"); // Default to the root (home page)
        }
    }, [location.pathname]);

    // Handle language selection
    const handleLanguageChange = (lang: string) => {
        setLanguage(lang); // Update the language through the context
        setAnchorEl(null); // Close the language menu
    };

    // Handle tab change (when user switches manually between tabs)
    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue);
    };

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null); // Track anchor for language menu

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                {/* Logo and Title */}
                <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                    <Link
                        to="/"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Logo src={assets.logo} alt="Logo" />
                        <Title>{t("header.title")}</Title>
                    </Link>
                </Box>

                {/* Merchandise and Calendar Buttons */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: { xs: "none", sm: "flex" }, marginRight: 2 }}>
                        <Button color="inherit" href="/merch">
                            {t("pages.merch.title")}
                        </Button>
                        <Button color="inherit" href="/calendar">
                            {t("pages.calendar.title")}
                        </Button>
                    </Box>

                    {/* Language Selector */}
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="translate"
                            sx={{ marginRight: 1 }}
                            onClick={(event) => setAnchorEl(event.currentTarget)} // Open the language menu
                        >
                            <TranslateIcon />
                        </IconButton>

                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)} // Menu is open when anchorEl is set
                            onClose={() => setAnchorEl(null)} // Close the menu by clearing anchorEl
                            anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                            transformOrigin={{ vertical: "top", horizontal: "left" }}
                        >
                            {/* Dynamic Language Options */}
                            <MenuItem onClick={() => handleLanguageChange("en")}>
                                {t("header.english")}
                            </MenuItem>
                            <MenuItem onClick={() => handleLanguageChange("hu")}>
                                {t("header.hungarian")}
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>
            </Toolbar>

            {/* Navigation Tabs: Dynamically Rendered Based on routesConfig */}
            <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
                <Tabs
                    value={activeTab} // Active tab is determined by the base path
                    onChange={handleTabChange}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="inherit"
                    indicatorColor="secondary"
                >
                    {routesConfig.map((category) => (
                        <Tab
                            key={category.path}
                            label={category.name} // Dynamically render category name
                            value={category.path} // Base path (e.g., "/killteam")
                            component={Link}
                            to={`${category.path}/intro`} // Default subpage route (e.g., "/killteam/intro")
                        />
                    ))}
                </Tabs>
            </Box>
        </AppBar>
    );
};

export default Header;