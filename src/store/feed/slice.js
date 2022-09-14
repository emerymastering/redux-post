// src/store/feed/slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  posts: [],
};

// The Reducer!!
const feedSlice = createSlice({
  name: "feed",
  initialState,
  reducers: {
    startLoading: (state) => {
      state.loading = true;
    },
    postsFetched: (state, action) => {
      // console.log the action to see what data is coming from the thunk
      // console.log("postsFetched action", action);
      state.posts = [...state.posts,...action.payload]; // get our list of posts from the action payload
      state.loading = false;
    },
  },
});

// remember to export the action creators for the new reducer cases
export const { startLoading, postsFetched } = feedSlice.actions;

export default feedSlice.reducer;
