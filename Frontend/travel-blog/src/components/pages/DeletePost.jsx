import React, { useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import { Link } from "react-router-dom";
import axios from "axios";

const DeletePost = ({ postID: id }) => {
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, [token, navigate]);

  const removePost = async () => {
    try {
      const response = await axios.delete(
        `https://s48-ananyakini-capstone-blog.onrender.com/api/posts/${id}`,
        {
          withCredentials: true,
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.status === 200) {
        if (location.pathname === `/myposts/${currentUser.id}`) {
          navigate(0);
        } else {
          alert("Post has been Deleted");
          navigate("/");
        }
      } else {
        console.log("Error deleting post");
      }
    } catch (error) {
      console.log("Couldn't Delete the post", error);
    }
  };

  return (
    <div>
      <Link className="btn-delete" onClick={() => removePost()}>
        Delete
      </Link>
    </div>
  );
};

export default DeletePost;
