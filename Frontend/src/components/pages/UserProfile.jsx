import React, { useState } from "react";
import "../../css/UserProfile.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Avatar from "../../images/People/1 (1).jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(Avatar);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmnewPassword, setConfirmNewPassword] = useState("");
  return (
    <div>
      <div className="navbar">
        <Header />
      </div>
      <section className="profile">
        <div className="profile_container">
          <Link to={`/myposts/sdfsdf`} className="btn">
            My Posts
          </Link>
          <div className="profile_details">
            <div className="avatar_wrapper">
              <div className="profile_avatar">
                <img src={avatar} alt="" />
              </div>
              <form className="avatar_form">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  accept="png,jpg,jpeg"
                />
                <label htmlFor="avatar">
                  <FaEdit />
                </label>
              </form>
              <button className="profile_avatar-btn">
                <FaCheck />
              </button>
            </div>
            <h1>Ernest Achiever</h1>
            <form action="" className="profile_form">
              <p className="error-message">This is an error message</p>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Current Password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm new Password"
                value={confirmnewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />
              <button type="submit" className="btn-submit">
                Update Details
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UserProfile;
