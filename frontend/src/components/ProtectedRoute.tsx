import React, { ReactNode, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

interface ProtectedRouteProps {
    children: ReactNode;
    routeUrl: string; // API route to validate access (e.g., "/highlords")
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, routeUrl }) => {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        const validateAccess = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setIsAuthorized(false);
                    return;
                }

                // Validate access using backend
                await axios.get(routeUrl, {
                    headers: { Authorization: `Bearer ${token}` },
                });

                setIsAuthorized(true); // Highlord validated
            } catch (error) {
                if (axios.isAxiosError(error) && error.response?.status === 403) {
                    console.error("Access denied:", error.response.data.error);
                } else {
                    console.error("Authentication error:", error);
                }
                setIsAuthorized(false); // Unauthorized
            }
        };

        validateAccess();
    }, [routeUrl]);

    if (isAuthorized === null) {
        return <div>Loading...</div>; // Add a nicer loading spinner if needed
    }

    return isAuthorized ? <>{children}</> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;