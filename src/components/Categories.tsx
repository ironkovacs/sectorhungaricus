import CategoryCard from "../components/CategoryCard";import assets from "../services/assetsLoader";
import {Box, Container} from "@mui/material";

import CategoryCard from "./CategoryCard.tsx";
import React, { useState, useEffect } from "react";
// Updated categories with nested data


const categories = [
    {
        title: t("categories.40k.killteam.title"),
        description: t("categories.40k.killteam.description"),
        image: assets.images.killTeam
    },
    {
        title: t("categories.aos.spearhead.title"),
        description: t("categories.aos.spearhead.description"),
        image: assets.images.spearhead
    },
    {
        title: t("categories.aos.warcry.title"),
        description: t("categories.aos.warcry.description"),
        image: assets.images.warcry
    },
    {
        title: t("categories.other.trench_crusade.title"),
        description: t("categories.other.trench_crusade.description"),
        image: assets.images.trenchCrusade
    },
    {
        title: t("pc_games.title"),
        description: t("pc_games.description"),
        image: ""
    },
];

const Categories:React.FC = () => {

    return (
        <Container maxWidth = "lg"
    style = {
    {
        marginTop: "20px"
    }
}>
    <Box
        display = "flex"
    justifyContent = "space-between"
    flexWrap = "wrap"
    style = {
    {
        gap: "10px"
    }
}
>
    {/* Render Category Cards */
    }
    {
        categories.map((category, idx) => (
            <CategoryCard
                key = {idx}
        title = {category.title}
        description = {category.description}
        image = {category.image}
        />
    ))
    }
    </Box>
    < /Container>
)
}



export default Categories;