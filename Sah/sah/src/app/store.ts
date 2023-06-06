import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postReducer";
import commentsReducer from "../features/comments/commentReducer";
import userReducer from "../features/user/userReducer";

// export default configureStore({
//   reducer: {
//     counter: counterReducer,
//     user: userReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    user: userReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, user: userState}
export type AppDispatch = typeof store.dispatch;
