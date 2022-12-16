/* -------------------------------------------------------------------------- */
/*                                 USER SLICE                                 */
/* -------------------------------------------------------------------------- */

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUserInfo: (state, { payload }) => {
      state.userInfo = payload;
    },
  },
  extraReducers: {},
});

export const { handleUserInfo } = userSlice.actions;
export const userReducer = userSlice.reducer;
