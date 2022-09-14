// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
// import someFeatureReducer from "./someFeature/reducer";
import feedReducer from "./feed/slice";
import postPageSliceReducer from "./postPage/slice";

const store = configureStore({
  reducer: {
    // something: someFeatureReducer
    feed: feedReducer,
    postPage: postPageSliceReducer
  },
});

export default store;
