
import React from "react";
import ShopItems from "../components/ShopItems.tsx";

export interface ShopItem {
    Alias: string;
    Name: string;
    Price: number;
    ThumbnailUrls: string[];
    IsSoldOut: boolean;
    Description: string;
    IsPayWhatYouWant: boolean;
    RequiresShipping: boolean;
    ExclusiveToSubscribers: boolean;
    IsMemberOnly: boolean;
    ExemptFromSalesTax: boolean;
    PercentageDiscount: number;
    ShopCategoryIds: number[];
    LimitItemsEnabled: boolean;
    ItemsAvailable: number | null;
    OrderCount: number;
    ScheduledToPublishAt: string | null;
    IsScheduled: boolean;
    ScheduledDateUI: string;
    ScheduledTimeUI: string;
}




const MerchPage: React.FC = () => {


    return (
        <ShopItems></ShopItems>
    );
};

export default MerchPage;