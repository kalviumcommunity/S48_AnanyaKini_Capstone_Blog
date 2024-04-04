import React, { useState } from "react";
import "../../css/EditPost.css";
import Header from "../Header";
import Footer from "../Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

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
      <section className="edit-post">
        <div className="edit-post-container">
          <h2>Edit Post</h2>
          <p className="error-message">This is an error message</p>
          <form className="form-edit-post">
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
              modules={modules}
              formats={formats}
              value={description}
              onChange={setDescription}
            />
            <input
              type="file"
              onChange={(e) => setThumbnail(e.target.files[0])}
              accept="png,jpg,jpeg"
            />
            <button type="submit" className="submit">
              Update
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default EditPost;
