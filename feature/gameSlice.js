/* -------------------------------------------------------------------------- */
/*                                 GAME SLICE                                 */
/* -------------------------------------------------------------------------- */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  gameCategories: [],
};

export const getGameCategories = createAsyncThunk(
  "game/getGameCategories",

  async (thunkAPI, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://dev-rise.visionnetwork.vn/api/game/category`
      );

      const data = await response.data;

      if (!data.status) {
        return rejectWithValue(data.message);
      }

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {},
  extraReducers: {
    [getGameCategories.fulfilled]: (state, { payload }) => {
      state.gameCategories = payload?.data;
    },
  },
});

export const gameReducer = gameSlice.reducer;
