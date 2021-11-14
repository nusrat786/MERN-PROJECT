const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
var cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

dotenv.config({ path: "./config.env" });

const port = process.env.PORT;
//const dbUrl ="mongodb+srv://mernuser:sweethumera@cluster0.hamyx.mongodb.net/mernstack?retryWrites=true&w=majority";

require("./db/conn");

app.use(express.json());
//const User = require("./models/users");
app.use(require("./router/index"));

// app.get("/about", (req, res) => {
//   console.log(`hi this is about us page`);
//   res.send(`this is about us page`);
// });

app.get("/signin", (req, res) => {
  res.send(`This is login page`);
});

app.get("/signup", (req, res) => {
  res.send(`this is sign up page`);
});

// app.get("/contact", (req, res) => {
//   res.send(`This is contact page`);
// });

//const port = 2000;
const server = "localhost";
app.listen(port, () => {
  console.log(`server is running at ${server}:${port}`);
});
