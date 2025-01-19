import React from 'react';
import {Card, CardMedia, CardContent, Typography, Button} from '@mui/material';

interface ProductCardProps {
    id: number;
    category: "wearable" | "accessory";
    nameEn: string;
    nameHu: string;
    descriptionEn: string;
    descriptionHu: string;
    detailedDescriptionEn: string;
    detailedDescriptionHu: string;
    price: number;
    image: string;
}

type ProductCardComponentProps = ProductCardProps & {
    language: "en" | "hu"; // Determines which language to display
    koFiLink: string; // Link to the Ko-fi shop for this product
};

const ProductCard: React.FC<ProductCardComponentProps> = (
    {
        nameEn,
        nameHu,
        descriptionEn,
        descriptionHu,
        price,
        image,
        language,
        koFiLink,
    }) => {
    // Dynamic values based on the language
    const name = language === "en" ? nameEn : nameHu;
    const description = language === "en" ? descriptionEn : descriptionHu;

    return (
        <Card sx={{maxWidth: 345, margin: '1rem'}}>
            {/* Product Image */}
            <CardMedia
                component="img"
                height="200"
                image={image}
                alt={name}
            />

            {/* Product Details */}
            <CardContent>
                <Typography variant="h6" component="div" gutterBottom>
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography
                    variant="h6"
                    component="div"
                    color="primary"
                    sx={{marginTop: '0.5rem'}}
                >
                    ${price.toFixed(2)}
                </Typography>
            </CardContent>

            {/* Ko-fi Link */}
            <Button
                variant="contained"
                color="primary"
                fullWidth
                component="a"
                href={koFiLink} // Redirect to Ko-fi link
                target="_blank" // Open the link in a new tab
                rel="noopener noreferrer"
                sx={{padding: '0.75rem'}}
            >
                Buy on Ko-fi
            </Button>
        </Card>
    );
};

export default ProductCard