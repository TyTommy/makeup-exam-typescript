import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../types";

export interface MainState {
  currentProduct: Product | null;
}

const initialState: MainState = {
  currentProduct: null,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { setCurrentProduct } = mainSlice.actions;
export default mainSlice.reducer;
