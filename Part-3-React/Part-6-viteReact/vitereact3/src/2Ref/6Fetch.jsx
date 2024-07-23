import React from "react";
import { useState, useEffect } from "react";

const getData = async (url) => {
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

function Fetch() {
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [err, setErr] = useState(false);

  const fetchAndUpdateData = async () => {
    setLoading(true);
    try {
      let data = await getData(
        `https://jsonplaceholder.typicode.com/posts?_limit=10`
      );
      setPosts(data);
      setLoading(false);
    } catch (error) {
      setErr(true);
      setLoading(false);
    }
  };

  // Step 2 : Invoke/call useEffect and pass a callback function inside it;
  useEffect(() => {
    // Step 3 : Perform side effects here; basically meaning you can call fetchAndUpdateData here;
    // Step 4 : add an empty dependency array as second argument;
    fetchAndUpdateData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (err) {
    return <h1>Something went wrong.. please refresh</h1>;
  }

  return (
    <>
      <h1>Get posts as soon as the component renders</h1>
      {posts.map((post) => (
        <PostItem key={post.id} id={post.id} title={post.title} />
      ))}
    </>
  );
}

export default Fetch;
