// routes/qrRoutes.js
const express = require("express");
const qrController = require("../controllers/qrController.js");
const upload = require("../middlewares/multer");
const { authenticate } = require("../middlewares/authMiddleware.js");
const router = express.Router();

router.post(
  "/qrcode",
  authenticate,
  upload.single("file"),
  qrController.createQRCode
);
router.get("/qrcode/:id", authenticate, qrController.getQRCode);
router.get("/user/qr", authenticate, qrController.getUserQR);

module.exports = router;
