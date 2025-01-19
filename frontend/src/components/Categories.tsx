import CategoryCard, {CategoryCardProps} from "../components/CategoryCard";
import assets from "../services/assetsLoader";
import { Container, Grid} from "@mui/material";
import React from "react";
import {useTranslation} from "react-i18next";
const Categories: React.FC = () => {
    const { t } = useTranslation();

    const categories: CategoryCardProps = [
        {
            title: t("pages.landing_page.categories.40k.killteam.title"),
            description: t("pages.landing_page.categories.40k.killteam.description"),
            image: assets.images.killTeam,
            navigationLink: "/killteam", // Path for Kill Team
        },
        {
            title: t("pages.landing_page.categories.aos.spearhead.title"),
            description: t("pages.landing_page.categories.aos.spearhead.description"),
            image: assets.images.spearhead,
            navigationLink: "/spearhead", // Path for Spearhead
        },
        {
            title: t("pages.landing_page.categories.aos.warcry.title"),
            description: t("pages.landing_page.categories.aos.warcry.description"),
            image: assets.images.warcry,
            navigationLink: "/warcry", // Path for Warcry
        },
/*        {
            title: t("pages.landing_page.categories.other.trench_crusade.title"),
            description: t("pages.landing_page.categories.other.trench_crusade.description"),
            image: assets.images.trenchCrusade,
            navigationLink: "//trench-crusade", // Path for Trench Crusade
        },*/
        {
            title: t("pages.landing_page.categories.pc_games.title"),
            description: t("pages.landing_page.categories.pc_games.description"),
            image: "",
            navigationLink: "/pc-games", // Path for PC Games
        },
    ];

    return (
        <Container maxWidth="lg" style={{ marginTop: "20px" }}>
            <Grid
                container
                spacing={3}
                style={{ justifyContent: "center" }}
            >
                {categories.map((category: { title: string; description: string; image: string; navigationLink: string; }, idx: React.Key | null | undefined) => (
                    <Grid
                        item
                        key={idx}
                        xs={12}
                        sm={6}
                        md={4}
                        lg={3}
                        style={{ display: "flex", justifyContent: "center" }}
                    >
                        <CategoryCard
                            title={category.title}
                            description={category.description}
                            image={category.image}
                            navigationLink={category.navigationLink} // Pass the navigation path
                        />
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Categories;