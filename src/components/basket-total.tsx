import React from "react";
import { useAppSelector } from "../app/hooks";
import CouponEntry from "./coupon";

const BasketTotal = () => {
    const items = useAppSelector((state) => state.basket.items);
    const basketItems = useAppSelector((state) => state.basket.items)
    const shopItems = useAppSelector((state) => state.shopItems.items)
    const activeCoupon = useAppSelector((state) => state.coupon.coupons[state.coupon.activeCoupon])

    const getTotal = () => {
        let totalPennies = Object.keys(basketItems).reduce((prev, curr) => {
            const value = shopItems[curr].value;
            const quantity = basketItems[curr];
            return prev + (quantity * value);
        }, 0)

        if(activeCoupon != null) {
            totalPennies *= activeCoupon
        }

        return (totalPennies / 100).toLocaleString('en-US', {
            style: 'currency',
            currency: 'GBP'
        })
    }

    return (
        <div style={
            {
                position: 'fixed',
                bottom: '0',
                padding: '10px',
                borderRadius: '8px',
                boxShadow: '#ccc -3px -3px 6px 0px',
                width: '48%'
            }
        }>
            <h3>Total: {getTotal()}</h3>
            <CouponEntry />
        </div>
    )
}

export default BasketTotal;