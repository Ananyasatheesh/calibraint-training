const express = require("express");
const app = express();
const User = require("../model/user");
const Blog = require("../model/blog");

app.get("/my-blogs/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findById(id);
    const myBlog = await Blog.find({ userId: user._id });
    console.log(myBlog);
    res.send("My id found");
    // res.json(myBlog);
  } catch (err) {
    res.send(err);
  }
});



module.exports = app;
