import React, { useEffect, useState } from "react";
import { Button, Box, Typography } from "@mui/material";
import axios from "axios";
import BACKEND_SERVER from "../config"

interface HighlordInfo {
    username: string;
    isAdmin: boolean;
}

const HighlordRibbon: React.FC = () => {
    const [highlordInfo, setHighlordInfo] = useState<HighlordInfo | null>(null);

    // Fetch highlord session info
    useEffect(() => {
        const fetchHighlordInfo = async () => {
            try {
                const response = await axios.get(
                    `${BACKEND_SERVER}/highlords/session`,
                    { withCredentials: true });
                const { username, isAdmin } = response.data.user;

                if (isAdmin) {
                    setHighlordInfo({ username, isAdmin: isAdmin });
                } else {
                    setHighlordInfo(null);
                }
            } catch (error) {
                console.error("Error fetching highlord session:", error);
                setHighlordInfo(null); // Clear session info if there's an error
            }
        };

        fetchHighlordInfo();
    }, []);

    // Handle logout
    const handleLogout = async () => {
        try {
            await axios.post(`${BACKEND_SERVER}/highlords/logout`,
                {},
                { withCredentials: true });
            setHighlordInfo(null);
            window.location.reload(); // Refresh the page after logout to reset state
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    // Render nothing if the user is not logged in as a highlord
    if (!highlordInfo) {
        return null;
    }

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "darkblue",
                color: "white",
                padding: "0.5em 1em",
                fontSize: "1.2em",
                position: "sticky",
                top: 0,
                zIndex: 9999,
            }}
        >
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                Welcome <strong>{highlordInfo.username}</strong>, Highlord of Sector Hungaricus!
            </Typography>
            <Button
                variant="contained"
                size="small"
                color="secondary"
                onClick={handleLogout}
                sx={{
                    backgroundColor: "red",
                    ":hover": { backgroundColor: "darkred" },
                }}
            >
                Logout
            </Button>
        </Box>
    );
};

export default HighlordRibbon;