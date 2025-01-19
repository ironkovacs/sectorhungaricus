import React from "react";
import { Container, Typography } from "@mui/material";

const LocalEventsComponent: React.FC = () => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                Local News and Events
            </Typography>
            <Typography variant="body1">
                This section will provide information about upcoming tournaments, local gaming events, and community updates for Kill Team.
            </Typography>
        </Container>
    );
};

export default LocalEventsComponent;