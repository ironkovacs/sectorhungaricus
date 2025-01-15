import axios from "axios";

const SHEET_ID = "1YpfapvRQSBpKS_ZibiHHg6mOZM3O9Pn4iT30lNUgH6A";
const API_KEY = "AIzaSyB9C0ZDYuZuLnpPrqUNYlw0U4-MPUTE3S0";
const RANGE = "products";
const requestUri =  `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${RANGE}?key=${API_KEY}`
/**
 * Fetches data from Google Sheets using Google Sheets API.
 * Returns a structured array of objects based on the headers.
 */
export const fetchSpreadsheet = async () => {
    try {
        // Call Google Sheets API
        const response = await axios.get(requestUri);
            console.log({response});
        const rows = response.data.values;

        if (!rows || rows.length < 2) {
            throw new Error("Empty or invalid spreadsheet data.");
        }

        // Map headers to row values and return as array of objects
        const headers = rows[0]; // First row contains headers
        const data = rows.slice(1).map((row) => {
            const entry: any = {};
            headers.forEach((header, index) => {
                entry[header] = row[index] || ""; // Handle missing columns
            });
            return entry;
        });

        return data;
    } catch (error) {
        console.error("Error fetching Google Sheets data:", error);
        throw new Error("Failed to fetch spreadsheet data");
    }
};