import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";

interface CategoryCardProps {
    title: string;
    description: string;
    image?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image }) => {
    return (
        <Card
            style={{
                width: "100%",
                maxWidth: 450, // Card width for desktop
                minWidth: 250, // Minimum card width
                flexGrow: 1,
            }}
        >
            <Box
                style={{
                    height: 175, // Adjust card image/header height
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    backgroundColor: image ? "transparent" : "#333",
                    position: "relative",
                    textTransform: "uppercase",
                    overflow: "hidden",
                    borderTopLeftRadius: "4px",
                    borderTopRightRadius: "4px",
                }}
            >
                {image ? (
                    <img
                        src={image}
                        alt={title}
                        style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            position: "absolute",
                        }}
                    />
                ) : (
                    <Typography variant="h6" style={{ zIndex: 1, padding: "0 10px", textAlign: "center" }}>
                        {title}
                    </Typography>
                )}
            </Box>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;