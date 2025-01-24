import React, { useEffect, useState } from "react";

interface ShopItem {
    Alias: string;
    Name: string;
    Price: number;
    ThumbnailUrls: string[];
    IsSoldOut: boolean;
    Description: string;
    ShopCategoryIds: number[];
}

const ShopItems: React.FC = () => {
    const [shopItems, setShopItems] = useState<ShopItem[]>([]);
    const [filterCategory] = useState<number | null>(null);

    useEffect(() => {
        // Fetch the local JSON file
        fetch("/data/shopItems.json")
            .then((response) => response.json())
            .then((data) => setShopItems(data))
            .catch((error) => console.error("Error loading shop items:", error));
    }, []);

    // Filtered items based on the category
    const filteredItems = shopItems.filter((item) =>
        filterCategory === null || item.ShopCategoryIds.includes(filterCategory)
    );

    return (
        <div style={{ maxWidth: "1200px", margin: "auto", padding: "20px" }}>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    justifyContent: "center",
                }}
            >
                {filteredItems.map((item) => (
                    <div
                        key={item.Alias}
                        style={{
                            width: "300px",
                            height: "400px",
                            display: "flex",
                            flexDirection: "column",
                            borderRadius: "8px",
                            overflow: "hidden",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                            cursor: "pointer",
                        }}
                        onClick={() => window.open(`https://ko-fi.com/s/${item.Alias}`, "_blank")}
                    >
                        {/* Image */}
                        <div style={{ flex: "1 0 0", position: "relative" }}>
                            <img
                                src={`https://storage.ko-fi.com/cdn/useruploads/post/${item.ThumbnailUrls[0]}`}
                                alt={item.Name}
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                            <div
                                style={{
                                    position: "absolute",
                                    bottom: "10px",
                                    right: "10px",
                                    backgroundColor: "rgba(0,0,0,0.7)",
                                    color: "white",
                                    padding: "5px 10px",
                                    borderRadius: "5px",
                                    fontWeight: "bold",
                                }}
                            >
                                {item.Price > 0 ? `${item.Price.toFixed(2)} €` : "Free"}
                            </div>
                        </div>

                        {/* Card Content */}
                        <div style={{ padding: "10px", flex: "0 0 auto" }}>
                            <h3
                                style={{
                                    fontSize: "18px",
                                    fontWeight: "bold",
                                    margin: "0 0 10px 0",
                                    textOverflow: "ellipsis",
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                }}
                            >
                                {item.Name}
                            </h3>
                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#555",
                                    margin: 0,
                                    display: "-webkit-box",
                                    WebkitLineClamp: 3, // Limits description to 3 lines
                                    WebkitBoxOrient: "vertical",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                }}
                            >
                                {item.Description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopItems;