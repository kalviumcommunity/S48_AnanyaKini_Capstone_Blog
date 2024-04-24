import React from "react";
import { Link } from "react-router-dom";
import "../css/Footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <ul className="footer_categories">
          <li>
            <Link to="/posts/categories/Africa">Africa</Link>
          </li>
          <li>
            <Link to="/posts/categories/Antarctica">Antarctica</Link>
          </li>
          <li>
            <Link to="/posts/categories/Asia">Asia</Link>
          </li>
          <li>
            <Link to="/posts/categories/Australia">Australia</Link>
          </li>
          <li>
            <Link to="/posts/categories/Europe">Europe</Link>
          </li>
          <li>
            <Link to="/posts/categories/North America">North America</Link>
          </li>
          <li>
            <Link to="/posts/categories/South America">South America</Link>
          </li>
        </ul>

        <div className="footer_copyright">
          <small>All Rights Reserved &copy; Copyright, GlobeTrotters.</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
