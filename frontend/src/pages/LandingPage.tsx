import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { useTranslation } from "react-i18next";
import Cookies from "js-cookie";
import Categories from "../components/Categories.tsx";
import Footer from "../components/Footer.tsx";

const LandingPage: React.FC = () => {
    return (
        <Categories/>
    );
};

export default LandingPage;