import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getRelatedBlogs } from "./relatedBlogsAPI";

const initialState = {
  relatedBlogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchRelatedBlogs = createAsyncThunk(
  "blogs/fetchRelatedBlogs",
  async ({ id, tags }) => {
    const relatedBlogs = await getRelatedBlogs(id, tags);
    return relatedBlogs;
  }
);

const relatedBlogSlice = createSlice({
  name: "relatedBlogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchRelatedBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchRelatedBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.relatedBlogs = action.payload;
      })
      .addCase(fetchRelatedBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.relatedBlogs = [];
        state.error = action.error?.message;
      });
  },
});

export default relatedBlogSlice.reducer;
