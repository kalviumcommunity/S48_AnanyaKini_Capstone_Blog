const { Router } = require("express");
const router = Router();
const {
  registerUser,
  loginUser,
  getAuthors,
  getUser,
  changeAvatar,
  editUser,
} = require("../controllers/userControllers");
router.get("/", (req, res, next) => {
  res.json("This is the user route");
});
module.exports = router;
