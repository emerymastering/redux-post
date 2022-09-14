// src/store/postPage/actions.js
import axios from "axios";
import { postFullyFetched, startLoadingPost } from "./slice";
import { API_URL } from "../../config";

export const fetchOnePost = (id) => async (dispatch, getState) => {
  try {
    dispatch(startLoadingPost());

    const [postResponse, commentsResponse] = await Promise.all([
      axios.get(`${API_URL}/posts/${id}`), // => Promise
      axios.get(`${API_URL}/posts/${id}/comments`), // => Promise
    ]);

    dispatch(
      postFullyFetched({
        post: postResponse.data,
        comments: commentsResponse.data,
      })
    );

    console.log("responses", postResponse.data, commentsResponse.data.rows);

    // send them to the slice
  } catch (e) {
    console.log(e.message);
  }
};
// now we need a place in our slice to store this data
// dispatch actions to the store to send the post + comments

// dispatch postFullyFetched with the correct object parameter
