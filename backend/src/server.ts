import { sequelize, testConnection } from './sequelize';
import app from './app';

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
        console.log(`Server is running at http://localhost:${PORT}`);
    });
})();