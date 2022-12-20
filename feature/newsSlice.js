/* -------------------------------------------------------------------------- */
/*                                 NEWS SLICE                                 */
/* -------------------------------------------------------------------------- */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsList: [],
  totalNews: 0,
};

export const getNews = createAsyncThunk(
  "news/getNews",

  async ({ page, category }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://dev-rise.visionnetwork.vn/api/news/list`,
        {
          order: {
            createdAt: -1,
          },
          page: page,
          limit: 10,
          filter: {
            categories: category,
          },
        }
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

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    handleReset: (state) => {
      state.newsList = [];
    },
  },
  extraReducers: {
    [getNews.fulfilled]: (state, { payload }) => {
      state.newsList = payload?.data;
      state.totalNews = payload?.data.meta.pagination.total;
    },
  },
});

export const { handleReset } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
