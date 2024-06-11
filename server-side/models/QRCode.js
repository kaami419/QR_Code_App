const mongoose = require("mongoose");

const QRCodeSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

const QRCode = mongoose.model("QRCode", QRCodeSchema);
module.exports = QRCode;
