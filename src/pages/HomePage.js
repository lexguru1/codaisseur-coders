import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/feed/actions";
import { selectFeedPosts } from "../store/feed/selectors";

export default function Homepage() {
  const dispatch = useDispatch();

  const posts = useSelector(selectFeedPosts);

  useEffect(() => {
    dispatch(fetchPosts);
  }, [dispatch]);
  return (
    <div>
      <h2>Posts Feed</h2>
      {
        !posts ? "Loading" : posts.map((post) => <p>{post.title}</p>) //you can expand this
      }
      <button onClick={() => dispatch(fetchPosts)}>Load more</button>
    </div>
  );
}
