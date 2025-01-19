
import React from "react";
import {useSpreadsheet} from "../hooks/useSpreadsheet.ts";

import {Typography} from "@mui/material";

interface Product {
    id: string;
    category: string;
    nameEn: string;
    nameHu: string;
    descriptionEn: string;
    descriptionHu: string;
    detailedDescriptionEn: string;
    detailedDescriptionHu: string;
    price: string;
    image: string;
}

const MerchPage: React.FC = () => {
    const { data, isLoading, error } = useSpreadsheet();

    if (isLoading) return <p>Loading merch...</p>;
    if (error) return <p>Failed to load merch: {error instanceof Error ? error.message : "Unknown error"}</p>;

    const products = data as Product[];
    console.log(products);
    return (
<Typography>
    Merch
</Typography>
    );
};

export default MerchPage;