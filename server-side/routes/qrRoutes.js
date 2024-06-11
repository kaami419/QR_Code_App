const express = require("express");
const qrController = require("../controllers/qrController.js");
const router = express.Router();

router.post("/qrcode", qrController.createQRCode);
router.get("/qrcode/:id", qrController.getQRCode);

module.exports = router;
