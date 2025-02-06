import React, {useEffect, useState} from "react";

import {Link, useLocation} from "react-router-dom";
import routesConfig from "../routesConfig";
import {Box, Tab, Tabs as MuiTabs} from "@mui/material"; // Import routesConfig to dynamically render tabs


const SHTabs: React.FC = () => {
    const location = useLocation();
    const handleTabChange = (_event: React.SyntheticEvent, newValue: string) => {
        setActiveTab(newValue);
    };

    useEffect(() => {
        const basePath = `/${location.pathname.split("/")[1]}`;
        const isValidPath = routesConfig.some((route) => route.path === basePath);

        if (basePath != "/admin" && isValidPath) {
            setActiveTab(basePath); // Match the Tab with the base path
        } else {
            setActiveTab("/killteam"); // No matching tab
        }
    }, [location.pathname]);


    const [activeTab, setActiveTab] = useState<string>("");

    return (
        <Box sx={{
            flexGrow: 1,
            marginLeft: 2,
            }}>
            <MuiTabs
                value={activeTab} // Track active base path
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                textColor="inherit"
                indicatorColor="secondary"
            >
                {routesConfig.map((category) => (
                    <Tab
                        key={category.path}
                        label={category.name}
                        value={category.path}
                        component={Link}
                        to={category.path} // Link directly to the category path (e.g., "/killteam")
                    />)
                )}
            </MuiTabs>
        </Box>
    )
}

export default SHTabs