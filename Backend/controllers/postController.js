const Post = require("../models/postModel");
const User = require("../models/userModel");
const path = require("path");
const fs = require("fs");
const { v4: uuid } = require("uuid");
const httpError = require("../models/errorModel");
const jsonwebtoken = require("jsonwebtoken");
// ============================================================CREATE A POST
// POST: api/posts

const createPost = async (req, res, next) => {
  try {
    const { title, category, description } = req.body;
    const thumbnail = req.files ? req.files.thumbnail : null;

    if (!title || !category || !description || !thumbnail) {
      throw new httpError("Fill in all the fields ", 422);
    }

    // Check if thumbnail size is too large
    if (thumbnail.size > 5000000) {
      throw new httpError(
        "Thumbnail too big. File should be less than 5MB",
        422
      );
    }

    // Generate new file name
    const newFileName = `${uuid()}.${thumbnail.name.split(".").pop()}`;

    // Move thumbnail to uploads folder
    thumbnail.mv(path.join(__dirname, "..", "/uploads", newFileName));

    // Decode the token to retrieve user ID
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jsonwebtoken.verify(token, process.env.JWT_SECRET);

    // Access user ID from the decoded token
    const creatorId = decodedToken.id;

    // Create new post in MongoDB with user ID
    const newPost = await Post.create({
      title,
      category,
      description,
      thumbnail: newFileName,
      creator: creatorId,
    });

    if (!newPost) {
      throw new httpError("Post couldn't be created.", 422);
    }

    // Increment user's posts count
    await User.findByIdAndUpdate(creatorId, { $inc: { posts: 1 } });

    // Respond with the newly created post
    res.status(201).json(newPost);
  } catch (error) {
    next(error);
  }
};

//============================================================GET ALL POSTS
// POST:api/posts
const getPosts = async (req, res, next) => {
  try {
    const posts = await Post.find().sort({ updatedAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    return next(new httpError(error));
  }
};

// ============================================================GET SINGLE POST
// GET:api/posts/:ID
const getPost = async (req, res, next) => {
  try {
    const postID = req.params.id;
    const post = await Post.findById(postID);
    if (!post) {
      return next(new httpError("Post not found", 404));
    }
    res.status(200).json(post);
  } catch (error) {
    return next(new httpError(error));
  }
};

// ============================================================GET POST BY CATEGORY
// GET:api/posts/categories/:cateogory
const getCatPost = async (req, res, next) => {
  try {
    const { category } = req.params;
    const catPosts = await Post.find({ category }).sort({ createdAt: -1 });
    res.status(200).json(catPosts);
  } catch (error) {
    return next(new httpError(Error));
  }
};

// ============================================================GET AUTHOR POST
// GET:api/posts/users/:id
const getUserPosts = async (req, res, next) => {
  try {
    const {id} = req.params;
    const posts = await Post.find({ creator:id }).sort({ createdAt: -1 });
    res.status(200).json(posts)
  } catch (error) {
    return next (new httpError(error))
  }
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
