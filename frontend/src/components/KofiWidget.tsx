import React, { useState } from "react";
import {Box, Button, Link, Popover, Typography} from "@mui/material";
import assets from "../services/assetsLoader";

const KofiWidget: React.FC = () => {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null); // Use anchor element for Popover

    // Handlers for opening and closing the Popover
    const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget); // Set the clicked button as the anchor
    };
    const handleClose = () => {
        setAnchorEl(null); // Clear anchor to close popover
    };

    const open = Boolean(anchorEl); // Check if Popover is open

    return (
        <Box sx={{ position: "relative" }}>
            {/* Button to open Popover */}
            <Button
                id="kofi"
                variant="contained"
                color="primary"
                onClick={handleOpen} // Open Popover when clicked
                sx={{
                    backgroundColor: "#72a4f2",
                    color: "#ffffff",
                    padding: "8px 16px",
                    borderRadius: "5px",
                    textTransform: "none",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center", // Align icon and text
                    "&:hover": {
                        backgroundColor: "#5b8cd6",
                    },
                    width: "160px",
                    height: "48px",
                }}
                startIcon={
                    <img
                        src={assets.kofi.kofiLogo}
                        alt="Ko-fi Logo"
                        style={{ width: "24px", height: "24px" }}
                    />
                }
            >
                Support Us
            </Button>

            {/* Popover containing Ko-fi iframe */}
            <Popover
                id="kofi-popover"
                open={open}
                anchorEl={anchorEl} // Set the anchor element
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                transformOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <Box
                    sx={{
                        width: 350, // Adjust width
                        maxWidth: 400,
                        height: '100%',
                        backgroundColor: "#fff",
                        p: 2, // Padding inside the popover
                    }}
                >
                    {/* Ko-fi iframe */}
                    <iframe
                        id='kofiframe'
                        src='https://ko-fi.com/sectorhungaricus/?hidefeed=true&widget=true&embed=true&preview=true'
                        style={{
                            border: 'none',
                            width: '100%',
                            padding: '4px',
                            background: '#fff',
                            borderRadius: 0,

                    }}
                        height='570'

                        title='sectorhungaricus'>

                    </iframe>
                    {/* QR Code Section */}
                    <Box textAlign="center" mt={2}>
                        <Typography variant="body2" color="textSecondary" gutterBottom>
                            <Link href="https://ko-fi.com/sectorhungaricus">
                                https://ko-fi.com/sectorhungaricus
                            </Link>
                        </Typography>
                        <img
                            src={assets.kofi.kofiQR}
                            alt="Ko-fi QR Code"
                            style={{maxWidth: "100px", width: "100%"}}
                        />
                    </Box>
                </Box>
            </Popover>
        </Box>
    );
};

export default KofiWidget;