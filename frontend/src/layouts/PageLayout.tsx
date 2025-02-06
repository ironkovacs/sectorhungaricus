import React from "react";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import HighlordRibbon from "../components/HighlordRibbon.tsx";

interface LayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <HighlordRibbon />
            <Header />
            <div style={{ flex: 1, padding: "20px" }}>{children}</div>
            <Footer />
        </div>
    );
};

export default PageLayout;