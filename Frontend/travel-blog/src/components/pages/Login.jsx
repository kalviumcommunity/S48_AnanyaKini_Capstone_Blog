import React, { useState, useContext } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "../../css/signin.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();

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
      <Footer />
    </div>
  );
};

export default Login;
