import React, { createContext, useMemo, useState, useContext, useEffect } from "react";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import Cookies from "js-cookie"; // Import js-cookie library

interface ThemeContextType {
    toggleTheme: () => void;
    mode: "light" | "dark";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProviderCustom: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // Read the theme from cookies or default to "light"
    const storedTheme = Cookies.get("theme") as "light" | "dark" | undefined;
    const [mode, setMode] = useState<"light" | "dark">(storedTheme || "light");

    // Update both state and cookies when the theme is toggled
    const toggleTheme = () => {
        const newMode = mode === "light" ? "dark" : "light";
        setMode(newMode);
        Cookies.set("theme", newMode, { expires: 365 }); // Store in cookies for 1 year
    };

    // Dynamically create the theme based on the mode
    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    );

    // Ensure the mode is set in cookies on mount (in case it's missing)
    useEffect(() => {
        if (!storedTheme) {
            Cookies.set("theme", mode, { expires: 365 });
        }
    }, [storedTheme, mode]);

    return (
        <ThemeContext.Provider value={{ toggleTheme, mode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

// Custom hook for accessing the theme context
export const useThemeContext = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useThemeContext must be used within ThemeProviderCustom");
    }
    return context;
};