import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface BasketState {
  items: Record<string, number>;
}

const initialState: BasketState = {
  items: {},
};

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addToBasket: (state, action: PayloadAction<string>) => {
      state.items[action.payload] = state.items[action.payload] 
      ? state.items[action.payload] + 1 
      : 1;
    },
    removeFromBasket: (state, action: PayloadAction<string>) => {
      const value = state.items[action.payload];
      if(value && value > 0) {
        state.items[action.payload] -= 1;
      }
      
      if(state.items[action.payload] <= 0) {
        delete state.items[action.payload];
      }
    },
  },
});

export const {addToBasket, removeFromBasket} = basketSlice.actions

export default basketSlice.reducer;
