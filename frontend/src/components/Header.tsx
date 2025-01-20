import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Select,
    MenuItem,
    Box,
    Button,
    IconButton,
    SelectChangeEvent,
    Tab,
    Tabs,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext"; // Import your custom hook
import { Logo, Title } from "./styled/HeaderStyled";

import assets from "../services/assetsLoader";

const Header: React.FC = () => {
    const { t } = useTranslation();
    const { language, setLanguage } = useLanguage(); // Access language and setLanguage from the LanguageContext
    const location = useLocation();

    // Track the active tab based on the current route
    const [activeTab, setActiveTab] = useState<string>(
        ["/killteam", "/spearhead", "/warcry"].includes(location.pathname) ? location.pathname : "/"
    );

    // Handle language selection
    const handleLanguageChange = (event: SelectChangeEvent<string>) => {
        setLanguage(event.target.value as string); // Update the language through the context
    };

    // Handle tab change
    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue); // Update the active tab
    };

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                {/* Logo and Title */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* Logo */}
                    <Logo src={assets.logo} alt="Logo" />
                    {/* Title */}
                    <Title>
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            {t("header.title")}
                        </Link>
                    </Title>
                </Box>

                {/* Menu and Language Selector */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    {/* Menu Buttons */}
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
                        <IconButton edge="start" color="inherit" aria-label="translate" sx={{ marginRight: 1 }}>
                            <TranslateIcon />
                        </IconButton>
                        <Select
                            value={language}
                            onChange={handleLanguageChange}
                            variant="outlined"
                            style={{ backgroundColor: "white", color: "black", borderRadius: 4 }}
                        >
                            <MenuItem value="en">{t("header.english")}</MenuItem>
                            <MenuItem value="hu">{t("header.hungarian")}</MenuItem>
                        </Select>
                    </Box>
                </Box>
            </Toolbar>

            {/* Navigation Tabs */}
            <Box sx={{ flexGrow: 1, marginLeft: 2 }}>
                <Tabs
                    value={activeTab}
                    onChange={handleTabChange}
                    variant="scrollable" // Makes tabs scrollable if they don't fit
                    scrollButtons="auto" // Automatically shows scroll buttons for overflow
                    textColor="inherit"
                    indicatorColor="secondary"
                >
                    <Tab label="Kill Team" value="/killteam" component={Link} to="/killteam" />
                    <Tab label="Spearhead" value="/spearhead" component={Link} to="/spearhead" />
                    <Tab label="Warcry" value="/warcry" component={Link} to="/warcry" />
                </Tabs>
            </Box>
        </AppBar>
    );
};

export default Header;