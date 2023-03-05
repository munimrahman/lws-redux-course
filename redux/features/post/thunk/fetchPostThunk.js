const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetchRelatedPosts = require("./fetchRelatefPostThunk");

const fetchPosts = createAsyncThunk("post/fetchPosts", async (_, thankAPI) => {
  const response = await fetch("http://localhost:9000/videos");
  const post = await response.json();
  thankAPI.dispatch(fetchRelatedPosts(post.tags));
  return post;
});

module.exports = fetchPosts;
