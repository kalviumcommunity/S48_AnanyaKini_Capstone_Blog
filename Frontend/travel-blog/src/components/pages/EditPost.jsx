import React, { useState, useContext, useEffect } from "react";
import "../../css/CreatePost.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Header from "../Header";
import Footer from "../Footer";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import axios from 'axios';

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState('Uncategorized');
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [error,setError] = useState()
  const { currentUser } = useContext(UserContext);
  const token = currentUser?.token;
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/posts/${id}`);
        setTitle(response.data.title);
        setDescription(response.data.description);
        setCategory(response.data.category);
      } catch (error) {
        console.log(error);
      }
    };

    if (!token) {
      navigate("/login");
    } else {
      getPosts();
    }

  }, []); // Added dependencies

  const handleDescriptionChange = (value) => {
    setDescription(value);
  };



  const Post_categories = [
    "Asia",
    "Africa",
    "Europe",
    "Antarctica", 
    "North America",
    "South America",
    "Australia",
    "Uncategorized",
  ];
  
  const editPost = async(e) => {
    e.preventDefault();
    const postData = new FormData();
    postData.append('title', title);
    postData.append('category', category);
    postData.append('description', description);
    postData.append('thumbnail', thumbnail);
  
    try {
      const response = await axios.patch(`http://localhost:5000/api/posts/${id}`, postData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });
  
      if (response.status === 200) {
        navigate('/');
      }
  
    } catch (err) {
      setError(err.response.data.message);
    }
  }


  return (
    <div>
      <div className="navbar">
        <Header />
      </div>
      <section className="create-post">
        <div className="create-post-container">
          <h2>Edit Post</h2>
          {error && <p className="error-message">{error}</p>}
          <form className="form-create-post"onSubmit={editPost} >
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
              Update Post
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EditPost;
