// pages/ImpressDisclaimer.tsx

import React from "react";
import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const ImpressDisclaimer: React.FC = () => {
    const { t } = useTranslation();

    return (
        <Box p={4}>
            {/* Page Title */}
            <Typography variant="h4" gutterBottom>
                {t("header.title")} – Impress & Disclaimer
            </Typography>

            {/* Impress Section */}
            <Box mt={4}>
                <Typography variant="h5" gutterBottom>
                    Impress
                </Typography>
                <Typography variant="body1" paragraph>
                    {t("impress.about")}
                </Typography>
            </Box>

            {/* Disclaimer Section */}
            <Box mt={4}>
                <Typography variant="h5" gutterBottom>
                    Disclaimer
                </Typography>
                <Typography variant="body1" paragraph>
                    {t("impress.disclaimer")}
                </Typography>
            </Box>
        </Box>
    );
};

export default ImpressDisclaimer;