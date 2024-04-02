import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import "../../css/Authors.css";
import Avatar1 from "../../images/People/1 (1).jpg";
import Avatar2 from "../../images/People/1 (2).jpg";
import Avatar3 from "../../images/People/1 (3).jpg";
import Avatar4 from "../../images/People/1 (4).jpg";
import Avatar5 from "../../images/People/1 (5).jpg";
import Avatar6 from "../../images/People/1 (6).jpg";
import Avatar7 from "../../images/People/1 (7).jpg";
import Avatar8 from "../../images/People/1 (8).jpg";
import Avatar9 from "../../images/People/1 (9).jpg";

const authorsData = [
  { id: 1, avatar: Avatar1, name: "Angelina Rose", posts: 3 },
  { id: 2, avatar: Avatar2, name: "John Doe", posts: 5 },
  { id: 3, avatar: Avatar3, name: "Alice Smith", posts: 7 },
  { id: 4, avatar: Avatar4, name: "Bob Johnson", posts: 2 },
  { id: 5, avatar: Avatar5, name: "Emma Brown", posts: 4 },
  { id: 6, avatar: Avatar6, name: "Rachel Davis", posts: 6 },
  { id: 7, avatar: Avatar7, name: "Sophia Wilson", posts: 8 },
  { id: 8, avatar: Avatar8, name: "David Lee", posts: 1 },
  { id: 9, avatar: Avatar9, name: "Jackson Kale", posts: 9 },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <div>
      <div className="navbar">
      <Header />
      </div>
      <section className="authors">
        {authors.length > 0 ? (
          <div className="authors_container">
            {authors.map(({ id, avatar, name, posts }) => (
              <Link key={id} to={`/posts/users/${id}`} className="author">
                  <div className="author_avatar">
                    <img src={avatar} alt={`Image of ${name}`} />
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
      <Footer />
    </div>
  );
};

export default Authors;
