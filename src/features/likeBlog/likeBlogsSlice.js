import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { likeBlog } from "../likeBlog/likeBlogAPI";

const initialState = {
  likes: "",
  isLoading: false,
  isError: false,
  error: "",
};

export const likeBlogUpdate = createAsyncThunk(
  "blog/likeBlog",
  async ({ id, likes }) => {
    const save = await likeBlog(id, likes);
    return save;
  }
);

const likeBlogSlice = createSlice({
  name: "likeBlog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(likeBlogUpdate.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(likeBlogUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.save = action.payload;
      })
      .addCase(likeBlogUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.save = "";
        state.error = action.error?.message;
      });
  },
});

export default likeBlogSlice.reducer;
