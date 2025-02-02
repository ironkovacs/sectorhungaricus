import React from 'react';

const HighlordsLayout: React.FC = () => {
    return (
        <div style={{ padding: "2rem", textAlign: "center" }}>
            <h1>🔥 Welcome, High Lord of Secto Hungaricus! 🔥</h1>
            <p>
                Only the most powerful beings in the Imperium of Mankind can access this page.
                Take charge of all administrative duties.
            </p>
            <nav>
                <ul style={{ listStyle: "none", padding: 0 }}>
                    <li>
                        <a href="/manage-users" style={{ textDecoration: "none", fontSize: "1.2rem" }}>
                            Manage Users
                        </a>
                    </li>
                    <li>
                        <a href="/manage-events" style={{ textDecoration: "none", fontSize: "1.2rem" }}>
                            Manage Events
                        </a>
                    </li>
                    <li>
                        <a href="/manage-news" style={{ textDecoration: "none", fontSize: "1.2rem" }}>
                            Manage News
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default HighlordsLayout;