import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import "../css/Posts.css";

const PostItem = ({
  postID,
  category,
  title,
  description,
  thumbnail,
  authorId,
}) => {
  const titleWords = title.split(" ");
  const shortenedTitle =
    titleWords.length > 5 ? titleWords.slice(0, 4).join(" ") + "..." : title;
  const descriptionWords = description.split(" ");
  const shortenedDescription = descriptionWords.slice(0, 19).join(" ");

  return (
    <div>
      <article className="article">
        <div className="post_thumbnail">
          <img src={thumbnail} alt={title} />
        </div>
        <div className="post_content">
          <Link to={`/posts/${postID}`}>
            <h3>{shortenedTitle}</h3>
          </Link>
          <p>{shortenedDescription}...</p>
          <div className="post_footer">
            <PostAuthor authorId={authorId} />
            <Link to={`posts/categories/${category}`} className="blog-category">
              {category}
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
};

export default PostItem;