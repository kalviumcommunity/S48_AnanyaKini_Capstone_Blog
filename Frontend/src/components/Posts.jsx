import React, { useState } from "react";
import PostItem from "./PostItem";
import "../css/Posts.css";
import { blogs_posts } from "../Data";

const Posts = () => {
  const [posts] = useState(blogs_posts);

  return (
    <>
      {posts.length > 0 ? (
        <>
          <div className="pre-text">
            <h5 className="blog-heading-text">Read Our Blogs</h5>
            <p>•••</p>
          </div>
          <section className="posts">
            <div className="post_container">
              {posts.map(({ id, thumbnail, category, title, description, authorId }) => (
                <PostItem
                  key={id}
                  postID={id}
                  thumbnail={thumbnail}
                  category={category}
                  title={title}
                  description={description}
                  authorID={authorId}
                />
              ))}
            </div>
          </section>
        </>
      ) : (
        <h2 className="center">No posts found</h2>
      )}
    </>
  );
};

export default Posts;