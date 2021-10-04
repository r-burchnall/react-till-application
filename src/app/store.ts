import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import shopItemReducer from '../features/shopItems/shopItemsSlice';
import basketReducer from '../features/shopItems/basketSlice';
import couponReducer from '../features/shopItems/couponSlice';

export const store = configureStore({
  reducer: {
    shopItems: shopItemReducer,
    basket: basketReducer,
    coupon: couponReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
