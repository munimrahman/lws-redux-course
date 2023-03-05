const { createAsyncThunk } = require("@reduxjs/toolkit");

const fetchRelatedPosts = createAsyncThunk(
  "post/fetchRelatedPosts",
  async (tags, thunkAPI) => {
    const baseUrl = "http://localhost:9000/videos";
    const queryParams = tags.map((tag) => `tags_like=${tag}`).join("&");
    const url = `${baseUrl}?${queryParams}`;

    const response = await fetch(url);
    const posts = await response.json();
    return posts;
  }
);

module.exports = fetchRelatedPosts;
