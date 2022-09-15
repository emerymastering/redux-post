import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  profile: null, // the logged-in user
  token: null,
  //   loading: false,
};

export const authSliceReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.token = action.payload;
    },
    saveProfile: (state, action) => {
      state.profile = action.payload;
    },
    logout: () => {
      return initialState;
    },
  },
});

export const { saveProfile, saveToken, logout } = authSliceReducer.actions;

export default authSliceReducer.reducer;
