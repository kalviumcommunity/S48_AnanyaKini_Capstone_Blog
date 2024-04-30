import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { blogs_posts } from "../../Data";
import "../../css/Dashboard.css";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import axios from "axios";
import DeletePost from "./DeletePost";

const Dashboard = () => {
  const [posts, setPosts] = useState(blogs_posts);
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/posts/users/${id}`,
          {
            withCredentials: true,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, [id, token]);

  return (
    <>
      <div className="navbar">
        <Header />
      </div>
      <section className="dashboard">
        {posts.length ? (
          <div className="dashboard_container">
            {posts.map((post) => (
              <article key={post._id} className="dashboard_post">
                <div className="dashboard-posts_info">
                  <div className="dashboard_posts-thumbnail">
                    <img
                      src={`http://localhost:5000/uploads/${post.thumbnail}`}
                      alt=""
                    />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard-posts_actions">
                  <Link to={`/posts/${post._id}`} className="btn-view">
                    View
                  </Link>
                  <Link to={`/posts/${post._id}/edit`} className="btn-edit">
                    Edit
                  </Link>
                  <DeletePost postID={post._id} />
                </div>
              </article>
            ))}
          </div>
        ) : (
          <h2 className="center">You have no posts yet</h2>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Dashboard;
