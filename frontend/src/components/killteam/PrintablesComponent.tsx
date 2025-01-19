import React from "react";
import { Container, Typography } from "@mui/material";

const PrintablesComponent: React.FC = () => {
    return (
        <Container>
            <Typography variant="h5" gutterBottom>
                3D Printables
            </Typography>
            <Typography variant="body1">
                This section will feature links, resources, and details about 3D printable miniatures and terrain that can be used in Kill Team games.
            </Typography>
        </Container>
    );
};

export default PrintablesComponent;