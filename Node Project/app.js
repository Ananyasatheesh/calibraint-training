const express = require("express");
const app = express();
const User = require("./model/user");

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017").then(console.log("DB connected"));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const mainRoutes = require("./routes/main-router");
app.use("/main", mainRoutes);


const userRoutes = require('./routes/user-route');
app.use("/api",userRoutes);

const blogRoutes = require('./routes/blog-router');
app.use("/blogs",blogRoutes);


const userBlogRoutes = require("./routes/user-blog-router");
app.use("/myBlogs", userBlogRoutes);



app.listen(3000, () => {
  console.log("Server listening on 3000");
});
