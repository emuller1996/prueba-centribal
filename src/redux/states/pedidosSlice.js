import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const pedidotSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    createPedidos: (state, action) => {
      return action.payload;
    },
  },
});

export const { createPedidos } = pedidotSlice.actions

export default pedidotSlice;