const jwt = require("jsonwebtoken");
const { UserModel } = require("../models");
const { logger } = require("../utils/logger");
require("dotenv").config();

const authenticate = async (req, res, next) => {
  // logger().info("tokenHeader", req.headers);
  const tokenHeader =
    req.headers["authorization"] || req.headers["Authorization"];
  const token = tokenHeader && tokenHeader.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .json({ status: 401, error: "Unauthorized: Missing token" });
  }

  try {
    const decoded = jwt.verify(token, "your_secret_key");
    // logger().info("Decoded Token:", decoded);

    const user = await UserModel.findOne({
      _id: decoded.id,
      enable: true,
      deleted: false,
    });

    if (!user) {
      return res
        .status(401)
        .json({ status: 401, error: "Unauthorized: Invalid token" });
    }

    req.user = {
      id: user._id,
      // userName: user.userName,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      role: user.role,
    };
    next();
  } catch (error) {
    logger().error("Error in authentication middleware:", error);
    return res.status(401).json({ error: "Unauthorized: Invalid token" });
  }
};

module.exports = { authenticate };
