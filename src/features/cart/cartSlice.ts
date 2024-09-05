import { createSlice } from "@reduxjs/toolkit";
import { Product, ProductColor } from "../../types";

interface CartItem extends Product {
  quantity: number;
  color: ProductColor;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        if (existingItem.quantity + item.quantity > 0)
          existingItem.quantity += item.quantity;
      } else {
        state.items.push(item);
      }
    },
    removeItem: (state, action) => {
      console.log({ p: action.payload });
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
