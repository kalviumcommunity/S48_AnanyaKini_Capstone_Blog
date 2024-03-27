import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./components/Layout";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Authors from "./pages/Authors";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import CategoryPosts from "./pages/CategoryPosts";
import Dashboard from "./pages/Dashboard";
import AuthorPost from "./pages/AuthorPost";
import Logout from "./pages/Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/users/:id" element={<UserProfile />} />
          <Route path="/authors" element={<Authors />} />
          <Route path="/create" element={<CreatePost />} />
          <Route
            path="/posts/categories/:category"
            element={<CategoryPosts />}
          />
          <Route path="/posts/users/:id" element={<AuthorPost />} />
          <Route path="/myposts/:id" element={<Dashboard />} />
          <Route path="/posts/:id/edit" element={<EditPost />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
