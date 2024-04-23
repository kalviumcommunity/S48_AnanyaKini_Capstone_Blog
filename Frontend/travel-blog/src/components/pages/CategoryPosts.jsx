import React, { useState } from "react";
import { blogs_posts } from "../../Data";
import PostItem from "../PostItem";
import "../../css/AuthorPost.css";
import Header from "../Header";
import Footer from "../Footer";
import "../../css/AuthorPost.css";
const CategoryPosts = () => {
  const [post] = useState(blogs_posts);

  return (
    <>
      <div className="navbar">
        <Header />
      </div>
      <div className="Category-bg">
        <section className="category-posts">
          {post.length > 0 ? (
            <div className="category_posts-container">
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
      </div>
      <Footer />
    </>
  );
};

export default CategoryPosts;
