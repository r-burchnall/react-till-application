import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { applyCoupon } from "../features/shopItems/couponSlice";

const CouponEntry = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector((state) => state.coupon.error)
    const activeCoupon = useAppSelector((state) => state.coupon.coupons[state.coupon.activeCoupon])

    let [couponField, setValue] = useState('');

    const submitOnEnter = (event) => {
        if (event.key === 'Enter') {
            console.log('Attempting to submit via enter')
            submit()
        }
    }

    const handleFieldChange = (event) => {
        setValue(event.target.value);
    }

    const submit = () => {
        console.log('submitting', couponField)
        dispatch(applyCoupon(couponField))
    }

    const ErrorMessage = () => {
        if (error) {
            return <small style={{ color: 'red' }}>{error}</small>
        }
    }

    const CouponMessage = () => {
        if (activeCoupon != null) {
            return (
                <div>
                    Currently applying coupon: {((1 - activeCoupon) * 100).toFixed(2)}% savings
                </div>
            )
        }
    }

    return (
        <div>
            <label>
                Coupon
                <input type={'text'}
                    value={couponField}
                    onChange={handleFieldChange}
                    placeholder={'Enter your coupon here...'}
                    onKeyDown={submitOnEnter}>
                </input>
                {ErrorMessage()}
            </label>
            <Button variant={'contained'} onClick={submit}>Add Coupon</Button>
            {CouponMessage()}
        </div>
    )
}

export default CouponEntry;