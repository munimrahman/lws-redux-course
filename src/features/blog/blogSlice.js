import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getBlog, likeBlog, saveBlog } from "./blogAPI";

const initialState = {
  blog: {},
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchBlog = createAsyncThunk("blog/fetchBlog", async (id) => {
  const blog = await getBlog(id);
  return blog;
});

export const likeBlogUpdate = createAsyncThunk(
  "blog/likeBlog",
  async ({ id, likes }) => {
    const save = await likeBlog(id, likes);
    return save;
  }
);

export const saveBlogUpdate = createAsyncThunk(
  "blog/saveBlog",
  async ({ id, isSave }) => {
    const save = await saveBlog(id, isSave);
    return save;
  }
);

const blogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlog.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(fetchBlog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(fetchBlog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = [];
        state.error = action.error?.message;
      });
    builder
      .addCase(likeBlogUpdate.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(likeBlogUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(likeBlogUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error?.message;
      });
    builder
      .addCase(saveBlogUpdate.pending, (state) => {
        state.isError = false;
        state.isLoading = true;
      })
      .addCase(saveBlogUpdate.fulfilled, (state, action) => {
        state.isLoading = false;
        state.blog = action.payload;
      })
      .addCase(saveBlogUpdate.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.blog = {};
        state.error = action.error?.message;
      });
  },
});

export default blogSlice.reducer;
