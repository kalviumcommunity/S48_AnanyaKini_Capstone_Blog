import React, { useContext, useEffect, useState } from "react";
import "../../css/CreatePost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();

  //Redirect to login page if the user hasnt logged in
  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };

  const Post_categories = [
    "Asia",
    "Africa",
    "Europe",
    "Antartica",
    "North America",
    "South America",
    "Australia",
    "Uncategorized",
  ];
  return (
    <div>
      <div className="navbar">
        <Header />
      </div>
      <div className="createPost-bg">
        <section className="create-post">
          <div className="create-post-container">
            <h2>Create Post</h2>
            <p className="error-message">This is an error message</p>
            <form className="form-create-post">
              <input
                type="text"
                placeholder="  Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                autoFocus
              />
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                {Post_categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <ReactQuill
                value={description}
                onChange={handleDescriptionChange}
                modules={{
                  toolbar: [
                    [{ header: [1, 2, 3, 4, 5, 6, false] }],
                    ["bold", "italic", "underline", "strike"],
                    [{ list: "ordered" }, { list: "bullet" }],
                    ["link", "image"],
                    ["clean"],
                  ],
                }}
              />
              <input
                type="file"
                onChange={(e) => setThumbnail(e.target.files[0])}
                accept="png,jpg,jpeg"
              />
              <button type="submit" className="submit">
                Create
              </button>
            </form>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CreatePost;
