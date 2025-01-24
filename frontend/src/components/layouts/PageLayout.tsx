import React from "react";
import Header from "../Header";
import Footer from "../Footer";

interface LayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div style={{ flex: 1, padding: "20px" }}>{children}</div>
            <Footer />
        </div>
    );
};

export default PageLayout;