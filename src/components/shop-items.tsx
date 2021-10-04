import { Button } from "@mui/material";
import React from "react";
import { useAppSelector } from "../app/hooks";
import { selectItems } from "../features/shopItems/shopItemsSlice";
import ShopItem from "./shop-item";

const ShopItems = () => {
    const items = useAppSelector(selectItems);

    return (
        <div>
            {
                Object.keys(items).map(i => {
                    return (
                        <ShopItem item={items[i]} name={i} />
                    )
                })
            }
        </div>
    )
}

export default ShopItems;