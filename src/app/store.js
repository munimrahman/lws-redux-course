import { configureStore } from "@reduxjs/toolkit";
import blogsReducer from "../features/blogs/blogsSlice";
import blogReducer from "../features/blog/blogSlice";
import relatedBlogsReducer from "../features/relatedBlogs/relatedBlogsSlice";
import filterBlogReducer from "../features/filterBlog/filterBlogSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    filterBlog: filterBlogReducer,
  },
});
