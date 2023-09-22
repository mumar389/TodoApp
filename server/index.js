require("dotenv").config();
const express = require("express");
const port = 8725;
const db = require("./config/mongoose");
const app = express();

// app.use(express.static("./assets"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", require("./routes/index"));

app.listen(port, function () {
  console.log(`Server is up and running on port:${port}`);
});
