import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlogs } from "./blogsAPI";

const initialState = {
  blogs: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlogs = createAsyncThunk(
  "blogs/fetchBlogs",
  async ({ sort, filter }) => {
    const blogs = await getBlogs(sort, filter);
    return blogs;
  }
);

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blogs = [];
        state.error = action.error?.message;
      });
  },
});

export default blogsSlice.reducer;
