import React, { useState} from "react";
import {
    AppBar,
    Toolbar,
    MenuItem,
    Box,
    Button,
    IconButton,
    Menu,
} from "@mui/material";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import {Link} from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../contexts/LanguageContext";
import { Logo, Title } from "./styled/HeaderStyled";
import { useThemeContext } from "../contexts/ThemeContext";

import assets from "../services/assetsLoader";

const Header: React.FC = () => {
        const { t } = useTranslation();
        const { setLanguage } = useLanguage();


    const handleLanguageChange = (lang: string) => {
        console.log(`Changing language to: ${lang}`); // Debugging
        setLanguage(lang); // Update context
        setAnchorEl(null); // Close the language menu
    };
    const { toggleTheme, mode } = useThemeContext();


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

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

                {/* Language Selector */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box sx={{ display: { xs: "none", sm: "flex" }, marginRight: 2 }}>
                        <Button color="inherit" href="/merch">
                            {t("pages.merch.title")}
                        </Button>
                        <Button color="inherit" href="/calendar">
                            {t("pages.calendar.title")}
                        </Button>
                    </Box>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="translate"
                        sx={{ marginRight: 1 }}
                        onClick={(event) => setAnchorEl(event.currentTarget)}
                    >
                        <TranslateIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={() => setAnchorEl(null)}
                        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                        transformOrigin={{ vertical: "top", horizontal: "left" }}
                    >
                        <MenuItem onClick={() => handleLanguageChange("en")}>{t("header.english")}</MenuItem>
                        <MenuItem onClick={() => handleLanguageChange("hu")}>{t("header.hungarian")}</MenuItem>
                    </Menu>
                    {/* Light/Dark Mode Toggle Button */}
                    <IconButton color="inherit" onClick={toggleTheme}>
                        {mode === "light" ? <Brightness4 /> : <Brightness7 />}
                    </IconButton>
                </Box>
            </Toolbar>


        </AppBar>
    );
};

export default Header;