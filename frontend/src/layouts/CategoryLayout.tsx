import React, { ReactNode } from "react";
import {Box, Container, Typography} from "@mui/material";
import SHTabs from "../components/TabsComponent.tsx";

interface CategoryLayoutProps {
    bannerTitle: string;
    bannerImg?: string,
    menuContent: ReactNode;
    children: ReactNode;
}

const CategoryLayout: React.FC<CategoryLayoutProps> = (
    { bannerTitle, bannerImg, menuContent, children }) =>
   (<Container sx={{
       margin: 0,
       padding: 0,
       display: 'flex',
       flexDirection: 'column',
       width: '100vw',
   }}>
        <SHTabs/>
        <Container maxWidth="lg" style={{ marginTop: "20px" }}>
            {/* Banner */}
            <Box
                sx={{
                    width: "100%",
                    height: "200px",
                    backgroundImage: bannerImg ? `url(${bannerImg})` : `url('https://placehold.co/1200x200.png?text=${bannerTitle}')`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    borderRadius: "5px",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Typography variant="h3" style={{ color: "white", textShadow: "2px 2px 5px black" }}>
                    {bannerTitle}
                </Typography>
            </Box>

            {/* PageLayout Structure */}
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}>
                {/* Sidebar Menu */}
                <Box
                    sx={{
                        width: { xs: "100%", sm: "250px" },
                        flexShrink: 0,
                        marginBottom: { xs: "20px", sm: 0 },
                    }}
                >
                    {menuContent}
                </Box>

                {/* Main Content */}
                <Box
                    sx={{
                        flexGrow: 1,
                        padding: "0 16px",
                    }}
                >
                    {children}
                </Box>
            </Box>
        </Container>
    </Container>);


export default CategoryLayout;