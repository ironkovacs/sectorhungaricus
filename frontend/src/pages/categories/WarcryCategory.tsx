import React from "react";
import { List, ListItem, ListItemText } from "@mui/material";
import CategoryLayout from "../../components/layouts/CategoryLayout";


const WarcryCategory: React.FC = () => {
    // Menu content (sidebar) items
    const menuContent = (
        <List>
            <ListItem component="button">
                <ListItemText primary="Overview" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Scenarios" />
            </ListItem>
            <ListItem>
                <ListItemText primary="Factions" />
            </ListItem>
        </List>
    );

    return (
        <CategoryLayout bannerTitle="Warcry" menuContent={menuContent}>
            <p>This is a placeholder page for Warcry content.</p>
        </CategoryLayout>
    );
};

export default WarcryCategory;