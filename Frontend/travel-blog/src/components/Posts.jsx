import React, { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import "../css/Posts.css";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts`);
        setPosts(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, []);

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
              {posts.map((item) => (
                <PostItem
                  key={item._id}
                  postID={item._id}
                  thumbnail={item.thumbnail}
                  category={item.category}
                  title={item.title}
                  description={item.description}
                  authorId={item.creator}
                  createdAt={item.createdAt}
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
