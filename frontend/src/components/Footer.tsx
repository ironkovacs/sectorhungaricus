import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import DiscordIcon from "@mui/icons-material/Forum"; // Placeholder for Discord icon

const Footer: React.FC = () => {
    return (
        <Box
            component="footer"
            sx={{
                bgcolor: "primary.main",
                color: "white",
                py: 3,
                mt: 5,
                textAlign: "center",
            }}
        >
            <Typography variant="body1" gutterBottom>
                Connect with us:
            </Typography>
            <Box>
                <IconButton
                    aria-label="facebook"
                    href="https://facebook.com"
                    target="_blank"
                    color="inherit"
                >
                    <FacebookIcon />
                </IconButton>
                <IconButton
                    aria-label="discord"
                    href="https://discord.com"
                    target="_blank"
                    color="inherit"
                >
                    <DiscordIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;