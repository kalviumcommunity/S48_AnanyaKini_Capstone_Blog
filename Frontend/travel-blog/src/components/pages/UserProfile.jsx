import React, { useState, useContext, useEffect } from "react";
import "../../css/UserProfile.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import { FaEdit, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/userContext";

const UserProfile = () => {
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isAvatarTouched, setIsAvatarTouched] = useState(false);
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const changeAvatarHandler = async () => {
    setIsAvatarTouched(false);
    try {
      const formData = new FormData();
      formData.append("avatar", avatar);
      const response = await axios.post(
        "http://localhost:5000/api/users/change-avatar",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setAvatar(response.data.avatar);
    } catch (error) {
      console.log("Error changing avatar:", error);
    }
  };

  return (
    <div>
      <div className="navbar">
        <Header />
      </div>
      <div className="profile-bg">
        <section className="profile">
          <div className="profile_container">
            <Link to={`/myposts/${currentUser.id}`} className="btn">
              My Posts
            </Link>
            <div className="profile_details">
              <div className="avatar_wrapper">
                <div className="profile_avatar">
                  <img src={`http://localhost:5000/uploads/${avatar}`} alt="" />
                </div>
                <form className="avatar_form">
                  <input
                    type="file"
                    name="avatar"
                    id="avatar"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    accept="image/png, image/jpeg"
                  />
                  <label
                    htmlFor="avatar"
                    onClick={() => setIsAvatarTouched(true)}
                  >
                    <FaEdit />
                  </label>
                  {isAvatarTouched && (
                    <button
                      className="profile_avatar-btn"
                      onClick={changeAvatarHandler}
                    >
                      <FaCheck />
                    </button>
                  )}
                </form>
              </div>
              <h1>{currentUser.name}</h1>
              <form className="profile_form">
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
                  placeholder="Confirm New Password"
                  value={confirmNewPassword}
                  onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <button type="submit" className="btn-submit">
                  Update Details
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default UserProfile;
