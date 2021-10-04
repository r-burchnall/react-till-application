import React from "react";
import { useAppSelector } from "../app/hooks";
import BasketTotal from "./basket-total";

const Basket = () => {
    const items = useAppSelector((state) => state.basket.items);

    return (
        <div>
            <h3>Basket</h3>
            <ul>
                {
                    Object.keys(items).map(i => {
                        const details = items[i];
                        return (
                            <li> {i}, quantity: {details} </li>
                        )
                    })
                }
            </ul>
            <BasketTotal />
        </div>
    )
}

export default Basket;