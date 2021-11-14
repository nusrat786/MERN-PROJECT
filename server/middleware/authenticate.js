const jwt = require("jsonwebtoken");
const User = require("../models/users");

const Authenticate = async (req, res, next) => {
  // console.log(req.cookies);
  try {
    const token = req.cookies.jwtoken;
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    console.log(verifyToken);
    const rootUser = await User.findOne({
      _id: verifyToken._id,
      "tokens.token": token,
    });
    if (!rootUser) {
      throw new Error("User not Found");
    }
    req.token = token;
    req.rootUser = rootUser;

    req.userID = rootUser._id;
    next();
  } catch (err) {
    res.status(401).send("Unauthorized:no token provided");
    console.log(err);
  }
};

module.exports = Authenticate;
