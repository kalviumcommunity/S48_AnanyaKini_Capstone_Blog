import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./components/pages/ErrorPage";
import Home from "./components/pages/Home";
import PostDetail from "./components/pages/PostDetail";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import UserProfile from "./components/pages/UserProfile";
import Authors from "./components/pages/Authors";
import CreatePost from "./components/pages/CreatePost";
import EditPost from "./components/pages/EditPost";
import CategoryPosts from "./components/pages/CategoryPosts";
import Dashboard from "./components/pages/Dashboard";
import AuthorPost from "./components/pages/AuthorPost";
import Logout from "./components/pages/Logout";
import DeletePost from "./components/pages/DeletePost";
import UserProvider from "./context/userContext"; // Adjust the path
const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile/:id" element={<UserProfile />} />
        <Route path="/authors" element={<Authors />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/categories/:category" element={<CategoryPosts />} />
        <Route path="/posts/users/:id" element={<AuthorPost />} />
        <Route path="/myposts/:id" element={<Dashboard />} />
        <Route path="/posts/:id/edit" element={<EditPost />} />
        <Route path="/posts/:id/delete" element={<DeletePost />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </UserProvider>
  );
};

export default App;
