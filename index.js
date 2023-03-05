const store = require("./redux/app/store");
const fetchPosts = require("./redux/features/post/thunk/fetchPostThunk");

store.subscribe(() => {});

store.dispatch(fetchPosts());
