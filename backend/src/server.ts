import { sequelize, testConnection } from './sequelize';
import https from 'https';
import fs from 'fs';
import app from './app';

const sslOptions = {
    key: fs.readFileSync('path/to/your/private.key'), // Replace with your private key path
    cert: fs.readFileSync('path/to/your/certificate.crt'), // Replace with your certificate path
};

const PORT = process.env.PORT || 26117;

// Test database connection and sync models
(async () => {
    try {
        await testConnection(); // Test connection
        await sequelize.sync({ alter: true }); // Sync all models (use `force: true` in development)
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Failed to sync the database:', error);
        process.exit(1); // Exit the process if the DB fails to connect
    }

    // Start the server
    app.listen(PORT, () => {
        console.log(`Server is running at http://s1.hostingplace.hu:${PORT}`);
    });
})();