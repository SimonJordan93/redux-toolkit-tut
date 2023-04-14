// Import the `configureStore` function from the `@reduxjs/toolkit` package
import { configureStore } from "@reduxjs/toolkit";

// Import the `counterReducer` from the `counterSlice` file, which is a slice reducer created using `createSlice` function
import counterReducer from "../features/counter/counterSlice";

// Use the `configureStore` function to create a Redux store
export const store = configureStore({
  reducer: {
    // An object that specifies how the store's state is updated based on the actions dispatched to the store
    counter: counterReducer, // Associates the `counter` slice reducer with the `counter` key in the store's state
  },
});
