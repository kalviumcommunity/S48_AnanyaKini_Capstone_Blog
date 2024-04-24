import React, { useContext, useEffect, useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import PostAuthor from "../PostAuthor";
import "../../css/PostDetail.css";
import { Link, useParams } from "react-router-dom";
import DeletePost from "./DeletePost";
import { UserContext } from "../../context/userContext";
import axios from "axios";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const { currentUser } = useContext(UserContext);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/posts/${id}`
        );
        setPost(response.data);
      } catch (error) {
        setError(error);
      }
    };

    getPosts();
  }, []);

  return (
    <>
      <div className="navbar">
        <Header />
      </div>
      <section className="post_detail">
        {error && <p className="error">{error.message}</p>}
        {post && (
          <div className="post-detail_container">
            <div className="post-detail_header">
              <PostAuthor authorId={post.creator} createdAt={post.createdAt}/>
              {currentUser?.id == post?.creator && (
                <div className="post-detail_buttons">
                  <Link to={`/posts/${post?._id}/edit`} className="btn-edit">
                    Edit
                  </Link>
                  <DeletePost postID={id}/>
                </div>
              )}
            </div>
            <h1>{post.title}</h1>
            <div className="post-detail_thumbnail">
              <img
                src={`http://localhost:5000/uploads/${post.thumbnail}`}
                alt=""
              />
            </div>
            <div className="post-detail-paratext">
              <p dangerouslySetInnerHTML={{ __html: post.description }}></p>
            </div>
          </div>
        )}
      </section>
      <Footer />
    </>
  );
};

export default PostDetail;
