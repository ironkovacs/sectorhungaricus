import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import CategoryLayout from "../../components/layouts/CategoryLayout";


const SpearheadCategory: React.FC = () => {
    // Menu content (sidebar) items
    const menuContent = (
        <List>
            <ListItem >
                <ListItemText primary="Introduction" />
            </ListItem>
            <ListItem >
                <ListItemText primary="Tactical Guides" />
            </ListItem>
            <ListItem >
                <ListItemText primary="Strategy Resources" />
            </ListItem>
        </List>
    );

    return (
        <CategoryLayout bannerTitle="Spearhead" menuContent={menuContent}>
            <p>This is a placeholder page for Spearhead content.</p>
        </CategoryLayout>
    );
};

export default SpearheadCategory;