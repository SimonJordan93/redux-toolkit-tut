// Import the `configureStore` function from the `@reduxjs/toolkit` package
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from "../features/users/usersSlice";

// Use the `configureStore` function to create a Redux store
export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
