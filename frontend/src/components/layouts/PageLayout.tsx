import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useLanguage } from "../../contexts/LanguageContext";

interface LayoutProps {
    children: React.ReactNode;
}

const PageLayout: React.FC<LayoutProps> = ({ children }) => {
    const { language, setLanguage } = useLanguage(); // Get language and its setter from context

    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header language={language} setLanguage={setLanguage} /> {/* No need to pass manually */}
            <div style={{ flex: 1, padding: "20px" }}>{children}</div>
            <Footer />
        </div>
    );
};

export default PageLayout;