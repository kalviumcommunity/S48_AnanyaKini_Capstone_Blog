import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import "../../css/signin.css";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const changeInputHandle = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Header />
      <section className="login">
        <div className="login-container">
          <h2>Sign In</h2>
          <form className="form login_form">
            <p className="form_error-message">This is an error message</p>

            <input
              type="text"
              placeholder="Email"
              name="email"
              value={userData.email}
              onChange={changeInputHandle}
            />
            <input
              type="text"
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
            Dont have an account ? <Link to="/register">Register</Link>
          </small>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Login;
