import React, { useState,useEffect } from "react";
import PostItem from "../PostItem";
import "../../css/AuthorPost.css";
import Header from "../Header";
import Footer from "../Footer";
import "../../css/AuthorPost.css";
import { useParams } from "react-router-dom";
import axios from 'axios'


const CategoryPosts = () => {
  const [posts, setPosts] = useState([]);
  const {category} = useParams()

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`https://s48-ananyakini-capstone-blog.onrender.com/api/posts/categories/${category}`);
        setPosts(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPosts();
  }, [category]);


  return (
    <>
      <div className="navbar">
        <Header />
      </div>
      <div className="Category-bg">
      {posts.length > 0 ? (
        <>
          <section className="category-posts">
            <div className="category_posts-container">
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
      </div>
      <Footer />
    </>
  );
};

export default CategoryPosts;
