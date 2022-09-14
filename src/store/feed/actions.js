// src/store/feed/actions.js
import axios from "axios";
import { startLoading, postsFetched } from "./slice";
import { API_URL } from "../../config";

export async function fetchPosts(dispatch, getState) {
  try {
    dispatch(startLoading());
    // going to Redux state and checking the current lenght of posts
    const offset = getState().feed.posts.length;
    console.log(offset);
    const response = await axios.get(
      `${API_URL}/posts?offset=${offset}&limit=2`
    );

    // console.log("response", response);
    const posts = response.data.rows;
    dispatch(postsFetched(posts));
  } catch (e) {
    console.log(e.message);
  }
}
