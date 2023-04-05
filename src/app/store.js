import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/api/apiSlice";
import quizSlice from "../features/quiz/quizSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    quiz: quizSlice,
  },
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});
