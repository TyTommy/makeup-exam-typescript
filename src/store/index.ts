import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CartState } from "../features/cart/cartSlice";
import mainReducer, { MainState } from "../features/main/mainSlice";

export type RootState = {
  cart: CartState;
  main: MainState;
};

const preloadedState: RootState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState") || "{}")
  : {};

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    main: mainReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export type AppDispatch = typeof store.dispatch;
