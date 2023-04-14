// Import the `createSlice` function from the `@reduxjs/toolkit` package
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state for the counter slice
const initialState = {
  count: 0, // It has a single property `count` with an initial value of 0.
};

// Use the `createSlice` function to create a Redux slice called `counterSlice`
export const counterSlice = createSlice({
  name: "counter", // A string that identifies the slice
  initialState, // The initial state object
  reducers: {
    // An object that contains one or more reducer functions
    increment: (state) => {
      // A reducer function that takes the current state as an argument and modifies the state by incrementing the `count` property.
      state.count += 1;
    },
    decrement: (state) => {
      // A reducer function that takes the current state as an argument and modifies the state by decrementing the `count` property.
      state.count -= 1;
    },
    reset: (state) => {
      // A reducer function that takes the current state as an argument and modifies the state by resetting the `count` property.
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      // A reducer function that takes the current state as an argument and modifies the state by incrementing the `count` property.
      state.count += action.payload;
    },
  },
});

// Export the `increment` and `decrement` actions from the slice, so they can be used in other parts of the code
export const { increment, decrement, reset, incrementByAmount } =
  counterSlice.actions;

// Export the slice's reducer function as the default export, which can be used to create the store
export default counterSlice.reducer;
