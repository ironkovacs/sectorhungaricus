import React from "react";
import { AppBar, Toolbar, Typography, Select, MenuItem, Box, Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import TranslateIcon from "@mui/icons-material/Translate";
import { useTranslation } from "react-i18next";

interface HeaderProps {
    language: string;
    setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
    const { t } = useTranslation();

    const handleLanguageChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        const newLanguage = event.target.value as string;
        setLanguage(newLanguage);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <Link to="/" style={{textDecoration: "none", color: "inherit"}}>
                    {t("header.title")}
                    </Link>

                </Typography>

                {/* Menu Buttons */}
                <Box sx={{ display: "flex", marginRight: 2 }}>
                    <Button color="inherit" href="/merch">
                        {t("pages.merch.title")}
                    </Button>
                    <Button color="inherit" href="/calendar">
                        {t("pages.calendar.title")}
                    </Button>
                </Box>

                {/* Language Selector with Translate Icon */}
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
            </Toolbar>
        </AppBar>
    );
};

export default Header;