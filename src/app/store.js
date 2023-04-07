import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import quizSlice from "../features/quiz/quizSlice";
import authSlice from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    quiz: quizSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
