// src/store/index.js
import { configureStore } from "@reduxjs/toolkit";
// import someFeatureReducer from "./someFeature/reducer";
import feedReducer from "./feed/slice";
import postPageSliceReducer from "./postPage/slice";
import authSliceReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    // something: someFeatureReducer
    feed: feedReducer,
    postPage: postPageSliceReducer,
    auth: authSliceReducer,
  },
});

export default store;
