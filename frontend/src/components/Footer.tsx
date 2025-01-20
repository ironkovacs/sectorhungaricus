import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import DiscordInviteButton from "./DiscordInviteButton.tsx";
import KofiWidget from "./KofiWidget.tsx";


const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "space-between", // Ensure even spacing between sections
                alignItems: "center",
                backgroundColor: "#f5f5f5",
                padding: "16px 24px",
                borderTop: "1px solid #ccc",
            }}
        >
            {/* Left Section: Ko-fi and Discord Buttons */}
            <Box display="flex" alignItems="center" gap={2}>
                <KofiWidget />
                <DiscordInviteButton />
            </Box>

            {/* Right Section: Disclaimer Link */}
            <Box>
                <Link
                    href="/impress-disclaimer"
                    underline="hover"
                    color="primary"
                >
                    <Typography variant="body1">
                        {t("header.title")} – Impress & Disclaimer
                    </Typography>
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;