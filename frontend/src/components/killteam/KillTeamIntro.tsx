import React from "react";
import {Container, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import ReactMarkdown from "react-markdown";

const KillTeamIntro: React.FC = () => {
    const {t} = useTranslation();
    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                {t('pages.categories.killteam.intro.title')}
            </Typography>
            <Typography variant="body1">
                <ReactMarkdown>
                    {t('pages.categories.killteam.intro.description')}
                </ReactMarkdown>
            </Typography>
        </Container>
    );
};

export default KillTeamIntro;