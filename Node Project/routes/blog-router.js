const express = require("express");
const app = express();
const Blog = require("../model/blog");
const User = require("../model/user");
app.post("/blog", async (req, res) => {
  try {
    const {title, blogContent, userId} = req.body;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).send("User not found");
    }
    const blog = new Blog({
      title,
      blogContent,
      userId: user._id,
    });
    const savedBlog = await blog.save();
    console.log("Created a Blog", savedBlog);
    res.status(201).json(savedBlog);
  } catch (err) {
    console.log(err);
    res.status(500).send("Cannot create blog");
  }
});

app.get("/blog-list", async (req, res) => {
  try {
    const blogFound = await Blog.find();
    console.log(blogFound);
    res.status(200).json(blogFound);
  } catch (err) {
    console.log("Error found");
    res.status(500).json({ message: "Error fetching blog", error: err });
  }
});

app.put("/blog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const dataToBeUpdated = req.body;
    const updatedBlog = await Blog.findByIdAndUpdate(id, dataToBeUpdated);
    if (!updatedBlog) {
      return res.status(404).send("No blog found");
    }
    res.status(200).json(updatedBlog);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.delete("/blog/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const blogToBeDeleted = await Blog.findByIdAndDelete(id);
    if (!blogToBeDeleted) {
      return res.status(404).send("Blog not found");
    }
    res.status(200).json(blogToBeDeleted);
    res.send("Blog deleted successfully");
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = app;
