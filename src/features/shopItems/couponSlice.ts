import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface couponState {
  coupons: Record<string, number>;
  activeCoupon?: string;
  error?: string;
}

const initialState: couponState = {
  coupons: {
    'fire-sale': 0.7,
    'manager': 0.5,
    'everything-must-go': 0.1,
  },
  error: null,
  activeCoupon: null,
};

export const couponState = createSlice({
  name: 'coupon',
  initialState,
  reducers: {
    applyCoupon: (state, action: PayloadAction<string>) => {
      console.log('Applying coupon', action)
      if(state.coupons[action.payload]) {
        state.activeCoupon = action.payload
        state.error = null;
        return
      }

      state.error = 'Invalid coupon';
    },
    removeCoupon: (state) => {
      state.activeCoupon = null;
    },
  },
});

export const {applyCoupon, removeCoupon} = couponState.actions

export default couponState.reducer;
