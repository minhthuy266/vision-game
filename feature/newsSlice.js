/* -------------------------------------------------------------------------- */
/*                                 NEWS SLICE                                 */
/* -------------------------------------------------------------------------- */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import * as postConst from "constant/data";

const initialState = {
  newsList: [],
  totalNews: 0,
  allNews: {},
  hotNews: {},
  newGameNews: {},
  eventNews: {},
  promoteNews: {},
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
          limit: postConst.POST_PER_PAGE,
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

export const getAllNews = createAsyncThunk(
  "news/getAllNews",

  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://dev-rise.visionnetwork.vn/api/news/list`,
        {
          order: {
            createdAt: -1,
          },
          page: page,
          limit: postConst.POST_PER_PAGE,
          filter: {
            categories: "tat_ca",
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

export const getHotNews = createAsyncThunk(
  "news/getHotNews",

  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://dev-rise.visionnetwork.vn/api/news/list`,
        {
          order: {
            createdAt: -1,
          },
          page: page,
          limit: postConst.POST_PER_PAGE,
          filter: {
            categories: "tin_nong",
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

export const getNewGameNews = createAsyncThunk(
  "news/getNewGameNews",

  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://dev-rise.visionnetwork.vn/api/news/list`,
        {
          order: {
            createdAt: -1,
          },
          page: page,
          limit: postConst.POST_PER_PAGE,
          filter: {
            categories: "game_moi",
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

export const getEventNews = createAsyncThunk(
  "news/getEventNews",

  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://dev-rise.visionnetwork.vn/api/news/list`,
        {
          order: {
            createdAt: -1,
          },
          page: page,
          limit: postConst.POST_PER_PAGE,
          filter: {
            categories: "su_kien",
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

export const getPromoteNews = createAsyncThunk(
  "news/getPromoteNews",

  async ({ page }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `https://dev-rise.visionnetwork.vn/api/news/list`,
        {
          order: {
            createdAt: -1,
          },
          page: page,
          limit: postConst.POST_PER_PAGE,
          filter: {
            categories: "uu_dai",
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

    handleNewsTab: (state, { payload }) => {
      state.currentPage = payload.currentPage;
      state.category = payload.category;
    },
  },
  extraReducers: {
    [getNews.fulfilled]: (state, { payload }) => {
      state.newsList = payload?.data;
      state.totalNews = payload?.data.meta.pagination.total;
    },

    [getAllNews.fulfilled]: (state, { payload }) => {
      state.allNews = {
        list: payload?.data?.news_details,
        total: payload?.data.meta.pagination.total,
        currentPage: payload?.data.meta.pagination.page,
      };
    },

    [getHotNews.fulfilled]: (state, { payload }) => {
      state.hotNews = {
        list: payload?.data?.news_details,
        total: payload?.data.meta.pagination.total,
        currentPage: payload?.data.meta.pagination.page,
      };
    },

    [getHotNews.fulfilled]: (state, { payload }) => {
      state.newGameNews = {
        list: payload?.data?.news_details,
        total: payload?.data.meta.pagination.total,
        currentPage: payload?.data.meta.pagination.page,
      };
    },

    [getEventNews.fulfilled]: (state, { payload }) => {
      state.eventNews = {
        list: payload?.data?.news_details,
        total: payload?.data.meta.pagination.total,
        currentPage: payload?.data.meta.pagination.page,
      };
    },

    [getPromoteNews.fulfilled]: (state, { payload }) => {
      state.promoteNews = {
        list: payload?.data?.news_details,
        total: payload?.data.meta.pagination.total,
        currentPage: payload?.data.meta.pagination.page,
      };
    },
  },
});

export const { handleReset, handleNewsTab } = newsSlice.actions;
export const newsReducer = newsSlice.reducer;
