import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/Logo-1.gif";
import "../css/Header.css";
import { UserContext } from "../context/userContext";
import { useContext } from "react";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  const { logout } = useContext(UserContext);
  return (
    <div>
      <nav>
        <div className="container navbar_container">
          <Link to="/" className="nav_logo">
            <img src={Logo} alt="Navbar-Logo" />
          </Link>
          {currentUser?.id && (
            <ul className="nav_menu">
              <li>
                <Link to="/profile/sdfsdf">{currentUser?.name}</Link>
              </li>
              <li>
                <Link to="/create">Create Post</Link>
              </li>
              <li>
                <Link to="/authors">Authors</Link>
              </li>
              <li>
                <Link to="/" onClick={logout}>
                  Logout{" "}
                </Link>
              </li>
            </ul>
          )}

          {!currentUser?.id && (
            <ul className="nav_menu">
              <li>
                <Link to="/authors">Authors</Link>
              </li>
              <li>
                <Link to="/login">Login </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
