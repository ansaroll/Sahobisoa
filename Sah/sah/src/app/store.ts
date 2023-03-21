import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import postsReducer from '../features/posts/postReducer'
import commentsReducer from '../features/comments/commentReducer'
import usersReducer from '../features/users/userReducer'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})

const store = configureStore({
    reducer: {
      posts: postsReducer,
      comments: commentsReducer,
      users: usersReducer,
    },
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch