import { configureStore } from "@reduxjs/toolkit";
import { gameReducer } from "feature/gameSlice";
import { newsReducer } from "feature/newsSlice";
import { userReducer } from "feature/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    game: gameReducer,
    news: newsReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
});
