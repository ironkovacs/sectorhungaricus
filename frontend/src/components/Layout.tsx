import React from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: React.ReactNode; // Content of the page
    language: string; // Pass down language state to header
    setLanguage: (lang: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, language, setLanguage }) => {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header language={language} setLanguage={setLanguage} />
            <div style={{ flex: 1, padding: "20px" }}>{children}</div>
            <Footer />

        </div>
    );
};

export default Layout;