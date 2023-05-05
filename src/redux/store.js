import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./states/userSlice";
import { productSlice } from "./states/productSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    products: productSlice.reducer,
  },
});
