const store = require("./redux/app/store");
const fetchPosts = require("./redux/features/post/thunk/fetchPostThunk");
const { postActions } = require("./redux/features/post/postSlice");

store.subscribe(() => {
  // const latestState = store.getState();
  // console.log(`Latest State: ${JSON.stringify(latestState)}`);
});

store.dispatch(fetchPosts());
