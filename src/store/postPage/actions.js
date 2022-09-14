// src/store/postPage/actions.js
import axios from "axios";

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const fetchOnePost = (id) => async (dispatch, getState) => {
    try {
        const [postResponse, commentsResponse] = await Promise.all([
            axios.get(`${API_URL}/posts/${id}`), // => Promise
            axios.get(`${API_URL}/posts/${id}/comments`), // => Promise
          ]);

          console.log("responses", postResponse.data, commentsResponse.data.rows)

          // send them to the slice
    } catch(e) {
        console.log(e.message)
    }
}
    // now we need a place in our slice to store this data
    // dispatch actions to the store to send the post + comments

    // dispatch postFullyFetched with the correct object parameter
