// ===================================REGISTER A NEW USER
// POST: api/users/register
const registerUser = (req, res, next) => {
  res.json("Register user");
};

// ===================================LOGIN A REGISTERED USER
// POST: api/users/login
const loginUser = (req, res, next) => {
  res.json("Login user");
};

// ===================================USER PROFILE
// POST: api/users/:id
const getUser = (req, res, next) => {
  res.json("User profile");
};

// ===================================CHANGE YOUR AVATAR OR PROFILE PHOTO
// POST: api/users/change-avatar
const changeAvatar = (req, res, next) => {
  res.json("Change Avatar");
};

// ===================================USER DETAILS (From profile)
// POST: api/users/edit-avatar
const editUser = (req, res, next) => {
  res.json("Edit user details");
};

// ===================================GET AUTHORS
// POST: api/users/authors
const getAuthors = (req, res, next) => {
  res.json("Display all the authors");
};

module.exports = {
  registerUser,
  loginUser,
  getAuthors,
  getUser,
  changeAvatar,
  editUser,
};
