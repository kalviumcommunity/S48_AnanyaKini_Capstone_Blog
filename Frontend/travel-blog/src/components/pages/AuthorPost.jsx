import React, { useState } from "react";
import { blogs_posts } from "../../Data";
import PostItem from "../PostItem";
import "../../css/AuthorPost.css";
import Header from "../Header";
import Footer from "../Footer";

const AuthorPost = () => {
  const [post] = useState(blogs_posts);

  return (
    <>
    <div className="navbar">
      <Header />
      </div>
      <section className="author_posts">
        {post.length > 0 ? (
          <div className="author_posts-container">
            {" "}
            {post.map(
              ({ id, thumbnail, category, title, description, authorId }) => (
                <PostItem
                  key={id}
                  postID={id}
                  thumbnail={thumbnail}
                  category={category}
                  title={title}
                  description={description}
                  authorID={authorId}
                />
              )
            )}
          </div>
        ) : (
          <h2 className="center">No posts found</h2>
        )}
      </section>
      <Footer />
    </>
  );
};

export default AuthorPost;