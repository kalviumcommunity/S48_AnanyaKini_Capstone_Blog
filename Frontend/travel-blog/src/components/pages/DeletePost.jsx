import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const DeletePost = () => {
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();

  //Redirect to login page if the user hasnt logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return <div></div>;
};

export default DeletePost;
