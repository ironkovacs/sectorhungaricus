import { styled } from "@mui/system"; // Material-UI styled engine
import { Typography } from "@mui/material";

/**
 * Styled component for the Title
 * Applies the Boucherie Block font and hides in mobile view.
 */
export const Title = styled(Typography)(({ theme }) => ({
    fontFamily: "Boucherie Block, sans-serif", // Custom font
    fontSize: "2rem",
    lineHeight: "1",
    color: "inherit",
    textDecoration: "none",
    textTransform: "uppercase",
    [theme.breakpoints.down("sm")]: {
        display: "none", // Hide in mobile view
    },
}));

/**
 * Styled component for the Logo
 * Centers on mobile view.
 */
export const Logo = styled("img")(({ theme }) => ({
    height: "50px",
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
        margin: "auto", // Center logo on mobile
    },
}));