import { useQuery } from "react-query";
import { fetchSpreadsheet } from "../services/fetchSpreadsheet";

/**
 * Custom React Query hook for fetching the spreadsheet data.
 */
export const useSpreadsheet = () => {
    return useQuery("spreadsheetData", fetchSpreadsheet, {
        retry: 2, // Retry twice on failure
        staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
        refetchOnMount: false, // Avoid re-fetching on remount
        refetchOnWindowFocus: false, // Disable automatic refetch on focus
    });
};