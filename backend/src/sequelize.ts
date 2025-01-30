import { Sequelize } from 'sequelize';

export const sequelize = new Sequelize(
    's10_sectorhungaricus',
    'u10_jICroN1T00',
    'O.Bze7uAM2nyq7tkmykjK=je', {
    host: 's1.hostingplace.hu',
    port: 3306,
    dialect: 'mysql', // It tells Sequelize which database you're using
    logging: console.log, // Optional: Useful for debugging SQL queries
});

export const testConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};