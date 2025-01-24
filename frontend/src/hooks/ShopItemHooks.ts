import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {ShopItem} from "../pages/MerchPage.tsx";

// Fetch function to get shop items
const API_URL = "https://cors-anywhere.herokuapp.com/https://ko-fi.com/shop/A0A4191LBG/items/0/12";

// Fetch data with axios
const fetchShopItems = async () => {
    const { data } = await axios.get(API_URL);
    return data;
};

// React Query hook
export const useShopItems = () => {
    return useQuery<ShopItem[], Error>({ queryKey: ["shopItems"], queryFn: fetchShopItems });
};