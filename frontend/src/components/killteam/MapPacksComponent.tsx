import React from "react";
import { Container, Typography } from "@mui/material";

const MapPacksComponent: React.FC = () => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                Map Packs
            </Typography>
            <Typography variant="body1">
                This section will showcase available map packs for Kill Team games, including both official and community-made ones.
            </Typography>
        </Container>
    );
};

export default MapPacksComponent;