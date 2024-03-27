import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo.png";
const Header = () => {
  return (
    <div>
      <nav>
        <div className="container navbar_container">
          <Link to="/" className="nav_logo">
            <img src={Logo} alt="Navbar-Logo" />
          </Link>
          <ul className="nav_menu">
            <li><Link to="/profile">Earnest Achiever</Link></li>
            <li><Link to="/create">Create Post</Link></li>
            <li><Link to="/authors">Authors</Link></li>
            <li><Link to="/Logout">Logout </Link></li>
          </ul>
          
        </div>
      </nav>
    </div>
  );
};

export default Header;
