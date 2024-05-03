const User = require("../models/userModel");
const HttpError = require("../models/errorModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const path = require("path");
const { v4: uuid } = require("uuid");

// ===========================================================================REGISTER A NEW USER
// POST: api/users/register
const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, password2 } = req.body;
    if (!name || !email || !password) {
      return next(new HttpError("Fill in all the fields.", 422));
    }
    const newEmail = email.toLowerCase();
    const emailExists = await User.findOne({ email: newEmail });
    if (emailExists) {
      return next(new HttpError("Email already exists.", 422));
    }
    if (password.trim().length < 6) {
      return next(
        new HttpError("Password should be at least 6 characters", 422)
      );
    }
    if (password !== password2) {
      return next(new HttpError("Passwords do not match", 422));
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);
    const newUser = await User.create({
      name,
      email: newEmail,
      password: hashedPass,
    });
    res.status(201).json(`New user ${newUser.email} registered.`);
  } catch (error) {
    return next(new HttpError("User registration failed", 422));
  }
};

// ================================================================================LOGIN A REGISTERED USER
// POST: api/users/login
const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return next(new HttpError("Fill in all the fields.", 422));
    }
    const newEmail = email.toLowerCase();
    const user = await User.findOne({ email: newEmail });
    if (!user) {
      return next(new HttpError("Invalid Email.", 422));
    }

    const comparePass = await bcrypt.compare(password, user.password);
    if (!comparePass) {
      return next(new HttpError("Invalid Password.", 422));
    }
    const { _id: id, name } = user;
    const token = jwt.sign({ id, name }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    res.status(200).json({ token, id, name });
  } catch (error) {
    return next(
      new HttpError("Login failed .Please check your credentials", 422)
    );
  }
};

// ================================================================================USER PROFILE
// GET: api/users/:id
const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id).select("-password");
    if (!user) {
      return next(new HttpError("User not found.", 422));
    }
    res.status(200).json(user);
  } catch (error) {
    return next(new HttpError(error));
  }
};

// ======================================================================CHANGE YOUR AVATAR OR PROFILE PHOTO
// POST: api/users/change-avatar
const changeAvatar = async (req, res, next) => {
  try {
    if (!req.files || !req.files.avatar) {
      return next(new HttpError("Please choose an image.", 422));
    }
    // Find user from database
    const user = await User.findById(req.user.id);
    // Delete old avatar if it exists
    if (user.avatar) {
      const avatarPath = path.join(__dirname, "..", "uploads", user.avatar);
      fs.access(avatarPath, fs.constants.F_OK, async (err) => {
        if (!err) {
          fs.unlink(avatarPath, async (err) => {
            if (err) {
              return next(new HttpError(err));
            }
            // Proceed with uploading new avatar
            uploadNewAvatar(req, res, next, user);
          });
        } else {
          // Proceed with uploading new avatar
          uploadNewAvatar(req, res, next, user);
        }
      });
    } else {
      // No old avatar, directly upload new avatar
      uploadNewAvatar(req, res, next, user);
    }
  } catch (error) {
    return next(new HttpError(error));
  }
};

const uploadNewAvatar = async (req, res, next, user) => {
  const { avatar } = req.files;
  // Check file size
  const maxSizeInBytes = 1024 * 1024 * 5; // 5MB
  if (avatar.size > maxSizeInBytes) {
    return next(
      new HttpError(
        "File size exceeds the limit. Size should be less than 5 MB",
        422
      )
    );
  }

  const fileName = `${uuid()}-${avatar.name}`;
  const splittedFilename = fileName.split(".");
  const newFileName = `${splittedFilename[0]}.${
    splittedFilename[splittedFilename.length - 1]
  }`;

  avatar.mv(
    path.join(__dirname, "..", "uploads", newFileName),
    async (err) => {
      if (err) {
        return next(new HttpError(err));
      }

      try {
        const updatedAvatar = await User.findByIdAndUpdate(
          req.user.id,
          { avatar: newFileName },
          { new: true }
        );
        if (!updatedAvatar) {
          return next(new HttpError("Avatar couldn't be changed.", 422));
        }
        res.status(200).json(updatedAvatar);
      } catch (error) {
        return next(new HttpError(error));
      }
    }
  );
};


// ======================================================================USER DETAILS (From profile)
// POST: api/users/edit-avatar
const editUser = async (req, res, next) => {
  try {
    const { name, email, currentPassword, newPassword, confirmNewPassword } =
      req.body;
    if (!name || !email || !currentPassword || !newPassword) {
      return next(new HttpError("All fields are required.", 422));
    }
    // Get user from database
    const user = await User.findById(req.user.id);
    if (!user) {
      return next(new HttpError("User not found", 404));
    }
    // Make sure new email doesn't already exist
    const emailExists = await User.findOne({ email });
    if (emailExists && emailExists._id.toString() !== req.user.id) {
      return next(
        new HttpError(
          "Email already exists. Please choose a different one.",
          422
        )
      );
    }
    const validateUserPassword = await bcrypt.compare(
      currentPassword,
      user.password
    );
    if (!validateUserPassword) {
      return next(new HttpError("Invalid password", 422));
    }
    //compare new password
    if (newPassword != confirmNewPassword) {
      return next(new HttpError("New passwords do not match", 422));
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(newPassword, salt);

    //update new password
    const newInfo = await User.findOneAndUpdate(
      { _id: req.user.id },
      { name, email, password: hash },
      { new: true }
    );
    res.status(200).json(newInfo);
  } catch (error) {
    return next(
      new HttpError("An error occurred while updating user details.", 422)
    );
  }
};

// ============================================================================GET AUTHORS
// POST: api/users/authors
const getAuthors = async (req, res, next) => {
  try {
    const authors = await User.find().select("-password");
    res.json(authors);
  } catch (error) {
    return next(new HttpError(error));
  }
};

module.exports = {
  registerUser,
  loginUser,
  getAuthors,
  getUser,
  changeAvatar,
  editUser,
};
