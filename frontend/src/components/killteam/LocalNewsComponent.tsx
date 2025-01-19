import React from "react";
import { Container, Typography } from "@mui/material";

const LocalNewsComponent: React.FC = () => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                Local News
            </Typography>
            <Typography variant="body1">
                This section will contain updates and details about the Kill Team community, events, and tournaments.
            </Typography>
        </Container>
    );
};

export default LocalNewsComponent;
