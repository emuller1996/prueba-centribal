import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const productSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    createProducts: (state, action) => {
      return action.payload;
    },
    resetUProducts: () => {
      return initialState;
    },
  },
});

export const { createProducts, resetUProducts } = productSlice.actions

export default productSlice;
