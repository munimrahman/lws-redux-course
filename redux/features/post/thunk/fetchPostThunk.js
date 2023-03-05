const { createAsyncThunk } = require("@reduxjs/toolkit");

const fetchPosts = createAsyncThunk("post/fetchPosts", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const post = await response.json();
  console.log(post);
  return post;
});

module.exports = fetchPosts;
