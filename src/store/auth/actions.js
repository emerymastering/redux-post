import axios from "axios";
import { API_URL } from "../../config";
import { saveToken, saveProfile } from "./slice";

const getProfile = async (dispatch, token) => {
  const meResponse = await axios.get(
    "https://codaisseur-coders-network.herokuapp.com/me",
    { headers: { authorization: `Bearer ${token}` } }
  );

  dispatch(saveProfile(meResponse.data));
};

export const bootstrapLoginThunk = () => async (dispatch, getState) => {
  try {
    const tokenFromStorage = localStorage.getItem("token");
    if (!tokenFromStorage) {
      return;
    }
    dispatch(saveToken(tokenFromStorage));
    getProfile(dispatch, tokenFromStorage);
    // const meResponse = await axios.get(
    //   "https://codaisseur-coders-network.herokuapp.com/me",
    //   { headers: { authorization: `Bearer ${tokenFromStorage}` } }
    // );

    // dispatch(saveProfile(meResponse.data));
  } catch (error) {
    console.log(error);
  }
};
// A thunk creator
export const login =
  (email, password, navigate) => async (dispatch, getState) => {
    try {
      const loginResponse = await axios.post(`${API_URL}/login`, {
        email: email,
        password: password,
      });
      const token = loginResponse.data.jwt;
      localStorage.setItem("token", token);
      dispatch(saveToken(token));
      console.log(token);
      getProfile(dispatch, token);

      // const meResponse = await axios.get(`${API_URL}/me`, {
      //   headers: { Authorization: `Bearer ${token}` },
      // });
      // console.log(meResponse);
      // dispatch(saveProfile(meResponse.data));
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }

    console.log("login request", email, password);
  };
