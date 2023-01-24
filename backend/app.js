const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

if (process.env.NODE_ENV != "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

//Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());

//Importing Routes
const post = require("./Routes/post");
const user = require("./Routes/user");

//Using Routes
app.use("/api", post);
app.use("/api", user);

module.exports = app;
