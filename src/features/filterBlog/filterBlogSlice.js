import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "all",
  sort: "",
};

const filterBlogSlice = createSlice({
  name: "filterBlog",
  initialState,
  reducers: {
    filterBlog: (state, action) => {
      state.filter = action.payload;
    },

    sortBlog: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export default filterBlogSlice.reducer;
export const { filterBlog, sortBlog } = filterBlogSlice.actions;
