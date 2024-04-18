const Post = require("../models/postModel");
const User = require("../models/userModel");
const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const httpError = require("../models/errorModel");

// ============================================================CREATE A POST
// POST: api/posts
const createPost = async (req, res, next) => {
  try {
    const { title, category, description } = req.body;
    const thumbnail = req.files ? req.files.thumbnail : null;

    // Check if all required fields are provided
    if (!title || !category || !description || !thumbnail) {
      throw new httpError("Fill in all the fields ", 422);
    }

    // Check if thumbnail size is too large
    if (thumbnail.size > 5000000) {
      throw new httpError("Thumbnail too big. File should be less than 5MB", 422);
    }

    // Generate new file name
    const newFileName = `${uuid()}.${thumbnail.name.split('.').pop()}`;

    // Move thumbnail to uploads folder
    thumbnail.mv(path.join(__dirname, '..', '/uploads', newFileName));

    // Create new post in MongoDB
    const newPost = await Post.create({
      title,
      category,
      description,
      thumbnail: newFileName,
    });

    if (!newPost) {
      throw new httpError("Post couldn't be created.", 422);
    }

    // Respond with the newly created post
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};


//============================================================GET ALL POSTS
// POST:api/posts
const getPosts = async (req, res, next) => {
  res.json("Get all posts");
};

// ============================================================GET SINGLE POST
// GET:api/posts/:ID
const getPost = async (req, res, next) => {
  res.json("Get single post");
};

// ============================================================GET POST BY CATEGORY
// GET:api/posts/categories/:cateogory
const getCatPost = async (req, res, next) => {
  res.json("Get post by category");
};

// ============================================================GET AUTHOR POST
// GET:api/posts/users/:id
const getUserPosts = async (req, res, next) => {
  res.json("Get user posts");
};

// ============================================================EDIT POST
// PATCH:api/posts/:id
const editPost = async (req, res, next) => {
  res.json("Edit post");
};
// ============================================================DELETE POST
// DELETE:api/posts/:id
const deletePost = async (req, res, next) => {
  res.json("Delete post");
};

module.exports = {
  createPost,
  getPosts,
  getPost,
  getCatPost,
  getUserPosts,
  editPost,
  deletePost,
};
