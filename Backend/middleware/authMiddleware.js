const jwt = require("jsonwebtoken");
const HttpError = require("../models/errorModel");

const authMiddleware = async (req, res, next) => {
  try {
    const authorizationHeader = req.headers.authorization;

    if (!authorizationHeader || !authorizationHeader.startsWith("Bearer ")) {
      return next(new HttpError("Unauthorized. No Token", 401));
    }

    const token = authorizationHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        return next(new HttpError("Unauthorized. Invalid Token", 401));
      }

      req.user = decodedToken;
      next();
    });
  } catch (error) {
    return next(new HttpError("Authentication failed! Invalid token.", 401));
  }
};

module.exports = authMiddleware;
