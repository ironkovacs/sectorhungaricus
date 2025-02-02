// components/layouts/Footer.tsx

import React from "react";
import { Box, Typography, Link } from "@mui/material";
import { useTranslation } from "react-i18next";
import KofiWidget from "../components/KofiWidget.tsx";
import DiscordInviteButton from "../components/DiscordInviteButton.tsx";


const Footer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box
            sx={{
                backgroundColor: "#f5f5f5",
                padding: "24px",
                textAlign: "center",
                borderTop: "1px solid #ccc",
            }}
        >
            {/* Disclaimer */}
            <Typography variant="body2" color="textSecondary" gutterBottom>
                {t("impress.disclaimer")}
            </Typography>

            {/* Support our community */}
            <Box mt={3} sx={{ textAlign: "center" }}>
                <Typography variant="h6" gutterBottom>
                    Support our community
                </Typography>
                <KofiWidget />
            </Box>

            {/* Join Discord */}
            <Box mt={3}>
                <DiscordInviteButton />
            </Box>

            {/* Impress Page Links */}
            <Box mt={3}>
                <Link href="/impress" underline="hover" color="primary">
                    {t("header.title")} – Impress
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;