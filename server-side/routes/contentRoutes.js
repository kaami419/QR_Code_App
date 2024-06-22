const express = require("express");
const router = express.Router();
const contentController = require("../controllers/contentController");
const upload = require("../middlewares/multer"); 
const { authenticate } = require("../middlewares/authMiddleware");

// router.get("/contents/:qrCodeId", authenticate, contentController.getContents);
router.put("/content", authenticate, contentController.setCurrentContent);

router.post(
  "/content",
  authenticate,
  upload.single("file"),
  contentController.createContent
);

router.get(
  "/content/:qrCodeId",
  authenticate,
  contentController.getContentsByQRCode
);

router.get(
  "/contents/:qrCodeId",
  authenticate,
  contentController.getAllContentsByQRCode
);

// Get the current content associated with a QR code
router.get(
  "/current-content/:qrCodeId",
  authenticate,
  contentController.getCurrentContentByQRCode
);

module.exports = router;
