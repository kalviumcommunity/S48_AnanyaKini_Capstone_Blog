const { Router } = require("express");
const router = Router();

const {registerUser,loginUser,getAuthors,getUser,changeAvatar,editUser} = require("../controllers/userControllers")

router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/:id", getUser)
router.post("/change-avatar", changeAvatar)
router.post("/edit-user", editUser)
router.post("/", getAuthors)


module.exports = router;
