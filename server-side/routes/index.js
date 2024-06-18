const express = require("express");
const authRoutes = require("./userRoutes"); // Update with your actual file name
const qrRoutes = require("./qrRoutes");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/qrcode", qrRoutes);

module.exports = router;
