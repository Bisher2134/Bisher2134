import { useState, useEffect } from "react";

import Post from "/src/Post/Post";
import classes from "/src/Post/PostsList.module.css";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      const response = await fetch("../../data.json");
      const resData = await response.json();
      setPosts(resData.posts);
      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  // function addPostHandler(postData) {
  //   fetch("http://localhost:5173/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  //   setPosts((existingPosts) => [postData, ...existingPosts]);
  // }

  return (
    <>
      {!isFetching && posts.length > 0 && (
        <div className={classes.Posts}>
          {posts.map((post) => (
            <Post
              postID={post.postID}
              author={post.author}
              body={post.body}
              ImageForPost={post.ImageForPost}
            />
          ))}
        </div>
      )}
      {!isFetching && posts.length === 0 && (
        <div style={{ textAlign: "center", color: "red" }}>
          <h2>There are no posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "red" }}>
          <p>Loading posts...</p>
        </div>
      )}
    </>
  );
}

export default PostsList;
