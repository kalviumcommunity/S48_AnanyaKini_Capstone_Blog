import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Posts.css";
import axios from "axios";

const PostAuthor = ({ authorId, createdAt }) => {
  console.log(authorId);
  const [author, setAuthor] = useState({});
  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/users/${authorId}`
        );
        setAuthor(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAuthor();
  }, []);

  return (
    <Link to={`/posts/users/sdsdf`} className="post_author">
      <div className="post_author-avatar">
        <img src={`http://localhost:5000/uploads/${author.avatar}`} alt="" />{" "}
      </div>
      <div className="post_author-details">
        <h5>By: Earnest Achiever </h5>
        <p>Just Now</p>
      </div>
    </Link>
  );
};

export default PostAuthor;
