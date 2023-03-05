const { createSlice } = require("@reduxjs/toolkit");
const fetchPosts = require("./thunk/fetchPostThunk");

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postSlice = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error.message;
    });
  },
});

module.exports = postSlice.reducer;
