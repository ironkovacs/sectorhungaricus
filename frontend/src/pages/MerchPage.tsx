
import React from "react";
import {useSpreadsheet} from "../hooks/huseSpreadsheet.ts";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

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

const SHEET_ID = "1YpfapvRQSBpKS_ZibiHHg6mOZM3O9Pn4iT30lNUgH6A"
const API_KEY = "AIzaSyB9C0ZDYuZuLnpPrqUNYlw0U4-MPUTE3S0"
const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/Sheet1?key=${API_KEY}`;
const MerchPage: React.FC = () => {
    const { data, isLoading, error } = useSpreadsheet();

    if (isLoading) return <p>Loading merch...</p>;
    if (error) return <p>Failed to load merch: {error instanceof Error ? error.message : "Unknown error"}</p>;

    const products = data as Product[];
    console.log(products);
    return (
        <div>
            {["category1", "category2"].map((category) => (
                <div key={category}>
                    <h2>{category.toUpperCase()}</h2>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
                        {products
                            .filter((product) => product.category === category)
                            .map((product) => (
                                <div key={product.id} style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px", maxWidth: "200px" }}>
                                    <img
                                        src={product.image || "/placeholder.jpg"}
                                        alt={product.nameEn}
                                        style={{ width: "100%", height: "150px", objectFit: "cover" }}
                                    />
                                    <h3>{product.nameEn}</h3>
                                    <p>{product.descriptionEn}</p>
                                    <p>
                                        <strong>${product.price}</strong>
                                    </p>
                                </div>
                            ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MerchPage;