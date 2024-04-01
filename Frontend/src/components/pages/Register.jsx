import React, { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import { Link } from "react-router-dom";
import '../../css/signin.css'

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
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
      <section className="register">
        <div className="register-container">
          <h2>Sign Up</h2>
          <form className="form register_form">
            <p className="form_error-message">This is an error message</p>
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
          <small>Already have an account ? <Link to='/login'>Sign In</Link></small>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Register;
