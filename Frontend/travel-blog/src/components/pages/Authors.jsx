import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import axios
import Header from "../Header";
import Footer from "../Footer";
import "../../css/Authors.css";

const Authors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    const getAuthors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/users");
        setAuthors(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getAuthors();
  }, []);

  return (
    <div>
      <div className="navbar">
        <Header />
      </div>
      <div className="background">
        <section className="authors">
          {authors.length > 0 ? (
            <div className="authors_container">
              {authors.map(({ _id, avatar, name, posts }) => (
                <Link key={_id} to={`/posts/users/${_id}`} className="author">
                  <div className="author_avatar">
                    <img src={`http://localhost:5000/uploads/${avatar}`} alt={`Image of ${name}`} />
                  </div>
                  <div className="author_info">
                    <h3>{name}</h3>
                    <p>{`${posts} posts`}</p>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <h2 className="center">No authors found</h2>
          )}
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Authors;
