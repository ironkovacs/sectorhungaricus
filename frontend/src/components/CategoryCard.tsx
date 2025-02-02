import React from "react";
import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { useNavigate } from "react-router-dom";

export interface CategoryCardProps {
    title: string;
    description: string;
    image: string;
    navigationLink: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, description, image, navigationLink }) => {
    const navigate = useNavigate(); // Use the react-router-dom navigation function

    const handleNavigation = () => {
        navigate(navigationLink); // Navigate to the navigationLink path
    };

    return (
        <Card
            onClick={handleNavigation}
            style={{ cursor: "pointer" }}
            sx={{
                maxWidth: 345,
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                    transform: "scale(1.05)", // Optional hover effect
                },
            }}
        >
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={title}
                style={{ objectFit: "cover" }}
            />
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default CategoryCard;