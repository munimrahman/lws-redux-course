const { createSlice } = require("@reduxjs/toolkit");
const fetchPosts = require("./thunk/fetchPostThunk");
const fetchRelatedPosts = require("./thunk/fetchRelatefPostThunk");

const initialState = {
  loading: false,
  posts: [],
  relatedPosts: [],
  error: "",
  hello: false,
};

const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    test: (state, action) => {
      state.hello = true;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.loading = false;
      state.posts = [];
      state.error = action.error?.message;
    });

    builder.addCase(fetchRelatedPosts.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchRelatedPosts.fulfilled, (state, action) => {
      const relatedPosts = action.payload.sort(
        (a, b) =>
          parseFloat(b.views.replace("k", "")) -
          parseFloat(a.views.replace("k", ""))
      );
      console.log(relatedPosts);
      state.loading = false;
      state.relatedPosts = relatedPosts;
    });
    builder.addCase(fetchRelatedPosts.rejected, (state, action) => {
      state.loading = false;
      state.relatedPosts = [];
      state.error = action.error?.message;
    });
  },
});

module.exports = postSlice.reducer;
module.exports.postActions = postSlice.actions;
