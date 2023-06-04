import classes from "./Post.module.css";
import postcss from "./post.css";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Post({ postID, author, body, ImageForPost }) {
  const [isVisible, setIsVisible] = useState(true);
  async function accept(event) {
    event.preventDefault();
    try {
      const res = await axios.post("../../send.json", {
        postID,
      });
    } catch (error) {
      console.log(error.response);
    }
    setIsVisible(false);
  }
  async function reject(event) {
    event.preventDefault();
    try {
      const res = await axios.post("../../send.json", {
        postID,
      });
    } catch (error) {
      console.log(error.response);
    }
    setIsVisible(false);
  }
  function ShowMore() {
    <div>
      <p>{body}</p>
      <img src={ImageForPost} />
    </div>;
  }
  return (
    <>
      {isVisible && (
        <div className={classes.Post}>
          <p> Author : {author} </p>
          <p className={classes.pHeight}>{body.substring(0, 150) + "..."}</p>
          <button className={classes.showMore} onClick={ShowMore()}>
            {" "}
            Show More{" "}
          </button>
          <img src={ImageForPost} />
          <div className="d-flex">
            <button className={classes.button1} onClick={accept}>
              {" "}
              Accepted{" "}
            </button>
            <button className={classes.button2} onClick={reject}>
              {" "}
              Rejected{" "}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
