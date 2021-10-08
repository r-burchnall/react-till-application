import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface ShopItemsState {
  items: Record<string, ShopItem>;
}

export interface ShopItem {
  value: number;
  stock: number;
}

/**
 * Items indexed by name, contains properties for point of sale.
 * value: an int, price in pence.
 * stock: an int, quanitity
 */
const initialState: ShopItemsState = {
  items: {
    'Pork': {
      value: 95,
      stock: 10
    },
    'Chicken': {
      value: 95,
      stock: 10
    },
    'Beef': {
      value: 95,
      stock: 10
    },
    'Sliced Ham': {
      value: 95,
      stock: 10
    },
    'All-Purpose Flour': {
      value: 95,
      stock: 10
    },
    'Breakfast Cereal': {
      value: 95,
      stock: 10
    },
    'Olive Oil': {
      value: 95,
      stock: 10
    },
    'Butter': {
      value: 95,
      stock: 10
    },
    'Milk': {
      value: 95,
      stock: 10
    },
    'Eggs': {
      value: 95,
      stock: 10
    },
    'Cheese': {
      value: 95,
      stock: 10
    },
    'Yoghurt': {
      value: 95,
      stock: 10
    },
    'Onions': {
      value: 95,
      stock: 10
    },
    'Tomato': {
      value: 95,
      stock: 10
    },
    'Garlic': {
      value: 95,
      stock: 10
    },
    'Apples': {
      value: 95,
      stock: 10
    },
    'Pears': {
      value: 95,
      stock: 10
    },
    'Sweetcorn': {
      value: 105,
      stock: 5
    },
    'Honey': {
      value: 75,
      stock: 10
    }
  },
};

export const shopItemsSlice = createSlice({
  name: 'shopItems',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setStock: (state, action: PayloadAction<{item: string, stock: number}>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.items[action.payload.item].stock = action.payload.stock;
    },
  },
});

export const { setStock } = shopItemsSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectItems = (state: RootState) => state.shopItems.items;

export default shopItemsSlice.reducer;
