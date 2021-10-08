import { Button } from "@mui/material";
import React from "react";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeFromBasket } from "../features/shopItems/basketSlice";
import BasketTotal from "./basket-total";
import Card from "./card";

const Basket = () => {
    const items = useAppSelector((state) => state.basket.items);
    const dispatch = useAppDispatch();

    const RemoveItem = (name) => {
        dispatch(removeFromBasket(name))
    }

    const BasketItems = () => {
        return Object.keys(items).map(i => {
            const details = items[i];
            return (
                <Card> 
                    {i}, quantity: {details}

                    <Button variant="contained" onClick={() => RemoveItem(i)}> - </Button>
                </Card>
            )
        })
    }

    return (
        <div>
            <h3>Basket</h3>
            <div>
                {BasketItems()}
            </div>
            <BasketTotal />
        </div>
    )
}

export default Basket;
