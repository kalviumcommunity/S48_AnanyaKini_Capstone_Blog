import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogs_posts } from "../../Data";
import "../../css/Dashboard.css";
import Header from "../Header";
import Footer from "../Footer";

const Dashboard = () => {
  const [posts, setPosts] = useState(blogs_posts);

  return (
    <>
      <div className="navbar">
        <Header />
      </div>
      <section className="dashboard">
        {posts.length ? (
          <div className="dashboard_container">
            {posts.map((post) => (
              <article key={post.id} className="dashboard_post">
                <div className="dashboard-posts_info">
                  <div className="dashboard_posts-thumbnail">
                    <img src={post.thumbnail} alt="" />
                  </div>
                  <h5>{post.title}</h5>
                </div>
                <div className="dashboard-posts_actions">
                  <Link to={`/posts/${posts.id}`} className="btn-view">
                    View
                  </Link>
                  <Link to={`/posts/${posts.id}/edit`} className="btn-edit">
                    Edit
                  </Link>
                  <Link to={`/posts/${posts.id}/delete`} className="btn-delete">
                    Delete
                  </Link>
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
