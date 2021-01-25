const contact = require("./routes/contact");
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
var cors = require("cors");

app.use(cors());
app.use(express.json());
app.use("/api/contact", contact);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
