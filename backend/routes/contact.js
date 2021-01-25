const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/send", function (req, res, next) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "dummytechclan@gmail.com",
      pass: "helloworld123",
    },
  });
  console.log(req.body);
  const mailOptions = {
    from: `${req.body.email}`,
    to: "abdullah.shahid@techclan.co",
    subject: `${req.body.name}`,
    text: `${req.body.message}`,
    replyTo: `${req.body.email}`,
  };
  transporter.sendMail(mailOptions, function (err, res) {
    if (err) {
      console.error("there was an error: ", err);
    } else {
      console.log("here is the res: ", res);
    }
  });
  res.send("done");
});

module.exports = router;
