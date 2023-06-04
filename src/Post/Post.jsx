import classes from "./Post.module.css";
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
  function ShowMore()
  {
      <div>
      <p>{body}</p>
      <img src={ImageForPost} />
      </div>
  }
  return (
    <>
    {isVisible && (
      <div className={classes.Post}>
      <p> Author : {author} </p>
      {
        <button onClick = {ShowMore()}> Show More </button> 
      }
      <p>{body}</p>
      <img src={ImageForPost} />
      <button className = {classes.button1} onClick={accept}> Accepted </button>
      <button className = {classes.button2} onClick={reject}> Rejected </button>
      </div>
      )
    }
    </>
  );
}
