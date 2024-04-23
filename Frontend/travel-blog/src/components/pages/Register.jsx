import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../../css/signin.css";

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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

  const registerUser = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = await axios.post(
        `http://localhost:5000/api/users/register`,
        userData
      );
      console.log(response.data);
      alert(" You have been successfully registered");
      navigate("/login");
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "An error occurred while registering."
      );
    }
  };

  return (
    <div>
      <div className="navbar">
        <Header />
      </div>
      <div className="change-bg">
        <section className="register">
          <div className="register-container">
            <h2>Sign Up</h2>
            <form className="form register_form" onSubmit={registerUser}>
              {error && <p className="form_error-message">{error}</p>}
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                value={userData.name}
                onChange={changeInputHandle}
              />
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
              <input
                type="password"
                placeholder="Confirm Password"
                name="password2"
                value={userData.password2}
                onChange={changeInputHandle}
              />
              <button type="submit" className="btn-register">
                Register
              </button>
            </form>
            <small>
              Already have an account ? <Link to="/login">Sign In</Link>
            </small>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
