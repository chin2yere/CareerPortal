import React from "react";
import "./PostCard.css";
import { FcLikePlaceholder } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { UserContext } from "../../UserContext";
import { useEffect, useState, useContext } from "react";

export default function PostCard({ title, body, likes }) {
  const { userContext } = useContext(UserContext);
  const [liked, setLiked] = useState(() => {
    if (likes[userContext.id] && likes[userContext.id] === true) {
      return true;
    } else {
      return false;
    }
  });
  function toggleLike() {
    setLiked(!liked);
  }
  function likedButton() {
    if (liked) {
      return <FcLike />;
    } else {
      return <FcLikePlaceholder />;
    }
  }
  useEffect(() => {}, []);
  return (
    <div className="post-card">
      <h3>{title}</h3>
      <p>{body}</p>
      <button onClick={toggleLike}>{likedButton()}</button>
    </div>
  );
}
