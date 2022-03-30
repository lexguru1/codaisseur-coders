import axios from "axios";

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(posts) {
  return {
    type: "feed/postsFetched",
    payload: posts,
  };
}

const API_URL = `https://codaisseur-coders-network.herokuapp.com`;
export async function fetchPosts(dispatch, getState) {
  dispatch(startLoading());
  const offset = getState().feed.posts.length;
  const response = await axios.get(`${API_URL}/posts?offset=${offset}&limit=5`);
  //console.log("response", response)
  const posts = response.data.rows;
  dispatch(postsFetched(posts));
}
