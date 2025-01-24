import React, { useState } from "react";
import {
    List,
    ListItemButton,
    ListItemText,
    Collapse,
    ListItemIcon,
} from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useTranslation } from "react-i18next";

export interface MenuConfigItem {
    type: "internal" | "external" | "nested";
    target?: string;
    translationKey: string;
    nestedMenu?: Record<string, MenuConfigItem>;
    isOpen?: boolean; // Only used for nested menus
}

interface ReusableMenuProps {
    menuConfig: Record<string, MenuConfigItem>;
    setActiveSection?: (section: string) => void; // Optional for internal navigation
}

const SideMenu: React.FC<ReusableMenuProps> = ({ menuConfig, setActiveSection }) => {
    const { t } = useTranslation();
    const [state, setState] = useState(() => {
        // Initialize the state for nested menus
        const initialState: Record<string, boolean> = {};
        for (const key in menuConfig) {
            if (menuConfig[key].type === "nested") {
                initialState[key] = menuConfig[key].isOpen || false;
            }
        }
        return initialState;
    });

    // Toggle the open state of nested menus
    const handleToggle = (key: string) => {
        setState((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    // Recursive function to render menu items
    const renderMenuItems = (items: Record<string, MenuConfigItem>) => {
        return Object.keys(items).map((key) => {
            const item = items[key];
            if (item.type === "internal") {
                // Internal navigation item
                return (
                    <ListItemButton
                        key={key}
                        onClick={() => item.target && setActiveSection && setActiveSection(item.target)}
                    >
                        <ListItemText primary={t(item.translationKey)} />
                    </ListItemButton>
                );
            }

            if (item.type === "external") {
                // External link item
                return (
                    <ListItemButton
                        key={key}
                        component="a"
                        href={item.target}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <ListItemText primary={t(item.translationKey)} />
                        <ListItemIcon>
                            <OpenInNewIcon fontSize="small" />
                        </ListItemIcon>
                    </ListItemButton>
                );
            }

            if (item.type === "nested") {
                // Nested menu
                return (
                    <React.Fragment key={key}>
                        <ListItemButton onClick={() => handleToggle(key)}>
                            <ListItemText primary={t(item.translationKey)} />
                            {state[key] ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={state[key]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {renderMenuItems(item.nestedMenu!)}
                            </List>
                        </Collapse>
                    </React.Fragment>
                );
            }

            return null; // Handle unknown types
        });
    };

    return <List>{renderMenuItems(menuConfig)}</List>;
};

export default SideMenu;