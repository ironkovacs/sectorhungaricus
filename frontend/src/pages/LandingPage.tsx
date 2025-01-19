import React from "react";

import Categories from "../components/Categories.tsx";

import {Box, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const LandingPage: React.FC = () => {
    const { t } = useTranslation();

    return (

        <Box>
            <Typography variant="h4" align="center">
                {t("pages.landing_page.welcome1")}
            </Typography>
            <Typography variant="body1" >
                {t("pages.landing_page.welcome2")}
            </Typography>
            <Categories/>
        </Box>
    );
};

export default LandingPage;