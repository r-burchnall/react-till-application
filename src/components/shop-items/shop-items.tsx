import { Button } from "@mui/material";
import React from "react";
import { useAppSelector } from "../../app/hooks";
import { selectItems } from "../../features/shopItems/shopItemsSlice";
import ShopItem from "../shop-item/shop-item";
import './shop-items.scss';

const ShopItems = () => {
    const items = useAppSelector(selectItems);

    return (
        <div className="shop-items">
            <h3>Shop Items</h3>

            <div className="items">
            {
                Object.keys(items).map(i => {
                    return (
                        <ShopItem item={items[i]} name={i} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default ShopItems;