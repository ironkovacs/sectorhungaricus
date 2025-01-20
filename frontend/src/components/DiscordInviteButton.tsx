import React from "react";
import { Button } from "@mui/material";
import { FaDiscord } from "react-icons/fa";

const DiscordInviteButton: React.FC = () => {
    return (
        <Button
            href="https://discord.gg/f9vRVWQn"
            target="_blank"
            rel="noopener noreferrer"
            sx={{
                backgroundColor: "#5865F2",
                color: "#ffffff",
                padding: "8px 16px",
                borderRadius: "5px",
                textTransform: "none",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                "&:hover": {
                    backgroundColor: "#4752c4",
                },
                width: "160px", // Match Ko-fi button width
                height: "48px", // Match Ko-fi button height
            }}
            startIcon={<FaDiscord size={24} />}
        >
            Join Discord
        </Button>
    );
};

export default DiscordInviteButton;