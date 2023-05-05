import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  gender: "",
  stateus: 0,
};
export const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    createUser: (state, action) => {
      return action.payload;
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetUser: () => {
      return initialState;
    },
  },
});

export const { createUser, modifyUser,resetUser } = userSlice.actions

export default userSlice;
