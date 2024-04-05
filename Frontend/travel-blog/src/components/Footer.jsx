import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  const categories = [
    "Africa",
    "Antartica",
    "Asia",
    "Australia",
    "Europe",
    "NorthAmerica",
    "SouthAmerica",
  ];

  return (
    <div>
      <footer>
        <ul className="footer_categories">
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/posts/categories/:${category}`}>{category}</Link>
            </li>
          ))}
        </ul>

        <div className="footer_copyright">
          <small>All Rights Reserved &copy; Copyright, GlobeTrotters. </small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
