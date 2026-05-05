const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const app = express();
const port = 3000;
//const user= require("./models/users");
//app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello, World!");
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

