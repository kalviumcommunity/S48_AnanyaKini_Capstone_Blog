import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../images/People/1 (1).jpg";
import "../css/Posts.css";

const PostAuthor = () => {
  return (
    <Link to={`/posts/users/sdsdf`} className="post_author">
      <div className="post_author-avatar">
        <img src={Avatar} alt="" />
      </div>
      <div className="post_author-details">
        <h5>By: Earnest Achiever </h5>
        <p>Just Now</p>
      </div>
    </Link>
  );
};

export default PostAuthor;
