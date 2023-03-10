import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { saveBlog } from "./saveBlogAPI";

const initialState = {
  save: "",
  isLoading: false,
  isError: false,
  error: "",
};

export const saveBlogUpdate = createAsyncThunk(
  "blog/saveBlog",
  async ({ id, isSaved }) => {
    const save = await saveBlog(id, isSaved);
    return save;
  }
);

const saveBlogSlice = createSlice({
  name: "saveBlog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(saveBlogUpdate.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(saveBlogUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.save = action.payload;
      })
      .addCase(saveBlogUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.save = "";
        state.error = action.error?.message;
      });
  },
});

export default saveBlogSlice.reducer;
