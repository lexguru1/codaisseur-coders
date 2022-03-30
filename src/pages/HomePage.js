import React, { useState, useEffect } from "react";
import axios from "axios";

export default function HomePage() {
  const [data, setData] = useState({ loading: true, posts: [] });
  const url =
    "https://codaisseur-coders-network.herokuapp.com/posts?offset=2&limit=5";
  const fetchPosts = async () => {
    setData({ ...data, loading: true });
    const response = await axios.get(url);
    const posts = response.data.rows;
    setData({ loading: false, posts: posts });
  };
  console.log(data.posts);
  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {data.loading
        ? "Loading"
        : data.posts.map((post) => {
            return <p>{post.title}</p>;
          })}
    </div>
  );
}
