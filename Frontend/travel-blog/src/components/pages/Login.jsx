import React, { useState, useContext, useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/signin.css";
import { UserContext } from "../../context/userContext";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { setCurrentUser } = useContext(UserContext);

  const changeInputHandle = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const loginUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/login`,
        userData
      );
      const user = await response.data;
      setCurrentUser(user);
      alert("Hi " + user.name + ", welcome to GlobeTrotters!");
      navigate("/");
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <div>
      <div className="navbar">
        <Header />
      </div>
      <div className="change-bg">
        <section className="login">
          <div className="login-container">
            <h2>Sign In</h2>
            <form className="form login_form" onSubmit={loginUser}>
              {error && <p className="form_error-message">{error}</p>}

              <input
                type="text"
                placeholder="Email"
                name="email"
                value={userData.email}
                onChange={changeInputHandle}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={userData.password}
                onChange={changeInputHandle}
              />

              <button type="submit" className="btn-login">
                Sign In
              </button>
            </form>
            <small>
              Don't have an account? <Link to="/register">Register</Link>
            </small>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
