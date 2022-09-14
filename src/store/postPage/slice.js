import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    post: null,
    comments: [],
};

export const postPageSliceReducer = createSlice({
    name: "post",
    initialState,
    reducers: {
        startLoading: (state) =>{},
        postFullyFetched: (state, action) => {
            
        }
    },
  });
  
  // Action creators are generated for each case reducer function
  // as we add cases to our reducer we will also export the corresponding actions
  export const {startLoading, postFullyFetched} = postPageSliceReducer.actions;
  
  export default postPageSliceReducer.reducer;