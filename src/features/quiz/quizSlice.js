/* eslint-disable eqeqeq */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizAns: [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    givenQuizAns: (state, action) => {
      const id = action.payload.id;
      const checkId = state.quizAns.find((a) => a.id == id);
      if (checkId) {
        const index = state.quizAns.findIndex((a) => a.id == id);
        state.quizAns.splice(index, 1);
        state.quizAns.push(action.payload);
      } else {
        state.quizAns.push(action.payload);
      }
    },
  },
});

export default quizSlice.reducer;
export const { givenQuizAns } = quizSlice.actions;
