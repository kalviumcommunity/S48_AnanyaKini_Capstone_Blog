const { Router } = require("express");
const {
  createPost,
  getPosts,
  getPost,
  getCatPost,
  getUserPosts,
  editPost,
  deletePost,
} = require("../controllers/postController");
const router = Router();
const authMiddleware = require("../middleware/authMiddleware");

router.post("/", createPost);
router.get("/", getPosts);
router.get("/:id", getPost);
router.get("/categories/:category", getCatPost);
router.get("/users/:id", getUserPosts);
router.patch("/:id", authMiddleware, editPost);
router.delete("/:id", authMiddleware, deletePost);

module.exports = router;
