import { Button } from "@mui/material";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { applyCoupon, removeCoupon } from "../features/shopItems/couponSlice";

const CouponEntry = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector((state) => state.coupon.error)
    const activeCoupon = useAppSelector((state) => state.coupon.coupons[state.coupon.activeCoupon])

    let [couponField, setCouponField] = useState('');

    const submitOnEnter = (event) => {
        if (event.key === 'Enter') {
            console.log('Attempting to submit via enter')
            submit()
        }
    }

    const handleFieldChange = (event) => {
        setCouponField(event.target.value);
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

    const RemoveCouponAction = () => {
        dispatch(removeCoupon())
        setCouponField('');
    }

    const RemoveCouponButton = () => {
        if (activeCoupon != null) {
            return (
                <Button variant={'contained'} onClick={RemoveCouponAction}>Remove Coupon</Button>
            )
        }
    }

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-between'
        }}>
            <label>
                Coupon: 
                <input 
                    style={{
                        marginLeft: 8
                    }}
                    type={'text'}
                    value={couponField}
                    onChange={handleFieldChange}
                    placeholder={'Enter your coupon here...'}
                    onKeyDown={submitOnEnter}>
                </input>
                {ErrorMessage()}
            </label>
            <Button variant={'contained'} onClick={submit}>Add Coupon</Button>
            {RemoveCouponButton()}
            {CouponMessage()}
        </div>
    )
}

export default CouponEntry;