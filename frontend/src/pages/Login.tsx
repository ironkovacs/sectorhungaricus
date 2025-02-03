import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import BACKEND_SERVER from "../config.ts";


const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setErrorMessage(null); // Reset error message

        try {
            // Call the backend /login API
            const response = await axios.post(`${BACKEND_SERVER}/highlords/login`,
                {username, password,},
                {
                    headers: {'Content-Type': 'application/json'},
                    withCredentials: true, // Enable sending cookies and credentials
                });

            // Save the token to localStorage (or cookies if preferred)
            const {token, isAdmin} = response.data;
            localStorage.setItem("token", token);

            // Redirect based on user role
            if (isAdmin) {
                navigate("/highlords"); // Redirect admin to /highlords
            } else {
                navigate("/"); // Redirect normal users to the homepage or another page
            }
        } catch (error: any) {
            console.error("Login error:", error);
            setErrorMessage(
                error.response?.data?.error || "Failed to log in. Please try again."
            );
        }
    };

    return (
        <div style={{padding: "2rem", maxWidth: "400px", margin: "0 auto", textAlign: "center"}}>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div style={{marginBottom: "1rem"}}>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder="Username"
                        required
                        style={{width: "100%", padding: "0.5rem", fontSize: "1rem"}}
                    />
                </div>
                <div style={{marginBottom: "1rem"}}>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                        style={{width: "100%", padding: "0.5rem", fontSize: "1rem"}}
                    />
                </div>
                {errorMessage && (
                    <div style={{color: "red", marginBottom: "1rem"}}>
                        {errorMessage}
                    </div>
                )}
                <button
                    type="submit"
                    style={{
                        padding: "0.75rem 1.5rem",
                        fontSize: "1rem",
                        backgroundColor: "#007bff",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer",
                    }}
                >
                    Log In
                </button>
            </form>
        </div>
    );
};

export default Login;