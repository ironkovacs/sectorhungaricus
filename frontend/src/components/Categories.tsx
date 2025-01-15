import CategoryCard from "../components/CategoryCard";
import assets from "../services/assetsLoader";
import { Container, Grid} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
// Updated categories with nested data


const Categories: React.FC = () => {
    const {t} = useTranslation();

    const categories = [
        {
            title: t("pages.landing_page.categories.40k.killteam.title"),
            description: t("pages.landing_page.categories.40k.killteam.description"),
            image: assets.images.killTeam,
        },
        {
            title: t("pages.landing_page.categories.aos.spearhead.title"),
            description: t("pages.landing_page.categories.aos.spearhead.description"),
            image: assets.images.spearhead,
        },
        {
            title: t("pages.landing_page.categories.aos.warcry.title"),
            description: t("pages.landing_page.categories.aos.warcry.description"),
            image: assets.images.warcry,
        },
        {
            title: t("pages.landing_page.categories.other.trench_crusade.title"),
            description: t("pages.landing_page.categories.other.trench_crusade.description"),
            image: assets.images.trenchCrusade,
        },
        {
            title: t("pages.landing_page.categories.pc_games.title"),
            description: t("pages.landing_page.categories.pc_games.description"),
            image: "",
        },
    ];

    return (
        <Container maxWidth="lg" style={{ marginTop: "20px" }}>
            {/* Responsive Wrapper for Cards */}
            <Grid
                container
                spacing={3}
                style={{
                    justifyContent: "center",
                }}
            >
                {categories.map((category, idx) => (
                    <Grid
                        item
                        key={idx}
                        xs={12} // Full width on mobile
                        sm={6} // Half width on small devices
                        md={4} // One-third width on medium/desktop
                        lg={3} // One-fourth width on large screens
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <CategoryCard
                            title={category.title}
                            description={category.description}
                            image={category.image}
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
};


export default Categories;