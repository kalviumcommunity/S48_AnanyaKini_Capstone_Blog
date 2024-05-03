import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../css/Posts.css";
import axios from "axios";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

const PostAuthor = ({ authorId, createdAt }) => {
  const [author, setAuthor] = useState({});
  useEffect(() => {
    const getAuthor = async () => {
      try {
        const response = await axios.get(
          `https://s48-ananyakini-capstone-blog.onrender.com/api/users/${authorId}`
        );
        setAuthor(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAuthor();
  }, []);

  return (
    <Link to={`/posts/users/${authorId}`} className="post_author">
      <div className="post_author-avatar">
        <img src={`https://s48-ananyakini-capstone-blog.onrender.com/uploads/${author.avatar}`} alt="" />{" "}
      </div>
      <div className="post_author-details">
        <h5>By: {author?.name} </h5>
        <p>
          <ReactTimeAgo date={new Date(createdAt)} locale="en-US" />
        </p>
      </div>
    </Link>
  );
};

export default PostAuthor;
