require("dotenv").config();
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("merhaba dünya");
});
app.listen(process.env.APP_PORT || 5000, () => {
  console.log("This app working successfully");
});
