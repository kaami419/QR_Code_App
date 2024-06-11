const QRCode = require("../models/QRCode");

exports.createQRCode = async (req, res) => {
  try {
    console.log("1 am here");
    const qrCode = new QRCode({ text: req.body.text });
    console.log("qr code is", qrCode);
    await qrCode.save();
    res.status(201).send({ qrCodeData: qrCode.text });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getQRCode = async (req, res) => {
  try {
    const qrCode = await QRCode.findById(req.params.id);
    if (!qrCode) {
      return res.status(404).send({ message: "QR Code not found" });
    }
    res.status(200).send(qrCode);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
