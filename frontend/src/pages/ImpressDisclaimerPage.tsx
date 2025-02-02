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
                {t("header.title")}
            </Typography>


            {/* Disclaimer Section */}
            <Box mt={4}>
                <Typography variant="body1" paragraph>
                    {t("about.disclaimer")}
                </Typography>
            </Box>
        </Box>
    );
};

export default ImpressDisclaimer;